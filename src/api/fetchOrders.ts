import { supabase } from '@/backend/client';
export async function fetchOrders() {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });;
    if (error) {
        throw error;
    }
    console.log(`Orders data: ${data}`);
    return data;
}