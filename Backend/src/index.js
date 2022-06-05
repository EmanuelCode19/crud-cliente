const express = require('express');
var cors = require('cors');
const app = express()
require('dotenv').config();
const mongoose = require('mongoose')
const routerApi = require('./routes/client');

const port = process.env.PORT || 9000;

app.use(cors("*"));

//midlewares
app.use(express.json())
app.use("/api",routerApi);


app.get('/',(req,res) => {
     res.sendFile(__dirname+"/index.html")
})


mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('esta conectado a mongoose'))
.catch((e) => console.log(e))

app.listen(port,() => console.log('express esta iniciado en el Port',port));