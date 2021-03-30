// as far as I have been able to find out: the models will loaded only once
const { Ordner, Main_doc } = require('../../models')

const getModels = (path) => {
  const key = path.split('/')[1]
  console.log(key)
  switch (key) {
    case 'ordners':
      parentModel = Ordner
      childModel = Main_doc
      break
    case 'maindocs':
      parentModel = Main_doc
      childModel = null
    default:
      break
  }

  return { parentModel, childModel }
}

module.exports = getModels
