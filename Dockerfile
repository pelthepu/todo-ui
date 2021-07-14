# build environment
FROM node:12.16.0-buster as build

# Create app directory
WORKDIR /app
COPY package.json ./

# Install dependencies
RUN npm install

# Copy source code to image
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

# Expose port for service
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]