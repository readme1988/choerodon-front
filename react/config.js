const config = {
  local: true, //是否为本地开发
  theme: {
    'primary-color': '#3F51B5',
  },
  cookieServer: '',
  clientId: 'localhost', // 必须填入响应的客户端（本地开发）
  cookieServer: '', //子域名token共享
  titlename: 'Choerodon | 多云应用技术集成平台',
  //   server: 'http://api.choerodon.example.com',
  //   fileServer: 'http://minio.choerodon.example.com',
  // webSocketServer: 'ws://notify.choerodon.example.com',
  server: 'http://api.staging.saas.hand-china.com',
  fileServer: 'http://minio.staging.saas.hand-china.com',
  webSocketServer: 'ws://notify.staging.saas.hand-china.com',
  apimGateway: 'http://apim.alpha.saas.hand-china.com',
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
    "@choerodon/program",
    "@choerodon/devops",
    "@choerodon/apim",
  ],
  resourcesLevel: ['site', 'organization', 'project', 'user'],
  dashboard: {
    iam: {
      components: './node_modules/@choerodon/iam/lib/src/app/iam/dashboard/*',
      locale: './node_modules/@choerodon/iam/lib/src/app/iam/locale/dashboard/*',
    },
    agile: './node_modules/@choerodon/agile/lib/src/app/agile/dashboard/*',
    wiki: './node_modules/@choerodon/wiki/lib/src/app/wiki/dashboard/*'
  },
  guide: {
    iam: {
      components: './node_modules/@choerodon/iam/lib/src/app/iam/guide/*',
      locale: './node_modules/@choerodon/iam/lib/src/app/iam/locale/guide/*',
    },
  },
  emailBlackList: 'qq.com,gmail.com,sina.com,163.com,sina.cn,126.com,yeah.net,189.cn',
  outward: '#/knowledge/share,#/knowledge/organizations/create,#/knowledge/project/create',
};

module.exports = config;
