const express = require('express');

const router = express.Router();

router.post('/login', (req, res, next) => {
    const idenity = req.body.idenity;
    const password = req.body.password;
    
    res.status(200).json({
        message: 'logged in!'
    });
})



module.exports = router;