FROM wordpress:4.9.4

RUN apt-get update && \
    apt-get install -y vim && \
    apt-get install -y mysql-client