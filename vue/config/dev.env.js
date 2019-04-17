'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',    
  LARK_APPID: JSON.stringify("cli_9cc2d7f060fc5108")   //测试环境
})
