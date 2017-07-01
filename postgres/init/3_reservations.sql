CREATE TABLE api.reservations(
    id bigserial primary key,
    day date NOT NULL,
    reservables_id INTEGER REFERENCES api.reservables(id),
    UNIQUE(day, reservables_id)
); 
GRANT ALL PRIVILEGES ON TABLE api.reservables TO anon;
