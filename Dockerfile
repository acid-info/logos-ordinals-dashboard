FROM node:20-alpine

WORKDIR /app

# Listening port
ARG PORT=3000
EXPOSE ${PORT}

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY . .

RUN yarn install --production
RUN yarn build

CMD ["yarn", "start"]
