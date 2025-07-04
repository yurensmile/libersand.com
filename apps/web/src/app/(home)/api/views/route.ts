import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json()

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 })
    }

    const supabase = createClient()

    // Get current view count for this specific blog post
    const { data: currentData, error: fetchError } = await supabase
      .from("page_views")
      .select("views")
      .eq("page", `blog/${slug}`)
      .single()

    if (fetchError && fetchError.code !== "PGRST116") {
      throw fetchError
    }

    let newViews = 1

    if (currentData) {
      // Update existing record
      newViews = currentData.views + 1
      const { error: updateError } = await supabase
        .from("page_views")
        .update({ views: newViews, updated_at: new Date().toISOString() })
        .eq("page", `blog/${slug}`)

      if (updateError) throw updateError
    } else {
      // Insert new record
      const { error: insertError } = await supabase.from("page_views").insert({ page: `blog/${slug}`, views: 1 })

      if (insertError) throw insertError
    }

    return NextResponse.json({ views: newViews })
  } catch (error) {
    console.error("Error updating views:", error)
    return NextResponse.json({ error: "Failed to update views" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get("slug")

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 })
    }

    const supabase = createClient()

    const { data, error } = await supabase.from("page_views").select("views").eq("page", `blog/${slug}`).single()

    if (error && error.code !== "PGRST116") {
      throw error
    }

    return NextResponse.json({ views: data?.views || 0 })
  } catch (error) {
    console.error("Error fetching views:", error)
    return NextResponse.json({ error: "Failed to fetch views" }, { status: 500 })
  }
}
