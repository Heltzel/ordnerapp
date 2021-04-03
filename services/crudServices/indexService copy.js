const { Attached_doc } = require('../../models')
module.exports = indexService = (req, res, parentModel, childModel) => {
  console.log('*********', childModel)
  parentModel
    .findAll(childModel !== null ? { include: [childModel] } : { include: [] })
    .then((data) => {
      if (data.lenght < 1) {
        return res.status(500).json({ msg: 'requested data not found', err })
      }
      return res.status(200).json({ msg: 'success', data })
    })
    .catch((err) => {
      return res.status(500).json({ msg: 'requested data not found', err })
    })
}
// include: [
//   {
//     association: Product.User,
//     include: [User.Addresses],
//   },
// ]
