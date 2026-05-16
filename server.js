

// const http = require('http');

// const server = http.createServer((req, res)=>{
//     res.write("Bhag Yaha Se!");  
//     res.end();
// });

const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("HOME PAGE");

    }else if(req.url === '/about'){
        res.end("ABOUT PAGE");

    }else{
        res.end("404 page not found!!");
    }
});

server.listen(8000, ()=>{
    console.log("Server is running on port 8000");
});

