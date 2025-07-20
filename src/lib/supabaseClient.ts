import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zkcuoziwbwvzogtgbktp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprY3Vveml3Ynd2em9ndGdia3RwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwMTA0MjIsImV4cCI6MjA2ODU4NjQyMn0.uYlhONJxMEls0PfUdetrhW5sSKnUqu0GvPjEBQ6CrJY';

export const supabase = createClient(supabaseUrl, supabaseKey);
