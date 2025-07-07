import { createClient } from "@/lib/supabase";

export async function getPageViews(slug: string): Promise<number> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("page_views")
    .select("views")
    .eq("page", `blog/${slug}`)
    .single();

  if (error && error.code !== "PGRST116") {
    throw error;
  }

  return data?.views || 0;
}

export async function incrementPageViews(slug: string): Promise<number> {
  const supabase = createClient();

  const { data: currentData, error: fetchError } = await supabase
    .from("page_views")
    .select("views")
    .eq("page", `blog/${slug}`)
    .single();

  if (fetchError && fetchError.code !== "PGRST116") {
    throw fetchError;
  }

  let newViews = 1;

  if (currentData) {
    newViews = currentData.views + 1;
    const { error: updateError } = await supabase
      .from("page_views")
      .update({ views: newViews, updated_at: new Date().toISOString() })
      .eq("page", `blog/${slug}`);

    if (updateError) throw updateError;
  } else {
    const { error: insertError } = await supabase.from("page_views").insert({
      page: `blog/${slug}`,
      views: 1,
    });

    if (insertError) throw insertError;
  }

  return newViews;
}
