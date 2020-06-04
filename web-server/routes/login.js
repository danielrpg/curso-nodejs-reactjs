const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {findUser} = require('../models/user');
const {SEED, TIME_TOKEN} = require('../config/config');

const app = express();

app.post('/login', (req, res) => {

    let body = req.body;
    let user = findUser(body.email);

    if(!user) {
        return res.status(401).json({
            ok: false,
            message: 'Usuario o el Password es incorrecto'
        });
    }

    if(!bcrypt.compareSync(body.password, user.password)) {
        return res.status(401).json({
            ok: false,
            err: {
                message: 'Usuario o el Password es incorrecto'
            }
        });
    }

    let token = jwt.sign({ user }, SEED, {expiresIn: TIME_TOKEN});
    return res.json( {
        ok: true,
        user,
        token
    });

})

module.exports = app;