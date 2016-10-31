'use strict'
const mongoose = require('mongoose')
const encryption = require('../utilities/encryption')

let requiredValidatioMessage = '{PATH} is required'

let userSchema = mongoose.Schema({
  username: { type: String, required: requiredValidatioMessage, unique: true },
  firstName: { type: String, required: requiredValidatioMessage },
  lastName: { type: String, required: requiredValidatioMessage },
  salt: String,
  hashedPass: String,
  roles: [String]
})

userSchema.method({
  authenticate: function (password) {
    let inputHashedPassword = encryption.generateHashedPassword(this.salt, password)
    if (inputHashedPassword === this.hashedPass)
      return true
    else
      return false
  }
})

let User = mongoose.model('User', userSchema)

module.exports.seedAdminUser = () => {
  User
    .find({})
    .then((users) => {
      if (users.length > 0) return

      let salt = encryption.generateSalt()
      let hashedPass = encryption.generateHashedPassword(salt, 'Nikola')

      User.create({
        username: 'nangelov',
        firstName: 'Nikola',
        lastName: 'Angelov',
        salt: salt,
        hashedPass: hashedPass,
        roles: ['Admin']
      })
    })
}
