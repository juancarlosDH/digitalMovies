const { check, validationResult, body } = require('express-validator');

const  redirectIsHasErrors = (req, res, next) => {
    const errors = validationResult(req);
    req.session.data = req.body;
    const finalErrors = errors.errors.map(err => { return { [err.param]: err.msg } } );
    console.log(finalErrors)
    if (!errors.isEmpty()) {
        req.session.errors = finalErrors;
        res.redirect(302, 'back');
    } else {
        next();
    }
}

module.exports = redirectIsHasErrors;