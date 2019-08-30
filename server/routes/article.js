const Router = require("koa-router");
const art = require("../models/article");
const user = require("../models/user");
const router = new Router();


//创建文章
router.post('/createArticle', async (ctx) => {
    console.log(1111)
    try {
        const params = ctx.request.body;
        const article = await art.create({userName: params.userName, title: params.title, content: params.content, createTime: params.createTime})
        ctx.body = {
            code: 1,
            message: '插入成功',
            data: article
        }
    } catch (err) {
        ctx.body = {
            code: 1,
            message: '插入失败',
            data: err
        }
    }
})

//删除文章
router.post('/deleteArticle', async (ctx) => {
    try {
        const params = ctx.request.body;

    } catch (err) {
        ctx.body = {
            code: 0,
            message: err
        }
    }
})

//获取某人文章列表
router.get('/articleList/:userName', async (ctx) => {
    try {
        console.log(ctx.params.userName);
        const List = await art.find({ userName: ctx.params.userName });
        ctx.body = {
            data: 1,
            message: '获取文章成功',
            data: List
        }
    } catch (err) {
        ctx.body = {
            code: 0, 
            message: '获取文章失败',
            data: err
        }
    }
})

//获取文章详情
router.get('/articleInfo/:_id', async (ctx) => {
    try {
        const articleInfo = await art.find({_id: ctx.params._id})
        console.log(articleInfo)
        if(articleInfo && articleInfo.length !== 0) {
            ctx.body = {
                code: 1,
                message: '获取详情成功',
                data: articleInfo
            }
        } else {
            ctx.body = {
                code: 2,
                message: '该文章不存在或被删除'
            }
        }

    } catch (err) {
        ctx.body = {
            code: 0,
            message: '获取详情失败',
            data: err
        }
    }
})


//回复文章
router.post('/replyArticle', async (ctx) => {
    try {
        const params = ctx.request.body;
        let repeat = await Promise.all([art.find({_id: params._id}), user.find({userName: params.userName})])

        console.log(repeat);
        const rep = {
            userName: params.userName,
            time: new Date(),
            content: params.repeat,
            star: 0
        }
        
        //向文章表中插入回复数据 //用户回复列表中插入数据
        const replay = await Promise.all([art.update({_id: params._id}, {repeat: [...repeat[0][0].repeat,rep]}), user.update({userName: params.userName},{replayLsit: [...repeat[1][0].replayLsit,params._id]})])   ;

        ctx.body = {
            code: 1,
            message: '回复成功',
            data: replay
        }
    } catch (err) {
        ctx.body = {
            code: 0,
            message: '回复文章失败',
            data: err
        }
    }


})


module.exports = router;