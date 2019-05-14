FROM registry.cn-hangzhou.aliyuncs.com/choerodon-tools/frontbase:0.7.0

ENV PRO_API_HOST gateway.choerodon.example.com
ENV PRO_CLIENT_ID choerodonparent
ENV PRO_LOCAL true
ENV PRO_TITLE_NAME Choerodon
ENV PRO_HEADER_TITLE_NAME Choerodon
ENV PRO_COOKIE_SERVER choerodon.example.com
ENV PRO_HTTP http
ENV PRO_AGILE_HOST devops.choerodon.example.com
ENV PRO_WEBSOCKET_SERVER ws://ws.example.com
ENV PRO_DEVOPS_HOST devops.choerodon.example.com
ENV PRO_AGILE_HOST devops.choerodon.example.com

RUN echo "Asia/shanghai" > /etc/timezone;
ADD lib/dist /usr/share/nginx/html
COPY enterpoint.sh /usr/share/nginx/html

RUN chmod 777 /usr/share/nginx/html/enterpoint.sh
ENTRYPOINT ["/usr/share/nginx/html/enterpoint.sh"]

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
