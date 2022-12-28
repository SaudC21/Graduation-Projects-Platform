CREATE TABLE IF NOT EXISTS supervisors (
   uid INTEGER PRIMARY KEY NOT NULL,
   first_name VARCHAR(50),
   last_name VARCHAR(50),
   email VARCHAR(50),
   phone_num VARCHAR(50),
   major VARCHAR(50),
   interests VARCHAR(50)[]
);