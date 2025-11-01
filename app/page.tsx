'use client'

import { useState, useEffect } from 'react'
import CityCard from '@/components/CityCard'
import { defaultCities, availableCities, type CityData } from '@/lib/cities'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [cities, setCities] = useState<CityData[]>(defaultCities)
  const [isAddingCity, setIsAddingCity] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Load cities from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('userCities')
    if (saved) {
      try {
        setCities(JSON.parse(saved))
      } catch (e) {
        console.error('Failed to load saved cities', e)
      }
    }
  }, [])

  // Save cities to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('userCities', JSON.stringify(cities))
  }, [cities])

  const addCity = (city: CityData) => {
    if (!cities.find(c => c.timezone === city.timezone)) {
      setCities([...cities, city])
    }
    setIsAddingCity(false)
    setSearchQuery('')
  }

  const removeCity = (timezone: string) => {
    if (cities.length > 1) {
      setCities(cities.filter(c => c.timezone !== timezone))
    }
  }

  const filteredCities = availableCities.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    !cities.find(c => c.timezone === city.timezone)
  )

  return (
    <main className="min-h-screen p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1
            className="text-6xl font-bold mb-4 glow-text"
            style={{
              background: 'linear-gradient(135deg, #00d4ff 0%, #b300ff 50%, #ff006e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            WORLD CLOCKS
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Track time across the globe with style
          </p>

          {/* Add City Button */}
          <button
            onClick={() => setIsAddingCity(!isAddingCity)}
            className="px-6 py-3 rounded-full font-semibold transition-all duration-300 glow-border"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(179, 0, 255, 0.2) 100%)',
              boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
            }}
          >
            {isAddingCity ? '✕ Close' : '+ Add City'}
          </button>
        </motion.div>

        {/* City Selection Modal */}
        <AnimatePresence>
          {isAddingCity && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 bg-dark-card rounded-2xl p-6 glow-border overflow-hidden"
            >
              <input
                type="text"
                placeholder="Search cities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-neon-blue/30 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue mb-4"
                style={{ boxShadow: '0 0 10px rgba(0, 212, 255, 0.1)' }}
              />

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-96 overflow-y-auto">
                {filteredCities.map((city) => (
                  <button
                    key={city.timezone}
                    onClick={() => addCity(city)}
                    className="p-4 rounded-lg bg-dark-bg hover:bg-dark-bg/80 border border-neon-blue/20 hover:border-neon-blue transition-all duration-200 text-left"
                    style={{ boxShadow: '0 0 5px rgba(0, 212, 255, 0.1)' }}
                  >
                    <div className="text-2xl mb-1">
                      {String.fromCodePoint(
                        ...city.countryCode
                          .toUpperCase()
                          .split('')
                          .map(char => 127397 + char.charCodeAt(0))
                      )}
                    </div>
                    <div className="font-semibold text-white">{city.name}</div>
                    <div className="text-xs text-gray-400">
                      {city.timezone.split('/')[1]?.replace('_', ' ')}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* City Clocks Grid */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence>
            {cities.map((city, index) => (
              <motion.div
                key={city.timezone}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout
              >
                <CityCard
                  cityName={city.name}
                  timezone={city.timezone}
                  countryCode={city.countryCode}
                  onRemove={() => removeCity(city.timezone)}
                  showRemove={cities.length > 1}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-16 text-center text-gray-500 text-sm">
        <p>Real-time clock updates • {cities.length} cities displayed</p>
      </div>
    </main>
  )
}
