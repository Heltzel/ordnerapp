const multer = require('multer')

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'disk/')
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname)
//   },
// })

// const upload = multer({ storage })

// /**
//  * create
//  * @param ordnerId {int}
//  * @param mainDocId {int}
//  * @param attachmentId {int}
//  * @param diskFile {string}
//  */
// const create = (req, res, next) => {
//   let middleware = upload.single('my_file')
//   let controller = () => {
//     console.log(req.file)
//     // res.send('ok')
//   }

//   middleware(req, res, controller)
//   return res.json('hello from uploadFormController create')
// }

const { pdfToDiskService } = require('../services/diskServices')
const create = (req, res, next) => {
  pdfToDiskService(req, res, next)
}

// update

// destroy
// optional: index, show

module.exports = { create }
