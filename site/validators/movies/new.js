const { check, validationResult, body } = require('express-validator');
const path = require('path');

const validationNewMovie = () => {
    return [
        check(['title']).isLength({min:2}),
        check(['rating', 'awards', 'length']).isInt(),
        check('releaseDate').isLength({min:10, max:10}),
        check('genreId').notEmpty(),
        body('poster').custom((value, { req }) => {
           if(req.file != undefined){
              const acceptedExtensions = ['.jpg', '.jpeg', '.png'];
              const ext = path.extname(req.file.originalname)
              return acceptedExtensions.includes(ext);
           }
           return true
        }).withMessage('La imagen debe tener uno de los siguientes formatos: JPG, JPEG, PNG'),
    ]
}

module.exports = validationNewMovie;