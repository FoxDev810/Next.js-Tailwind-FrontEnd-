FROM public.ecr.aws/docker/library/node:20 as dependencies
WORKDIR /my-project
COPY package.json package-lock.json ./

RUN npm install

FROM public.ecr.aws/docker/library/node:20 as builder
WORKDIR /my-project
COPY . .
COPY --from=dependencies /my-project/node_modules ./node_modules

ENV NODE_ENV production

RUN npm run build

FROM public.ecr.aws/docker/library/node:20 as runner
WORKDIR /my-project

# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /my-project/next.config.mjs ./
COPY --from=builder /my-project/public ./public
COPY --from=builder /my-project/.next ./.next
COPY --from=builder /my-project/node_modules ./node_modules
COPY --from=builder /my-project/package.json ./package.json

EXPOSE 8000
CMD ["npm", "start"]