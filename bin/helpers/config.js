var config = require('./config.json');

config.env = process.env.BSTACK_CYPRESS_NODE_ENV || "production";

if(config.env !== "production") {
  // load config based on env
  require('custom-env').env(config.env);

  config.uploadUrl = process.env.UPLOAD_URL;
  config.rails_host = process.env.RAILS_HOST;
  config.dashboardUrl = process.env.DASHBOARD_URL;
  config.usageReportingUrl = process.env.USAGE_REPORTING_URL;
}

config.cypress_v1 = `${config.rails_host}/cypress/v1`;
config.cypress_v2 = `${config.rails_host}/cypress/v2`;
config.buildUrl = `${config.cypress_v1}/builds/`;
config.buildUrlV2 = `${config.cypress_v2}/builds/`;
config.buildStopUrl = `${config.cypress_v1}/builds/stop/`;
config.checkMd5sum = `${config.cypress_v1}/md5sumcheck/`;
config.getInitialDetails = `${config.cypress_v1}/get_initial_details/`;
config.fileName = "tests.zip";
config.packageFileName = "TGPackages.tar.gz";
config.packageDirName = "tmpBstackPackages";
config.retries = 5;
config.networkErrorExitCode = 2;
config.compiledConfigJsDirName = 'tmpBstackCompiledJs';
config.configJsonFileName = 'tmpCypressConfig.json';

// turboScale
config.turboScaleMd5Sum = `${config.turboScaleUrl}/md5sumcheck`;
config.turboScaleBuildsUrl = `${config.turboScaleUrl}/builds`;

// TG Config
config.browserAllowed = {
  chrome: [
    '120',
    '121',
    'latest',
    'latest-1',
  ],
  firefox: [
    '122',
    '123',
    'latest',
    'latest-1',
  ]
}

module.exports = config;
