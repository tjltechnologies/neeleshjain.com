import { createClient } from '@supabase/supabase-js';

const supabaseUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/**
 * Browser / client-side Supabase client.
 * Import this in Client Components and API routes that run in
 * non-sensitive contexts.
 */
export const supabase = createClient(supabaseUrl, supabaseAnon);
