import { supabase } from "@/backend/client";
export async function fetchSales() {
  const { data, error } = await supabase
    .from("sales")
    .select("*")
    .order("created_at", { ascending: false });;
  if (error) {
    throw error;
  }
  return data;
}
