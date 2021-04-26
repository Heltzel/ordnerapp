const express = require('express')
const router = express.Router()
const { uploadFormController } = require('../controllers')
const routename = 'uploads'

router.post(`/${routename}/create`, uploadFormController.create)

module.exports = router
