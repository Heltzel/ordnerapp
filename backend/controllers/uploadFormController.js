const { pdfToDiskService } = require('../services/diskServices')

const create = (req, res, next) => {
  pdfToDiskService(req, res, next)
}

// update

// destroy
// optional: index, show

module.exports = { create }
