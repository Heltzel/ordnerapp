module.exports = indexService = (
  req,
  res,
  parentModel,
  childModel,
  grandchildModel,
) => {
  parentModel
    .findAll(
      childModel !== null
        ? {
            include: {
              model: childModel,
              include: grandchildModel
                ? {
                    model: grandchildModel,
                  }
                : [],
            },
          }
        : { include: [] },
    )
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
