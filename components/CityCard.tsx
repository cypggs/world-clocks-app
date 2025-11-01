'use client'

import { useEffect, useState } from 'react'
import AnalogClock from './AnalogClock'

interface CityCardProps {
  cityName: string
  timezone: string
  countryCode: string
  onRemove?: () => void
  showRemove?: boolean
}

export default function CityCard({
  cityName,
  timezone,
  countryCode,
  onRemove,
  showRemove = true
}: CityCardProps) {
  const [time, setTime] = useState(new Date())
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Convert time to target timezone
  const targetTime = new Date(time.toLocaleString('en-US', { timeZone: timezone }))

  const hours = targetTime.getHours()
  const minutes = targetTime.getMinutes()
  const seconds = targetTime.getSeconds()

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  const date = targetTime.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  })

  // Get flag emoji from country code
  const getFlagEmoji = (code: string) => {
    const codePoints = code
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0))
    return String.fromCodePoint(...codePoints)
  }

  return (
    <div
      className="relative bg-gradient-to-br from-dark-card to-dark-bg rounded-2xl p-6 glow-border transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered
          ? '0 0 30px rgba(0, 212, 255, 0.4), inset 0 0 20px rgba(0, 212, 255, 0.1)'
          : '0 0 10px rgba(0, 212, 255, 0.2), inset 0 0 10px rgba(0, 212, 255, 0.05)',
      }}
    >
      {/* Remove button */}
      {showRemove && onRemove && (
        <button
          onClick={onRemove}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-red-500/20 hover:bg-red-500/40 flex items-center justify-center transition-all duration-200 border border-red-500/30 hover:border-red-500"
          style={{ boxShadow: '0 0 10px rgba(255, 0, 110, 0.3)' }}
        >
          <span className="text-red-400 font-bold">×</span>
        </button>
      )}

      {/* City name and flag */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-5xl">{getFlagEmoji(countryCode)}</span>
        <div>
          <h3 className="text-xl font-bold text-neon-blue glow-text">{cityName}</h3>
          <p className="text-sm text-gray-400">{timezone.split('/')[1]?.replace('_', ' ')}</p>
        </div>
      </div>

      {/* Analog clock */}
      <div className="flex justify-center mb-4">
        <AnalogClock timezone={timezone} size={160} />
      </div>

      {/* Digital time display */}
      <div className="text-center">
        <div
          className="text-3xl font-mono font-bold mb-1"
          style={{
            background: 'linear-gradient(135deg, #00d4ff 0%, #b300ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
          }}
        >
          {formattedTime}
        </div>
        <div className="text-sm text-gray-400">{date}</div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50"></div>
    </div>
  )
}
