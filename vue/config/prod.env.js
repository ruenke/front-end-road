'use strict'
let HOST = process.argv.splice(2)[0] || 'prod';
module.exports = {
  NODE_ENV: '"production"',
  LARK_APPID: JSON.stringify("cli_9c04fe6ac6715101"),   //生产环境
  HOST: '"'+HOST+'"'
}