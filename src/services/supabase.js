
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://xmljsihcsvrgrflfxryw.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtbGpzaWhjc3ZyZ3JmbGZ4cnl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5MDQ0OTksImV4cCI6MjAwNjQ4MDQ5OX0._rP0j5pCgFLLQWCiY2m7faCxJSN2HZRvocymZK2TQKU"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase