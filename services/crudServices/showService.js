module.exports = showService = (req, res, parentModel, childModel) => {
  const { id } = req.params
  parentModel
    .findOne({
      where: { id: id },
      ...(childModel ? { include: [childModel] } : {}),
    })
    .then((data) => {
      if (data === null)
        return res.status(500).json({ msg: 'requested data not found', err })
      return res.status(200).json({ msg: 'succes', data })
    })
    .catch((err) => {
      return res.status(500).json({ msg: 'requested data not found', err })
    })
}
