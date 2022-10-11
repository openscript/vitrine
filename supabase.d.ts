export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          updated_at: string | null;
          forename: string | null;
          surname: string | null;
          username: string | null;
          biography: string | null;
          avatar_url: string | null;
          id: string;
        };
        Insert: {
          updated_at?: string | null;
          forename?: string | null;
          surname?: string | null;
          username?: string | null;
          biography?: string | null;
          avatar_url?: string | null;
          id?: string;
        };
        Update: {
          updated_at?: string | null;
          forename?: string | null;
          surname?: string | null;
          username?: string | null;
          biography?: string | null;
          avatar_url?: string | null;
          id?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
