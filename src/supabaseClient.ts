import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://oylbnejmbuyqsfidmurt.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_2IQWe3LXWOZf_IVLrDwCFg_VVxuzxez';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);