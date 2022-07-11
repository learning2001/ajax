// 1.引入express
const express = require('express')

// 2.创建应用框架
const app = express() 

// 3.创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get('/json-serve',(request,response)=>{
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')

    // 设置响应体
    const data = {
        name:'申屠宇扬',
        age:18,
        school:'长春光华学院',
        power:'five star'
    }
    // 对对象进行字符串转换
    let str = JSON.stringify(data)
    response.send(str)
})

// 针对IE缓存
app.get('/ie',(request,response)=>{
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')

    // 设置响应体
    response.send('Hello ie-2')
})

//延时响应
app.get('/delay',(request,response)=>{
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    setTimeout(() => {
        response.send('延时响应')     
    }, 3000);
    // 设置响应体
})

//axios 服务
app.all('/axios-serve',(request,response)=>{
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //响应头
    response.setHeader('Access-Control-Allow-Headers','*')
    const data = {name:'申屠宇扬'};
    response.send(JSON.stringify(data))
    // 设置响应体
})

//fetch 服务
app.all('/fetch-serve',(request,response)=>{
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //响应头
    response.setHeader('Access-Control-Allow-Headers','*')
    const data = {name:'申屠宇扬'};
    response.send(JSON.stringify(data))
    // 设置响应体
})

// 4.监听端口服务
app.listen(8000,()=>{
    console.log('服务器已经启动，8000端口监听中');
})