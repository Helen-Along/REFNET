import { supabase } from "@/backend/client";
export async function fetchFeedback() {
  const { data, error } = await supabase
    .from("feedback")
    .select("*, users:user_id(*)")
    .order("created_at", { ascending: false });
  if (error) {
    throw error;
  }
  return data;
}
