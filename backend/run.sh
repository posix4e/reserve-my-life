#!/bin/sh
set -exu
export PGUSER=postgres
export PGPASSWORD=docker
export PGHOST=db
export PGPORT=5432
export PGDATABASE=postgres
export DB_SCHEMA=api

# Sleep up to 60 seconds waiting for DB to be ready;
while ! pg_isready -t 5; do
  sleep 1;
done

postgraphql \
	-c postgres://$PGUSER:$PGPASSWORD@$PGHOST:$PGPORT/$PGDATABASE \
	-s $DB_SCHEMA \
    --show-error-stack=true \
    --cors \
	--port 3000 \
	--host 0.0.0.0 
