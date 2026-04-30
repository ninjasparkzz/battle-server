FROM node:14-slim
WORKDIR /app
RUN apt-get update && apt-get install -y git
# This line grabs the light Gen 6 version (2016)
RUN git clone --depth 1 --branch v0.10.0 https://github.com/smogon/pokemon-showdown.git .
RUN npm install --production
RUN node build
EXPOSE 10000
CMD ["node", "pokemon-showdown", "start", "--no-security", "--port", "10000"]
