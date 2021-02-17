const  http=require('http');
const fs=require('fs');

const port=8084;
const host='localhost';
const server=http.createServer((req,res)=>{
    console.log('method',req.method);
    console.log('url',req.url);
    console.log('header',req.headers);
    //res.statusCode=200;
    //res.setHeader('Content-Type', 'text/html');
    //res.write();
    //res.end();


}

);

server.listen(port,host,() =>{
    console.log('The server is running on port',port);
});