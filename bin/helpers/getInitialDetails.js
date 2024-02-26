const request = require('request'),
      logger = require('./logger').winstonLogger,
      utils = require('./utils'),
      config = require("./config"),
      Constants = require('./constants');

exports.getInitialDetails = (bsConfig, args, rawArgs) => {
  return new Promise((resolve, reject) => {
    let options = {
      url: config.getInitialDetails,
      auth: {
        username: bsConfig.auth.username,
        password: bsConfig.auth.access_key,
      },
      headers: {
        'User-Agent': utils.getUserAgent(),
      }
    };
    let responseData = {};
    request.get(options, function (err, resp, data) {
      if(err) {
        logger.warn(utils.formatRequest(err, resp, data));
        utils.sendUsageReport(bsConfig, args, err, Constants.messageTypes.ERROR, 'get_initial_details_failed', null, rawArgs);
        resolve({});
      } else {
        try {
          responseData = JSON.parse(data);
        } catch (e) {
          responseData = {};
        }
        logger.info(`err - ${JSON.stringify(err)}`);
        logger.info(`data - ${JSON.stringify(data)}`);
        logger.info(`resp - ${JSON.stringify(resp)}`);
        logger.info(`responseData - ${JSON.stringify(responseData)}`);
        if(resp.statusCode != 200) {
            logger.warn(`Warn: Get Initial Details Request failed with status code ${resp.statusCode}`);
            utils.sendUsageReport(bsConfig, args, responseData["error"], Constants.messageTypes.ERROR, 'get_initial_details_failed', null, rawArgs);
            reject({message: responseData["error"], stacktrace: utils.formatRequest(err, resp, data)});
        } else {
            if(responseData.success){
                if (!utils.isUndefined(responseData.grr) && responseData.grr.enabled && !utils.isUndefined(responseData.grr.urls)) {
                    config.uploadUrl = responseData.grr.urls.upload_url;
                }
                resolve(responseData);
            }else{
                logger.error(`${responseData.message}`);
                utils.sendUsageReport(bsConfig, args, responseData.message, Constants.messageTypes.ERROR, 'get_initial_details_failed', null, rawArgs);
                reject({message: responseData.message, stacktrace: utils.formatRequest(err, resp, data)});
            }
        //   if (!utils.isUndefined(responseData.grr) && responseData.grr.enabled && !utils.isUndefined(responseData.grr.urls)) {
        //     config.uploadUrl = responseData.grr.urls.upload_url;
        //   }
        //   resolve(responseData);
        }
      }
    });
  });
};
