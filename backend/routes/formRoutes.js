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

router.get(`/${routename}/file/:dfile`, function (req, res) {
  const dfile = req.params.dfile

  const resolvedDiskPath = path.resolve(process.cwd(), 'public/disk')
  const diskFile = dfile
  var diskPath = resolvedDiskPath.replace(/\\/g, '/')
  const filePath = `${diskPath}/${diskFile}`

  if (!fs.existsSync(filePath)) {
    console.error(`********** PDF ${filePath} NOT FOUND`)
    return {}
  }

  var file = fs.createReadStream(filePath)
  var stat = fs.statSync(filePath)
  res.setHeader('Content-Length', stat.size)
  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Content-Disposition', 'attachment; filename=file.pdf')
  file.pipe(res)
})

router.delete(`/${routename}/delete`, (req, res) => {
  if (fs.existsSync(`public/disk/${req.body.diskFile}`)) {
    fs.unlinkSync(`public/disk/${req.body.diskFile}`, (err) => {
      if (err) {
        return res.json({ msg: 'err', error })
      } else {
        console.log('success')
        return res.json({
          success: `../public/disk/${req.body} has been deleted`,
        })
      }
    })
    return res.json({ msg: 'succsess', success: 'File found' })
  } else {
    return res.json({ msg: 'err', err: 'File not found' })
  }
  return res.json({ test: ' delete test' })
})

module.exports = router
