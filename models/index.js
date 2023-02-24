const { Show } = require('./Show')
const { User } = require('./User')

Show.hasMany(User)
User.hasMany(Show)

module.exports = {Show, User}
