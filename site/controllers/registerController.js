const models = require('../database/models')
const User = models.User;
const { check, validationResult, body } = require('express-validator');
const helperError = require('../helpers/showErrors');
const bcryptjs = require('bcryptjs');

const controller = {
    showForm : (req, res) => {
        res.render('auth/register', {
            helper: helperError,
            errors : req.session.errors, data : req.session.data
        });
    },
    register : async(req, res) => {
        const errors = validationResult(req);
        console.log(req.body, errors);
        if (!errors.isEmpty()) {
            return res.redirect('/register');
        }

        const user = await User.create({
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 4),
            name: req.body.name,
            avatar: null
        });
        return res.redirect('/');
    }
}

module.exports = controller;