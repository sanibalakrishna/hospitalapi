const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();


const {createBlog} = require("./controllers/blogcontroller")
  

app.use(express.json())
app.get('/',(req,res)=>{
    return res.send("Hello");})

app.post('/',createBlog);

// connect to database
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MongoDb_URL).then(()=>{app.listen(5000,()=>console.log("connected to database && server is live at port 5000"))}).catch((error)=>console.log(error)) 

module.exports = app


