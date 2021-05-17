const { body, validationResult } = require('express-validator')
const { reqTransformer, getModels } = require('../services/utils')
const {
  indexService,
  showService,
  createService,
  updateService,
  destroyService,
} = require('../services/crudServices')

const index = (req, res) => {
  const { parentModel, childModel, grandchildModel } = getModels(req.path)
  indexService(req, res, parentModel, childModel, grandchildModel)
}

const show = (req, res) => {
  const { parentModel, childModel, grandchildModel } = getModels(req.path)
  showService(req, res, parentModel, childModel, grandchildModel)
}

const create = (req, res, next) => {
  const { parentModel } = getModels(req.path)
  reqTransformer(req, body)
  createService(req, res, parentModel)
}

const update = (req, res) => {
  const { parentModel } = getModels(req.path)
  reqTransformer(req, body)
  updateService(req, res, parentModel)
}

const destroy = (req, res) => {
  debugger
  const { parentModel } = getModels(req.path)
  destroyService(req, res, parentModel)
}

module.exports = { index, show, create, update, destroy }
