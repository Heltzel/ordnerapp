const express = require('express')
const router = express.Router()
const { uploadFormController } = require('../controllers')
const routename = 'uploads'
const path = require('path')
const fs = require('fs')

const app = express()
app.use(express.static('./public'))

router.post(`/${routename}/create`, uploadFormController.create)
router.get(`/${routename}/show/`, uploadFormController.show)

// router.get(`/${routename}/file/`, function (req, res) {
//   const resolvedDiskPath = path.resolve(process.cwd(), 'public/disk')
//   const diskFile = 'test.pdf'
//   var diskPath = resolvedDiskPath.replace(/\\/g, '/')
//   const filePath = `${diskPath}/${diskFile}`
//   var data = fs.readFileSync(filePath)
//   res.contentType('application/pdf')
//   res.send(data)
// })

router.get(`/${routename}/file/`, function (req, res) {
  const resolvedDiskPath = path.resolve(process.cwd(), 'public/disk')
  const diskFile = '1619954442157-Nieuwsbrief april 2021.pdf'
  var diskPath = resolvedDiskPath.replace(/\\/g, '/')
  const filePath = `${diskPath}/${diskFile}`

  var file = fs.createReadStream(filePath)
  var stat = fs.statSync(filePath)
  res.setHeader('Content-Length', stat.size)
  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Content-Disposition', 'attachment; filename=file.pdf')
  file.pipe(res)
})

module.exports = router
