const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

module.exports = {

    login(req,res){
    // validate user details here
        const user = {
            id: 1,
            username: 'admin',
            email: 'admin@admin.com',
            password: 'admin'
        };
        const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.send(token);

        },

    register(req, res) {
        // validate user input first

       const user = {
            id: 1,
            username: 'admin',
            email: 'admin@admin.com',
            password: 'admin'
        };
        const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.send(token);

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
        if(verified){
            return res.send("Successfully Verified");
        }else{
            // Access Denied
            return res.status(401).send(error);
        }
    } catch (error) {
        // Access Denied
        return res.status(401).send(error);
    }
    }
}