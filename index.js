// const http = require("http");
// const fs = require("fs");
// const url = require("url")
const express = require("express")


const app = express();

app.get("/",(req,res)=>{
    return res.send("hello from home page")
})

// app.get("/about",(req,res)=>{
//     return res.send("hello from about page")
// })

app.get("/about",(req,res)=>{
    return res.send(`hello ${req.query.name}`);
})

// function myHandler(req,res){
//     if (req.url === '/favicon.ico') return res.end(); // Ignore favicon requests early

//     const log = `${Date.now()}:${req.url} New Request Received\n`;
//     const myUrl = url.parse(req.url);
//     console.log(myUrl)
    
//     fs.appendFile("log.txt", log, (err) => {
//         if (err) {
//             console.error("Error writing to log file:", err);
//             res.statusCode = 500;
//             return res.end("Internal Server Error");
//         }

//         // Handling routes
//         switch (req.url) {
//             case '/':
//                 res.end("Home Page");
//                 break;
//             case '/about':
//                 res.end("I am Anand Gautam");
//                 break;
//             default:
//                 res.end("404 Not Found");
//         }
//     });
// };


app.listen(8000,()=>console.log("server started"))
// const myServer = http.createServer(app);
   

// myServer.listen(8000, () => console.log("Anand server started"));
