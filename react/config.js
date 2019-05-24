const config = {
    local: true, //是否为本地开发
    theme: {
      'primary-color': '#3F51B5',
    },
    cookieServer: '', 
    clientId: 'localhost', // 必须填入响应的客户端（本地开发）
    cookieServer: '', //子域名token共享
  //   server: 'http://api.choerodon.example.com',
  //   fileServer: 'http://minio.choerodon.example.com',
  // webSocketServer: 'ws://notify.choerodon.example.com',
    server: 'http://api.staging.saas.hand-china.com',
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
        "@choerodon/sms",
        "@choerodon/organization",
        "@choerodon/agile",
        "@choerodon/issue",
        "@choerodon/testmanager",
        "@choerodon/wiki",
        "@choerodon/knowledge",
        "@choerodon/devops",
        // "@choerodon/apim",
    ],
    resourcesLevel: ['site', 'organization', 'project', 'user'],
    dashboard: {
      iam: {
        components: './node_modules/@choerodon/iam/lib/src/app/iam/dashboard/*',
        locale: './node_modules/@choerodon/iam/lib/src/app/iam/locale/dashboard/*',
      },
      devops: {
        components: './node_modules/@choerodon/devops/lib/src/app/devops/dashboard/*',
        locale: './node_modules/@choerodon/devops/lib/src/app/devops/locale/dashboard/*',
      },
      agile: './node_modules/@choerodon/agile/lib/src/app/agile/dashboard/*',
      wiki: './node_modules/@choerodon/wiki/lib/src/app/wiki/dashboard/*',
      testManager: './node_modules/@choerodon/testManager/lib/src/app/testManager/dashboard/*',
    },
  guide: {
    iam: {
      components: './node_modules/@choerodon/iam/lib/src/app/iam/guide/*',
      locale: './node_modules/@choerodon/iam/lib/src/app/iam/locale/guide/*',
    },
    }
};
  
module.exports = config;
  