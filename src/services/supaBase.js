import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zxotylbasoaelrqhypkx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4b3R5bGJhc29hZWxycWh5cGt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExMDYwNTMsImV4cCI6MjAwNjY4MjA1M30.FUKM2QDGLHTNmmqkIUQgPL90_lmmGidAwjCX98M-56E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
