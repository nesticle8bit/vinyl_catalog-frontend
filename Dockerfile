FROM node:14.5-alpine AS build
WORKDIR /opt/ng
COPY package.json ./
RUN npm install
ENV PATH="./node_modules/.bin:$PATH"
COPY . ./
RUN ng build --configuration=production

FROM nginx:1.17.1-alpine
COPY --from=build /opt/ng/nginx-custom.conf /etc/nginx/conf.d/default.conf
COPY --from=build /opt/ng/dist/vinylCatalogApp /usr/share/nginx/html
