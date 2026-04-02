/* ============================================================
   NEELESH JAIN PORTFOLIO — supabase.js
   Initialises the Supabase client and exposes it as window.sb
   ============================================================ */

'use strict';

const SUPABASE_URL      = 'https://ykrvuddurbtsyrdmmxlx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrcnZ1ZGR1cmJ0c3lyZG1teGx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxNDAyNjgsImV4cCI6MjA5MDcxNjI2OH0.ouOOPKJnAYywhC8irwUy9vfVIgmI9stlYMJlvbADQAs';

/* The Supabase UMD bundle exposes a global `supabase` object */
const { createClient } = supabase;

/**
 * Shared Supabase client — use window.sb anywhere in the project.
 * Example:
 *   const { data, error } = await window.sb.from('projects').select('*');
 */
window.sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
