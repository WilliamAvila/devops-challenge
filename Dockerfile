
FROM node:latest AS base

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml tsconfig.json ./

RUN npm install -g pnpm 

RUN pnpm install 
COPY . .

FROM base AS api
WORKDIR /usr/src/app/packages/api
RUN pnpm install nodemon
EXPOSE 3000
CMD ["pnpm", "run", "dev"]


FROM base AS admin
WORKDIR /usr/src/app/packages/admin
RUN pnpm install vite
EXPOSE 3001
CMD ["pnpm", "run", "dev"]
