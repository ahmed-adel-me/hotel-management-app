import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ipbpsxhqaiwzifejhybb.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export default createClient(supabaseUrl, supabaseKey);
