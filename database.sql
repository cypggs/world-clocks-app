-- World Clocks Database Schema
-- This database stores user-customized clock configurations

-- User clock configurations table
CREATE TABLE IF NOT EXISTS user_clocks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,  -- Anonymous or authenticated user ID
  city_name TEXT NOT NULL,
  timezone TEXT NOT NULL,
  country_code TEXT NOT NULL,  -- ISO 3166-1 alpha-2 country code for flag
  latitude DECIMAL(9,6),
  longitude DECIMAL(9,6),
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_user_clocks_user_id ON user_clocks(user_id);
CREATE INDEX IF NOT EXISTS idx_user_clocks_display_order ON user_clocks(user_id, display_order);

-- Add trigger for auto-updating updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_user_clocks_updated_at
  BEFORE UPDATE ON user_clocks
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE user_clocks ENABLE ROW LEVEL SECURITY;

-- RLS Policies (allow anonymous access for simplicity)
CREATE POLICY "Anyone can view clocks"
  ON user_clocks FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert clocks"
  ON user_clocks FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can update clocks"
  ON user_clocks FOR UPDATE
  USING (true);

CREATE POLICY "Anyone can delete clocks"
  ON user_clocks FOR DELETE
  USING (true);

-- Insert default cities (9 cities including China)
-- Note: These are example defaults, users can customize
COMMENT ON TABLE user_clocks IS 'Stores user-customized clock configurations with city, timezone, and country information';
