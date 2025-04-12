import { supabase } from "@/backend/client";
export async function fetchServices() {
  const { data, error } = await supabase.from("services").select("*").order("created_at", { ascending: false });;
  if (error) {
    throw error;
  }
  return data;
}
