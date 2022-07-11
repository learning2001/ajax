// 1.引入express
const express = require('express')
const { request } = require('http')

// 2.创建应用框架
const app = express() 

// 3.创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get('/',(request,response)=>{
    response.send("HELLO 申屠宇扬")
})

// 4.监听端口服务
app.listen(8000,()=>{
    console.log('服务器已经启动，8000端口监听中');
})