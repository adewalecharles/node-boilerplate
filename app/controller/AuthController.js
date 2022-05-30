require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');

module.exports = {

    login(req, res) {
    // validate user details here
        const user = {
            id: 1,
            username: 'admin',
            email: 'admin@admin.com',
            password: 'admin'
        };
        const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

        res.status(200).json({token: token});

        },

    register(req, res) {
        // validate user input first

       const user = {
            id: 1,
            username: 'admin',
            email: 'admin@admin.com',
            password: 'admin'
        };
        const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

        res.status(201).json({token: token});

    },

    validateJwtToken(req, res)
    {
        // Tokens are generally passed in the header of the request
    // Due to security reasons.
        
        let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
  
    try {
        const token = req.header(tokenHeaderKey);
  
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            res.status(200).json({message: "Successfully Verified"});
        }else{
            // Access Denied
            res.status(401).json({message:'Token is not valid'});

        }
    } catch (error) {
        // Access Denied
        res.status(401).json({message:error});
    }
    }
}