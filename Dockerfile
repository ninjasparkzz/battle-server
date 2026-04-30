# Node 20 is modern and will NOT have the "exit code 100" error
FROM node:20-slim

WORKDIR /app

# Install git
RUN apt-get update && apt-get install -y git

# Grab the stable Gen 7 code (late 2018)
RUN git clone https://github.com/smogon/pokemon-showdown.git . && \
    git checkout $(git rev-list -n 1 --before="2018-12-01" master)

# Install and build
RUN npm install --production
RUN node build

EXPOSE 10000

# Start command
CMD ["node", "pokemon-showdown", "start", "--no-security", "--port", "10000"]
