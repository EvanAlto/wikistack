const express = require('express');
const morgan = require('morgan');
const app = express();
const layout = require('./views/layout');
const { db } = require('./models');

db.authenticate().then(() => {
    console.log('db is authenticated');
})

app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + "/public"));

app.get('/', (req,res,next) => {
    res.send(layout(''));
})

const PORT = 1337;
app.listen(PORT,()=>{
    console.log(`server on ${PORT} is a go.`);
})