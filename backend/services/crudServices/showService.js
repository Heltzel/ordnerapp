module.exports = showService = (
  req,
  res,
  parentModel,
  childModel,
  grandchildModel,
) => {
  const { id } = req.params
  parentModel
    .findAll({
      where: { id: id },
      include: childModel
        ? {
            model: childModel,
            include: grandchildModel ? { model: grandchildModel } : [],
          }
        : [],
    })
    .then((data) => {
      if (data.length < 1) {
        return res.status(500).json({ msg: 'requested data not found', err })
      }
      return res.status(200).json({ msg: 'succes', data })
    })
    .catch((err) => {
      return res.status(500).json({ msg: 'requested data not found', err })
    })
}
