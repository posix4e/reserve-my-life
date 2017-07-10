CREATE TABLE api.reservations(
    id bigserial primary key,
    day date NOT NULL,
    reservables_id INTEGER REFERENCES api.reservables(id),
    UNIQUE(day, reservables_id)
); 
-- TODO switch to author
GRANT ALL PRIVILEGES ON TABLE api.reservations TO anonymous;
