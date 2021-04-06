module.exports = createService = (req, res, parentModel) => {
  parentModel
    .create(req.body)
    .then((data) => {
      return res.status(200).json({ msg: 'succes', data })
    })
    .catch((err) => {
      return res.status(500).json({ msg: 'requested data not saved', err })
    })
  return
}
