import { createClient } from '@supabase/supabase-js'

const supabaseURL = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_KEY;

const supabase = createClient(supabaseURL, supabaseKey);

export default supabase;