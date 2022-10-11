-- Create a table for public "profiles"
CREATE TABLE profiles (
  id uuid REFERENCES auth.users NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE,
  forename TEXT,
  surname TEXT,
  username TEXT UNIQUE,
  biography TEXT,
  avatar_url TEXT,

  PRIMARY KEY (id),
  UNIQUE(username),
  CONSTRAINT username_length CHECK (char_length(username) >= 3)
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by everyone."
  ON profiles FOR SELECT
  USING ( true );

CREATE POLICY "Users can insert their own profile."
  ON profiles FOR INSERT
  with check ( auth.uid() = id );

CREATE POLICY "Users can update own profile."
  ON profiles FOR UPDATE
  USING ( auth.uid() = id );

-- Set up Realtime!
BEGIN;
  DROP publication IF EXISTS supabase_realtime;
  CREATE publication supabase_realtime;
COMMIT;
ALTER publication supabase_realtime ADD TABLE profiles;

-- Set up Storage!
INSERT INTO storage.buckets (id, name)
  VALUES ('avatars', 'avatars');

CREATE POLICY "Avatar images are publicly accessible."
  ON storage.objects FOR SELECT
  USING ( bucket_id = 'avatars' );

CREATE POLICY "Anyone can upload an avatar."
  ON storage.objects FOR INSERT
  WITH CHECK ( bucket_id = 'avatars' );