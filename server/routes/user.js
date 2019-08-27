const Router = require("koa-router");
const user = require("../models/user");
const router = new Router();

// 获取用户信息
router.get("/user", async (ctx) => {
  try {
    let result = null;
    const Lists = await user.find();
    console.log(Lists);
    if (Lists && Lists.length !== 0) {
        result = {
            code: 1,
            data: Lists,
            message: "成功"
          }
    }else {
        result = {
            code: 0,
            data: [],
            message: "没有数据"
          }
    }

    ctx.body = result
  } catch (err) {
    ctx.body = {
      code: 0,
      data: [],
      message: err
    }
    return;
  }
})

//登录
router.post("/login", async (ctx) => {
    try {
        const params = ctx.request.body;
        const userList = await user.find({userName: params.userName})
        if(userList && userList.length !== 0) {
            ctx.body = {
                code: 1,
                message: "成功",
                data: userList
            }
        }else {
            ctx.body = {
                code: 0,
                message: "该用户还未注册",
            }
        }
    } catch (err) {
        ctx.body = {
            code: 0,
            message: err
        }
    }
})
//注册
router.post("/reject", async (ctx) => {
    try{
        const params = ctx.request.body;
        const userList = await user.create({userName: params.userName,password: params.password})
        if(userList && userList.length !== 0) {
            ctx.body = {
                code: 1,
                message: "成功",
                data: userList
            }
        }
    } catch (err) {
        ctx.body = {
            code: 0,
            message: '该用户已被注册',
        }
    }

})
module.exports = router;