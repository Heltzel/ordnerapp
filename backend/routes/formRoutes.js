const express = require('express')
const router = express.Router()
// const multer = require('multer')
const { uploadFormController } = require('../controllers')
const routename = 'uploads'

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'disk/')
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname)
//   },
// })

// const upload = multer({ storage })

// router.post(
//   `/${routename}/create`,
//   upload.single('my_file'),
//   uploadFormController.create,
// )
router.post(`/${routename}/create`, uploadFormController.create)

module.exports = router
