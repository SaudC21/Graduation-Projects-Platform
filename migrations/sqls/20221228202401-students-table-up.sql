CREATE TABLE IF NOT EXISTS students (
   uid INTEGER NOT NULL,
   first_name VARCHAR(50),
   last_name VARCHAR(50),
   email VARCHAR(50),
   password_digest VARCHAR(150),
   phone_num VARCHAR(20),
   major VARCHAR(50),
   group_id VARCHAR(50) REFERENCES projects(id)
);