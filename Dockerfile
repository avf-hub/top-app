FROM node:24-alpine
WORKDIR /opt/app
ADD package.json package.json
RUN npm install
ADD . .
ENV NODE_ENV prodaction
RUN npm run build
RUN npm prune --prodaction
CMD ["npm", "start"]
EXPOSE 3000