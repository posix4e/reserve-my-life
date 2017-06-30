\connect postgres
CREATE ROLE anon;
CREATE SCHEMA api;
CREATE TABLE api.reservables (name varchar(16), description text);
GRANT ALL PRIVILEGES ON SCHEMA api TO anon;
GRANT ALL PRIVILEGES ON TABLE api.reservables TO anon;
