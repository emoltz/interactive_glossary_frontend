# Use the official Angular image
FROM node:18.13 as build-step

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Use nginx to serve the static files
FROM nginx:1.19
COPY --from=build-step /app/dist/interactive_glossary_frontend /usr/share/nginx/html
