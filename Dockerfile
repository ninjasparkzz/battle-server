FROM node:14-slim

WORKDIR /app

# Install git
RUN apt-get update && apt-get install -y git

# Clone the repo and move back to the year 2016 (Gen 6 era)
RUN git clone https://github.com/smogon/pokemon-showdown.git . && \
    git checkout $(git rev-list -n 1 --before="2016-01-01" master)

# Install and build
RUN npm install --production
RUN node build

EXPOSE 10000

# Start command
CMD ["node", "pokemon-showdown", "start", "--no-security", "--port", "10000"]
