const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由对象
const r=express.Router();
r.post('/01',(req,res)=>{
let obj=req.body;
console.log(obj);
});