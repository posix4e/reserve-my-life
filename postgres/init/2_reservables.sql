CREATE TABLE api.reservables (name varchar(16), description text);
GRANT ALL PRIVILEGES ON TABLE api.reservables TO anon;
INSERT INTO api.reservables VALUES ('Ole Miss', 'A 2006 toyota tundra se');
INSERT INTO api.reservables VALUES ('Triangle Room', 'An upstairs loft in the main space of dovetail');
INSERT INTO api.reservables VALUES ('Crawl Space', 'The classic Dore crawl space');
