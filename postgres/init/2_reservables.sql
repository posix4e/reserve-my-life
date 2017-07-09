BEGIN;
CREATE TABLE api.reservables (
    id INTEGER primary key,
    name varchar(16) UNIQUE,
    description text NOT NULL
);
-- TODO switch to author
GRANT ALL PRIVILEGES ON TABLE api.reservables TO anonymous;
INSERT INTO api.reservables VALUES (1, 'Ole Miss', 'A 2006 toyota tundra se');
INSERT INTO api.reservables VALUES (2, 'Triangle Room', 'An upstairs loft in the main space of dovetail');
INSERT INTO api.reservables VALUES (3, 'Crawl Space', 'The classic Dore crawl space');
COMMIT;
