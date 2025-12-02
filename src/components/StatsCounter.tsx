'use client'

import { useState, useEffect } from 'react'

interface StatsCounterProps {
  duration?: number // Animation duration in ms
}

export default function StatsCounter({ duration = 2000 }: StatsCounterProps) {
  const [count, setCount] = useState<number>(0)
  const [displayCount, setDisplayCount] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // Fetch count from API
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch('/api/counter', {
          method: 'GET',
          cache: 'no-store',
        })

        if (response.ok) {
          const data = await response.json()
          setCount(data.count || 3000)
        } else {
          console.error('Failed to fetch counter')
          setCount(3000)
        }
      } catch (error) {
        console.error('Error fetching counter:', error)
        setCount(3000)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCount()
  }, [])

  // Animate count-up when count changes
  useEffect(() => {
    if (isLoading || count === 0 || count < 3000) {
      setDisplayCount(3000)
      return
    }

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Ease-out quad easing function
      const easeOutQuad = (t: number) => t * (2 - t)
      const currentCount = Math.floor(easeOutQuad(progress) * (count - startValue) + startValue)

      setDisplayCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [count, duration, isLoading])

  if (isLoading) {
    return (
      <div className="text-5xl md:text-6xl font-bold mb-3">
        <span className="animate-pulse">...</span>
      </div>
    )
  }

  return (
    <div className="text-5xl md:text-6xl font-bold mb-3">
      {displayCount.toLocaleString('en-US')}+
    </div>
  )
}
