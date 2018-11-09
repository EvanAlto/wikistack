const express = require('express');
const router =  express.Router();

router.get('/', async (req,res,next) => {
    await res.send('USER');
});

module.exports = router;