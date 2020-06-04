const jwt = require('jsonwebtoken');
const  { SEED } = require('../config/config');

let verifyToken = (req, res, next) => {
    let token = req.get('Authorization');

    jwt.verify(token, SEED, (err, decode) => {
        if(err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'token invalido'
                }
            })
        }

        req.user = decode.user;
        next();
    });
}

let verifyRole = (req, res, next) => {
    let user = req.user;
    if(user.role != 'ADMIN_ROLE') {
        return res.status(401).json({
            ok: false,
            err: {
                message: 'need admin role'
            }
        });
    }
    //if(user.role == 'TEACHER_ROLE')

    next();
}

module.exports = {
    verifyToken,
    verifyRole
}
