CREATE TABLE IF NOT EXISTS groups (
   id VARCHAR(50) PRIMARY KEY NOT NULL,
   project_title VARCHAR(50),
   project_desc TEXT,
   supervisor_id INTEGER REFERENCES supervisors(uid)
);