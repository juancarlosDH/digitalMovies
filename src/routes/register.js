const express = require('express');
const router = express.Router();
const controller = require('../controllers/registerController');
const validationRegister = require('../validators/auth/register');
const multer = require('multer');
const path = require('path');
const redirectIsHasErrors = require('../middlewares/redirectIsHasErrors');

const storageDisk = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, __dirname + '/../../public/images/users/avatars');
	},
	filename: (req, file, cb) => {
		let imageFinalName = `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`;
		cb(null, imageFinalName);
	}
});

const upload = multer({ storage: storageDisk });

/* GET users listing. */
router.get('/', controller.showForm);
router.post('/', upload.single('avatar'), validationRegister(), redirectIsHasErrors, controller.register);

module.exports = router;
