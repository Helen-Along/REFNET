import { supabase } from "@/backend/client";
export async function fetchCustomers() {
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("role", "customer")
    .order("created_at", { ascending: false });
  console.log('Customer Data:', data)
  return data;
}
