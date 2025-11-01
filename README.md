# World Clocks App

A futuristic world clock application with stunning neon UI effects, displaying real-time clocks for cities around the globe.

## Features

- **9 Default Cities**: Including Beijing (China), New York, London, Tokyo, Paris, Sydney, Moscow, Dubai, and Singapore
- **Customizable City Selection**: Choose from 25+ major cities worldwide
- **Stunning Analog Clocks**: Beautiful animated analog clocks with neon glow effects
- **Digital Time Display**: Precise digital time with timezone support
- **Country Flags**: Each city displays its country flag using emoji
- **Real-time Updates**: Clocks update every second
- **Responsive Design**: Grid layout adapts to different screen sizes
- **Local Storage**: Your city preferences are saved automatically
- **Smooth Animations**: Powered by Framer Motion
- **Cyberpunk Aesthetics**: Gradient UI with neon blue, purple, and pink accents

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Supabase** - Backend (ready for cloud sync features)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/cypggs/world-clocks-app.git
cd world-clocks-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Database Setup (Optional)

If you want to enable cloud sync for user preferences:

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Run the SQL script from `database.sql`

This creates the `user_clocks` table with Row Level Security policies.

## Deployment

The app is deployed on Vercel and automatically deploys when you push to the main branch.

**Production URL**: https://world-clocks-guwdiauwa-cypggs-projects.vercel.app

## Project Structure

```
world-clocks-app/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page with city grid
│   └── globals.css      # Global styles
├── components/
│   ├── AnalogClock.tsx  # Analog clock component
│   └── CityCard.tsx     # City card with clock
├── lib/
│   ├── cities.ts        # City data and configurations
│   └── supabase.ts      # Supabase client
├── database.sql         # Database schema
└── package.json
```

## Customization

### Adding New Cities

Edit `lib/cities.ts` and add your city to the `availableCities` array:

```typescript
{
  name: 'Your City',
  timezone: 'Continent/City',
  countryCode: 'XX',
  latitude: 0.0,
  longitude: 0.0,
}
```

### Changing Colors

Edit `tailwind.config.js` to customize the neon colors:

```javascript
colors: {
  'neon-blue': '#00d4ff',
  'neon-purple': '#b300ff',
  'neon-pink': '#ff006e',
}
```

## Future Enhancements

- [ ] User authentication for cross-device sync
- [ ] Dark/light mode toggle
- [ ] Time zone converter
- [ ] World map visualization
- [ ] Weather integration
- [ ] Custom color themes

## License

MIT

## Credits

Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
