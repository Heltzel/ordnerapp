const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'disk/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  },
})
const upload = multer({ storage })

module.exports = pdfToDiskService = (req, res, next) => {
  let middleware = upload.single('my_file')
  let controller = () => {
    console.log(req.file)
    // res.send('ok')
  }
  middleware(req, res, controller)
  return res.json('hello from uploadFormController create')
}
