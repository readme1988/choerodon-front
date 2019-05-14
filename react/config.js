const config = {
    clientId: 'localhost', // 必须填入响应的客户端（本地开发）
    cookieServer: '', //子域名token共享
    server: 'http://api.choerodon.example.com',
    fileServer: 'http://minio.choerodon.example.com',
    webSocketServer: 'ws://notify.choerodon.example.com',
    buildType: 'single',
    projectType: 'choerodon',
    master: '@choerodon/master',
    modules: [
        '@choerodon/iam',
        '@choerodon/asgard',
        '@choerodon/notify',
        '@choerodon/manager',
        "@choerodon/agile",
        "@choerodon/issue",
        "@choerodon/testManager",
        "@choerodon/wiki",
        "@choerodon/devops",
        "@choerodon/apim"
    ],
    resourcesLevel: ['site', 'organization', 'project', 'user'],
    dashboard: {},
    guide:{}
};
  
module.exports = config;
  