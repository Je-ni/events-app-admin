FROM hoosin/alpine-nginx-nodejs:latest
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
ENV APP_ROOT /home
WORKDIR $APP_ROOT
COPY . $APP_ROOT
RUN npm install && npm run build && cp -r ./build/* /usr/share/nginx/html/

RUN nginx -t

CMD ["nginx","-g","daemon off;"]