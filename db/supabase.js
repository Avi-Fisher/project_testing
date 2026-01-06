import { createClient } from "@supabase/supabase";

export async function connectSupabase() {
    const supabase = await createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY)
    return supabase
}










