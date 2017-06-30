FROM library/postgres
RUN apt-get update -y && apt-get install postgresql-server-dev-all -y
# TODO maybe remove packages again i guess
COPY init /docker-entrypoint-initdb.d/

