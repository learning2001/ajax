
const express = require('express');

const app = express();

app.get('/home',(request,response)=>{
    //响应一个页面
    response.sendFile(__dirname + '/index.html');
});
app.get('/data',(request,response)=>{
    //响应一个页面
    const data = {
        name:'申屠宇扬',
        age:18
    }
    response.send(JSON.stringify(data))
});

app.get('/jsonp',(request,response)=>{
    //响应一个页面
    const data = {
        name:'申屠宇扬',
        age:18
    }
    response.send(JSON.stringify(data))
});
app.get('/check-username',(request,response)=>{
    //响应一个页面
    const data = {
        exist:1,
        msg:'用户名已经存在'
    };
    let str = JSON.stringify(data);
    response.end(`handle(${str})`)
});

app.listen(8000,()=>{
    console.log('服务已启动。。。');
})