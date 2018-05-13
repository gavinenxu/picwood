const express = require('express');
const router = express.Router();

const _ = require('lodash');
const bcrypt = require("bcrypt");
const saltRounds = 8;
const User = require('../models/users');

router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (_.isUndefined(username) || _.isUndefined(password)) {
        return throwFailed(res, 'Authentication failed. User not found.');
    }

    //xss
    
    User.findOne({ username: username })
    .exec()
    .then(async (userInfo) => {
        if (!userInfo) {
            return res.status(400).json({error: "Not Found This User"});
        }

        let compared = await hashCompare(password, userInfo.password);
        if( !compared ) {
            return res.status(400).json({error: "Password not match"});
        }

        let data = {};
        data.uid = userInfo._id;
        data.username = userInfo.username;
        
        req.session.userInfo = data;
        res.status(200).json(data);
        //responseClient(res, 200, 'LOGIN_SUCCESS', data);
    }).catch(err => {
        res.status(400).json(err);
    })
});

router.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (_.isUndefined(username) || _.isUndefined(password)) {
        return throwFailed(res, 'Authentication failed. User not found.');
    }

    //xss


    User.findOne({username: username}, async (err, user) => {
        
        if(err) {
            return res.status(500).json({error: "Server Error"})
        }
        if(user) {
            return res.status(400).json({error: "Account Exist"});
        }
        
        //password to md5 or bcrypt
        const hash = await hashPassword(password);

        User.create({username: username, password: hash})
        .then(data => {
            if(!data) {
                return res.status(500).json({error: "Create Account Error"});
            }
            res.status(200).json({data: data});
        })
        .catch(error => {
            res.status(500).json({error: error});
        })
    })
});

const throwFailed = (res, message) => {
    return res.json({ success: false, message: message });
}


async function hashPassword(password) {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashPass = await bcrypt.hash(password, saltRounds);
    
    return hashPass;
}

async function hashCompare (password,hashPass) {
    const result = await bcrypt.compare(password, hashPass);
    return result;
}


module.exports = router;