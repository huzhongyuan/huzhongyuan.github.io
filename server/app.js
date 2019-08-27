const Koa = require('koa');
const app = new Koa();

const mongoose = require("mongoose");
const bodyParser = require('koa-bodyparser');
const cors = require("koa-cors");
const userRouter = require('./routes/user');
const articleRouter = require('./routes/article');

mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true })

app.use(cors());
app.use(bodyParser());
app.use(userRouter.routes());
app.use(articleRouter.routes());
app.listen(3000)