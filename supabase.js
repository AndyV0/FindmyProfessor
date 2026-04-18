// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://pyndqyyyhijbxmkhlllp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5bmRxeXl5aGlqYnhta2hsbGxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0NzU4MzYsImV4cCI6MjA5MjA1MTgzNn0.GRHQCHRWWKYLHv5R8U_kyEjLxoEkdDxn_ReVV9Kfi7Y'

export const supabase = createClient(supabaseUrl, supabaseKey)
