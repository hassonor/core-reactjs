const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = (envVars) => {
  const envConfig = require(`./webpack.${envVars.env}.js`);
  return merge(commonConfig, envConfig);
};
