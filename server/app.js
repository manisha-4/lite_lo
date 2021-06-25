const express=require('express');
const app=express();
const mongoose=require('mongoose');
const {MONGOURI}=require('./keys');

const port=5000;

mongoose.connect(MONGOURI,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })

mongoose.connection.on('connected',()=>{
    console.log("connection succesfuly")
})
mongoose.connection.on('error',(err)=>{
    console.log("connection gives error",err)
})
require("./models/post")
require("./models/user")
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))
mongoose.model("User")

app.listen(port,()=>{
    console.log('server is running')
});