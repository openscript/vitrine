CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  title VARCHAR(50) NOT NULL,
  icon_url VARCHAR(255),
  short_description VARCHAR(250) NOT NULL,
  description TEXT,
  author UUID NOT NULL DEFAULT auth.uid()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Projects are viewable by everyone."
  ON projects FOR SELECT
  USING ( true );

CREATE POLICY "Users can insert their own projects."
  ON projects FOR INSERT
  with check ( auth.uid() = author );

CREATE POLICY "Users can update their own projects."
  ON projects FOR UPDATE
  USING ( auth.uid() = author );

CREATE OR REPLACE FUNCTION update_record_timestamps()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_project_record_timestamps
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE PROCEDURE update_record_timestamps();

ALTER publication supabase_realtime ADD TABLE projects;