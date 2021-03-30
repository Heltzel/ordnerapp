const express = require('express')
const router = express.Router()
// importing the models just for the name is a bit of overkill
const routenames = ['ordners', 'maindocs']
const { crudController } = require('../controllers')

routenames.forEach((routename) => {
  router.get(`/${routename}/index`, crudController.index)
  router.get(`/${routename}/:id/show`, crudController.show)
  router.post(`/${routename}/create`, crudController.create)
  router.patch(`/${routename}/:id/update`, crudController.update)
  router.delete(`/${routename}/:id/destroy`, crudController.destroy)
})

module.exports = router
