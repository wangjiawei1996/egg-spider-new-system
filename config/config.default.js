/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1554778895240_3986';

  // add your middleware config here
  config.middleware = ['printdate','forbidip'];
  config.printdate = {
    aaa:'aaaaa'
  }
  config.forbidip = {
    forbidips:'aaaaa'
  }
  config.view = {
    mapping: {
      '.html': 'ejs',
    }
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.api = 'http://www.phonegap100.com/';
  return {
    ...config,
    ...userConfig,
  };
};
