const http = require("http");
const myServer=http.createServer((req, res) => {
        console.log("new req rec..");
        res.end("hello world!");
 });
 myServer.listen(process.env.PORT || 1337,()=>console.log("Server Started"));

