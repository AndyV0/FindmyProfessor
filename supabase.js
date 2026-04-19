// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://efwgg.supabase.co'
const supabaseKey = 'placholder'

export const supabase = createClient(supabaseUrl, supabaseKey)
