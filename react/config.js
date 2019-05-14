const config = {
    local: true, //是否为本地开发
    clientId: 'localhost', // 必须填入响应的客户端（本地开发）
    titlename: 'Choerodon | 企业数字化服务平台', //项目页面的title名称
    favicon: 'favicon.ico', //项目页面的icon图片名称
    fileServer: 'http://minio.choerodon.example.com',
    theme: {
      'primary-color': '#3F51B5',
    },
    cookieServer: '', //子域名token共享
    server: 'http://api.c7nf.choerodon.staging.saas.hand-china.com',
    fileServer: 'http://minio.staging.saas.hand-china.com',
    webSocketServer: 'ws://notify.staging.saas.hand-china.com',
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
  