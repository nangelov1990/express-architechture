'use strict'
const path = require('path')

let rootPath = path.normalize(path.join(__dirname, '/../../'))

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://localhost:27017/BLOG-express-auth-demo',
    port: 2993,
    sessionSecret: '@def-session-secret#'
  },
  production: {
    rootPath: rootPath,
    db: process.env.MONGO_DB_CONN_STRING,
    port: process.env.port,
    sessionSecret: process.env.SESSION_SECRET
  }
}
