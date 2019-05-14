const config = {
    local: true, //是否为本地开发
    clientId: 'localhost', // 必须填入响应的客户端（本地开发）
    titlename: 'Choerodon | 企业数字化服务平台', //项目页面的title名称
    favicon: 'favicon.ico', //项目页面的icon图片名称
    theme: {
      'primary-color': '#3F51B5',
    },
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
  