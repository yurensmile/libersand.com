"use client"

import { useEffect, useState } from "react"

interface ViewCounterProps {
  slug: string
  className?: string
}

export function ViewCounter({ slug, className = "" }: ViewCounterProps) {
  const [views, setViews] = useState<number>(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const incrementView = async () => {
      try {
        const response = await fetch("/api/views", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ slug }),
        })
        const data = await response.json()
        setViews(data.views)
      } catch (error) {
        console.error("Error incrementing view:", error)
      } finally {
        setLoading(false)
      }
    }

    incrementView()
  }, [slug])

  if (loading) {
    return (
      <p className={className}>{"... views"}</p>
    )
  }

  return (
    <p className={className}>{`${Number(views).toLocaleString('en-US')} views`}</p>
  )
}
