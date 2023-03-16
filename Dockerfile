FROM nginx:alpine
LABEL author="hbouhali"
COPY dist/team-planning /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
