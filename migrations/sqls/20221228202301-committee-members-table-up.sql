CREATE TABLE IF NOT EXISTS committee_members (
   uid INTEGER PRIMARY KEY NOT NULL,
   first_name VARCHAR(50),
   last_name VARCHAR(50),
   email VARCHAR(50),
   password_digest VARCHAR(150),
   phone_number VARCHAR(50),
   major VARCHAR(50)
);