import { supabase } from "@/backend/client";
export async function fetchReports() {
  const { data, error } = await supabase
    .from("reports")
    .select("*, users:generated_by(*)")
    .order("created_at", { ascending: false });
  if (error) {
    throw error;
  }
  return data;
}
