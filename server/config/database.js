'use strict'
let mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = (config) => {
  mongoose.connect(config.db)

  let db = mongoose.connection

  db.once('open', err => {
    if (err) console.error(err)

    console.log('MongoDB ready')
  })

  db.on('error', err => console.error(err))
}
