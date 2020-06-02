const { check, validationResult, body } = require('express-validator');
const db = require('./../../database/models')
const users = db.User;

const validationRegister = function () {
    return [
        check(['name']).isLength({min:2}),
        check('email').isEmail()
        .custom( value => {
            return  users.findOne({where :{email : value}}).then(user => {
                if (user != null){
                    return Promise.reject('E-mail already in use');
                }
            })
        }),
        check(['password']).isLength({min:4}),
        check('password', 'Passwords does not match')
            .exists()
            .custom((value, { req }) => {
                return value === req.body.c_pass}),
    ]
}

module.exports = validationRegister;