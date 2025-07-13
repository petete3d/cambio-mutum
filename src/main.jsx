import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://axflkwohcjsskxqvtqzs.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4Zmxrd29oY2pzc2t4cXZ0cXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2NTE5NDcsImV4cCI6MjA2NzIyNzk0N30.JkFd0JrKKMGfK64jkFqaAKzN2YApEnj70D5XwJE4Mng'
);
