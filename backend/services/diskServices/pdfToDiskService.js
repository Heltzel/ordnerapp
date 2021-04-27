const multer = require('multer')
let newName = ''
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'disk/')
  },
  filename: (req, file, cb) => {
    cb(null, (newName = Date.now() + '-' + file.originalname))
  },
})
const upload = multer({ storage })

// module.exports = pdfToDiskService = (req, res, next) => {
//   let middleware = upload.single('my_file')
//   let controller = (req, res) => {}
//   middleware(req, res, controller)

//   return res.json({ path: '' })
// }
module.exports = pdfToDiskService = (req, res, next) => {
  upload.single('my_file')(req, res, () => {
    // Remember, the middleware will call it's next function
    // so we can inject our controller manually as the next()
    console.log(req.file)
    if (req.file === undefined) {
      return res.json({ filePath: null })
    }
    console.log(req.file.path)
    res.json({ filePath: req.file.path })
  })
}
