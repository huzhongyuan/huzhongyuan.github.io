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
  },
  //收藏文章列表
  collectionList:{
    type: Array,
    default: []
  },
  //点赞列表
  starList: {
    type: Array,
    default: []
  },
  //回复列表
  replayLsit: {
    type: Array,
    default: []
  }
})
let user = module.exports = mongoose.model('user', appSchema);