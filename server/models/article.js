var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var appSchema = new Schema({
  //用户名
  userName: {
    type: String,
    required: true
  },
  // 标题
  title: {
    type: String,
    required: true
  },
  // 内容
  content: {
    type: String,
    required: true
  },
  // 创建时间
  createTime: {
    type: String,
    required: true
  },
  // 点赞
  star: {
    type: String,
    default: 0
  },
  // 回复
  repeat: {
    type: Array,
    default: []
  },
  //收藏
  isCollection: {
    type: Boolean,
    default: false
  }
})
let article = module.exports = mongoose.model('article', appSchema);