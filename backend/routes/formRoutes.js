const express = require('express')
const router = express.Router()
const { uploadFormController } = require('../controllers')
const routename = 'uploads'

router.post(`/${routename}/create`, uploadFormController.create)
router.get(`/${routename}/show/`, uploadFormController.show)
router.get('/file/', function (req, res) {
  const filePath = '../disk.test.pdf'
  res.sendFile(filepath)
})
module.exports = router
