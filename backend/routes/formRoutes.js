const express = require('express')
const router = express.Router()
const { uploadFormController } = require('../controllers')
const routename = 'upload'

router.post(`/${routename}/create`, uploadFormController.create)

module.exports = router
