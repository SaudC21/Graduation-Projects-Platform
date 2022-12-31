CREATE TABLE IF NOT EXISTS projects (
   id VARCHAR(50) PRIMARY KEY NOT NULL,
   project_title VARCHAR(50),
   project_desc TEXT,
   repo_link TEXT,
   supervisor_id INTEGER REFERENCES supervisors(uid)
);