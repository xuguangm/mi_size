const express=require('express');
const app=express();
//引入中间件模块body-parser
const bodyParser=require('body-parser');
//引入用户路由
const userRouter=require('./r/yonghu.js');

console.log(userRouter);
app.listen(8080);
//静态托管资源到p目录
app.us(express.static('./p'));
//应用中间件模块body-parser将post请求的数据解析为对象
app.us(bodyParser.urlencoded({
extended:false
}));





//挂载用户路由，添加前缀
app.us('/yonghu',userRouter)