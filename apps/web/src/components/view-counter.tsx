"use client"

import { useEffect, useState } from "react"

export function ViewCounter() {
  const [views, setViews] = useState<number>(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const incrementView = async () => {
      try {
        const response = await fetch("/api/views", {
          method: "POST",
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
  }, [])

  if (loading) {
    return (
      <div />
    )
  }

  return (
    // <div className="fixed bottom-4 right-4 bg-[#21262d] border border-[#30363d] rounded-lg px-4 py-2 text-white shadow-lg">
    //   <div className="flex items-center space-x-2">
    //     <Eye className="w-4 h-4" />
    //     <span>{views.toLocaleString()} views</span>
    //   </div>
    // </div>
    <p className="text-neutral-600 dark:text-neutral-400">{`${Number(views).toLocaleString('en-US')} views`}</p>
  )
}
