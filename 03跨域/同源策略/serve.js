
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

app.listen(9000,()=>{
    console.log('服务已启动。。。');
})