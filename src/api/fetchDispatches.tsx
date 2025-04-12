import { supabase } from "@/backend/client";
export async function fetchDispatches() {
  const { data, error } = await supabase
    .from("dispatches")
    .select("*")
    .order("created_at", { ascending: false });;
  if (error) {
    throw error;
  }
  console.log(`Dispatches data: ${data}`);
  return data;
}
