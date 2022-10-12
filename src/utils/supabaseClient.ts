import { createClient } from '@supabase/supabase-js';
import { Database } from '../../supabase';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || '';

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
