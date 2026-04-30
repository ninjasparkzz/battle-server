FROM node:20-slim

WORKDIR /app

# Install git
RUN apt-get update && apt-get install -y git

# Grab the code from the end of 2015 (Gen 6 era)
RUN git clone https://github.com/smogon/pokemon-showdown.git . && \
    git checkout $(git rev-list -n 1 --before="2016-01-01" master)

# Install basic needs
RUN npm install --production

# No build step needed for 2015 code!
EXPOSE 10000

# Start command
CMD ["node", "pokemon-showdown", "10000"]
