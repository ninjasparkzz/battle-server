# We use Node 20 (modern and stable)
FROM node:20-slim

WORKDIR /app

# Install git (this will work now)
RUN apt-get update && apt-get install -y git

# Grab the Gen 6 code from early 2016
RUN git clone https://github.com/smogon/pokemon-showdown.git . && \
    git checkout $(git rev-list -n 1 --before="2016-01-01" master)

# Install and build
RUN npm install --production
RUN node build

EXPOSE 10000

# Start command
CMD ["node", "pokemon-showdown", "start", "--no-security", "--port", "10000"]
