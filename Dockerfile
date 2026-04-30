FROM node:20-slim

WORKDIR /app

RUN apt-get update && apt-get install -y git

# Grab the stable Gen 8 code (Mid 2021)
# Modern enough to build perfectly, small enough to fit in RAM!
RUN git clone https://github.com/smogon/pokemon-showdown.git . && \
    git checkout $(git rev-list -n 1 --before="2021-06-01" master)

# Auto-configure ports and RAM settings
RUN cp config/config-example.js config/config.js && \
    echo "exports.port = process.env.PORT || 10000;" >> config/config.js && \
    echo "exports.bindaddress = '0.0.0.0';" >> config/config.js && \
    echo "exports.subprocesses = 0;" >> config/config.js

# Install and build
RUN npm install --production
RUN node build

EXPOSE 10000

# Start command (No artificial RAM limits needed for Gen 8)
CMD ["node", "pokemon-showdown", "start", "--no-security"]


