var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var appSchema = new Schema({
  // 主键用户名
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})
let user = module.exports = mongoose.model('user', appSchema);