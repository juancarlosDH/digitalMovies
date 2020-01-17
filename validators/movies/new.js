const { check, validationResult, body } = require('express-validator');

const validationNewMovie = () => {
    return [
        check(['title']).isLength({min:2}),
        check(['rating', 'awards', 'length']).isInt(),
        check('release_date').isLength({min:10, max:10}),
        check('genre_id').notEmpty()
    ]
}

module.exports = validationNewMovie;