const { pdfToDiskService } = require('../services/diskServices')
const path = require('path')

const create = (req, res, next) => {
  pdfToDiskService(req, res, next)
}
const show = (req, res) => {
  const appDir = 'test'
  return res.json({ dir: appDir })
}

// update

// destroy
// optional: index, show

module.exports = { create, show }
