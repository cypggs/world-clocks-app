'use client'

import { useEffect, useState } from 'react'

interface AnalogClockProps {
  timezone: string
  size?: number
}

export default function AnalogClock({ timezone, size = 180 }: AnalogClockProps) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Convert time to target timezone
  const targetTime = new Date(time.toLocaleString('en-US', { timeZone: timezone }))

  const hours = targetTime.getHours() % 12
  const minutes = targetTime.getMinutes()
  const seconds = targetTime.getSeconds()

  // Calculate angles
  const secondAngle = (seconds * 6) - 90 // 6 degrees per second
  const minuteAngle = (minutes * 6 + seconds * 0.1) - 90 // 6 degrees per minute
  const hourAngle = (hours * 30 + minutes * 0.5) - 90 // 30 degrees per hour

  const center = size / 2
  const clockRadius = size * 0.45

  // Calculate hand positions
  const getHandPosition = (angle: number, length: number) => {
    const rad = (angle * Math.PI) / 180
    return {
      x: center + Math.cos(rad) * length,
      y: center + Math.sin(rad) * length,
    }
  }

  const hourHand = getHandPosition(hourAngle, clockRadius * 0.5)
  const minuteHand = getHandPosition(minuteAngle, clockRadius * 0.7)
  const secondHand = getHandPosition(secondAngle, clockRadius * 0.85)

  return (
    <svg
      width={size}
      height={size}
      className="drop-shadow-lg"
      style={{ filter: 'drop-shadow(0 0 10px rgba(0, 212, 255, 0.3))' }}
    >
      {/* Outer glow circle */}
      <circle
        cx={center}
        cy={center}
        r={clockRadius + 5}
        fill="none"
        stroke="url(#gradient1)"
        strokeWidth="2"
        opacity="0.3"
      />

      {/* Clock face */}
      <circle
        cx={center}
        cy={center}
        r={clockRadius}
        fill="rgba(20, 20, 32, 0.8)"
        stroke="url(#gradient1)"
        strokeWidth="3"
      />

      {/* Hour markers */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180)
        const x1 = center + Math.cos(angle) * (clockRadius * 0.85)
        const y1 = center + Math.sin(angle) * (clockRadius * 0.85)
        const x2 = center + Math.cos(angle) * (clockRadius * 0.95)
        const y2 = center + Math.sin(angle) * (clockRadius * 0.95)

        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={i % 3 === 0 ? '#00d4ff' : 'rgba(0, 212, 255, 0.5)'}
            strokeWidth={i % 3 === 0 ? '3' : '2'}
            strokeLinecap="round"
          />
        )
      })}

      {/* Hour hand */}
      <line
        x1={center}
        y1={center}
        x2={hourHand.x}
        y2={hourHand.y}
        stroke="#00d4ff"
        strokeWidth="6"
        strokeLinecap="round"
        style={{ filter: 'drop-shadow(0 0 5px rgba(0, 212, 255, 0.8))' }}
      />

      {/* Minute hand */}
      <line
        x1={center}
        y1={center}
        x2={minuteHand.x}
        y2={minuteHand.y}
        stroke="#b300ff"
        strokeWidth="4"
        strokeLinecap="round"
        style={{ filter: 'drop-shadow(0 0 5px rgba(179, 0, 255, 0.8))' }}
      />

      {/* Second hand */}
      <line
        x1={center}
        y1={center}
        x2={secondHand.x}
        y2={secondHand.y}
        stroke="#ff006e"
        strokeWidth="2"
        strokeLinecap="round"
        style={{ filter: 'drop-shadow(0 0 5px rgba(255, 0, 110, 0.8))' }}
      />

      {/* Center dot */}
      <circle
        cx={center}
        cy={center}
        r="8"
        fill="url(#gradient2)"
      />
      <circle
        cx={center}
        cy={center}
        r="4"
        fill="#ffffff"
      />

      {/* Gradients */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#b300ff" />
        </linearGradient>
        <radialGradient id="gradient2">
          <stop offset="0%" stopColor="#ff006e" />
          <stop offset="100%" stopColor="#b300ff" />
        </radialGradient>
      </defs>
    </svg>
  )
}
