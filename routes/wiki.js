const express = require('express');
const router = express.Router();
const { Page } = require('../models/index');
const { addPage } = require('../views/index');

router.get('/', (req,res,next) => {
    res.send('retrieve all wiki pages');
});

router.post('/', async (req,res,next) => {

    const { title, content } = req.body;

    const slug = title.split(' ').join('_');
    const reg = /[0-9]/;
    
    console.log(slug.replace(reg,'NaN'));

    // const page = new Page({
    //     title: title,
    //     content: content 
    // })

    // try {
    //     await page.save();
    //     res.redirect('/');
    // } catch (error) { 
    //     next(error)
    // }
})

router.get('/add', (req,res,next) => {
    res.send(addPage());
})

module.exports = router;