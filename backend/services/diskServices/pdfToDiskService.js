const multer = require('multer')
let newName = ''
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/disk/')
  },
  filename: (req, file, cb) => {
    cb(null, (newName = Date.now() + '-' + file.originalname))
  },
})
const upload = multer({ storage })

module.exports = pdfToDiskService = (req, res, next) => {
  upload.single('my_file')(req, res, () => {
    if (req.file === undefined) {
      return res.json({ filePath: null })
    }
    // res.json({ filePath: req.file.path })
    res.json({ filePath: req.file.filename })
  })
}
