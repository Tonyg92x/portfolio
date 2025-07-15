FROM node:lts AS builder

ENV TZ=America/Toronto

WORKDIR /app

COPY ./frontend/* ./frontend/
COPY ./frontend/vite.config.* ./frontend/
COPY ./frontend/tailwind.config.* ./frontend/
COPY ./frontend/index.html ./frontend/
COPY ./frontend/src ./frontend/src
COPY ./frontend/public ./frontend/public


WORKDIR /app/frontend
RUN npm install --omit=dev --ignore-scripts && \
    npm run build

FROM node:lts-alpine AS runner

WORKDIR /app

COPY --from=builder /app/frontend/dist ./dist

RUN npm install -g serve

EXPOSE 4173

CMD ["serve", "-s", "dist", "-l", "4173"]
