const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const validationNewMovie = require('../validators/movies/new');
const multer = require('multer');
const path = require('path');
const redirectIsHasErrors = require('../middlewares/redirectIsHasErrors');

const storageDisk = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, __dirname + '/../../public/images/movies/posters');
	},
	filename: (req, file, cb) => {
		let imageFinalName = `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`;
		cb(null, imageFinalName);
	}
});

const upload = multer({ storage: storageDisk });

/* GET users listing. */
router.get('/', movieController.index);
router.get('/new', movieController.new);
router.post('/new', upload.single('poster'), validationNewMovie(), redirectIsHasErrors, movieController.create);


router.get('/:id/edit', movieController.edit);
router.put('/:id/edit', movieController.save);

module.exports = router;
