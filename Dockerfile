FROM oven/bun:latest

COPY bun.lockb ./

COPY apps/docs/package.json ./

RUN bun install

COPY apps/docs ./

RUN bun run build

EXPOSE 3000

RUN bun run start
