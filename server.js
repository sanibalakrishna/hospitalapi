const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const hospitalRoutes = require('./routes/hospitalRoutes');


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/hospitals',hospitalRoutes);

// connect to database
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MongoDb_URL).then(()=>{app.listen(5000,()=>console.log("connected to database && server is live at port 5000"))}).catch((error)=>console.log(error)) 

module.exports = app


