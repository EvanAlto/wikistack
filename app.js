const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + "/public"));

app.get('/', (req,res,next) => {
    res.send('<h1>HELLO</h1>');
})

const PORT = 1337;
app.listen(PORT,()=>{
    console.log(PORT,' is up.');
})