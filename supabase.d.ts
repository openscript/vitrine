export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

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
      projects: {
        Row: {
          title: string;
          icon_url: string | null;
          short_description: string;
          description: string | null;
          id: string;
          updated_at: string;
          author: string;
        };
        Insert: {
          title: string;
          icon_url?: string | null;
          short_description: string;
          description?: string | null;
          id?: string;
          updated_at?: string;
          author?: string;
        };
        Update: {
          title?: string;
          icon_url?: string | null;
          short_description?: string;
          description?: string | null;
          id?: string;
          updated_at?: string;
          author?: string;
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

