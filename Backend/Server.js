import app from './src/app.js';
import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first");
import dotenv from 'dotenv';
import connecttoDB from './src/config/Database.js';
dotenv.config();

connecttoDB();
app.listen(3000,function(){
    console.log("server is running at port 3000");
})