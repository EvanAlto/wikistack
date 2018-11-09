const express = require('express');
const morgan = require('morgan');
const app = express();
const layout = require('./views/layout');
const { Page, User, db } = require('./models');

const PORT = 1337;
// db.authenticate().then(() => {
    //     console.log('db is authenticated');
    // })
    
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + "/public"));

app.get('/', (req,res,next) => {
    res.send(layout(''));
})

const synchronize = async () => {
    await db.sync({force : true});
    app.listen(PORT,()=>{
        console.log(`server on ${PORT} is a go.`);
    })
}

synchronize();