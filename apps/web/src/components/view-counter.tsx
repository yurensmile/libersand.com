"use client"

import { useEffect, useState } from "react"

interface ViewCounterProps {
  slug: string
  className?: string
  trackView?: boolean
}

export function ViewCounter({ slug, className = "", trackView = false }: ViewCounterProps) {
  const [views, setViews] = useState<number>(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchViews = async () => {
      try {
        if (trackView) {
          const response = await fetch("/api/views", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ slug }),
          })
          const data = await response.json()
          setViews(data.views)
        } else {
          const response = await fetch(`/api/views?slug=${encodeURIComponent(slug)}`, {
            method: "GET",
          })
          const data = await response.json()
          setViews(data.views)
        }
      } catch (error) {
        console.error("Error fetching views:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchViews()
  }, [slug, trackView])

  if (loading) {
    return (
      <p className={className}>{"... views"}</p>
    )
  }

  return (
    <p className={className}>{`${Number(views).toLocaleString('en-US')} views`}</p>
  )
}
