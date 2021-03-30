module.exports = updateService = (req, res, parentModel) => {
  const { id } = req.params

  parentModel
    .update(req.body, {
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        parentModel.findOne({ where: { id: id } }).then((data) => {
          return res.status(200).json({
            msg: 'success',
            data,
          })
        })
      } else {
        return res.json({
          msg: `Cannot update this parentModel with id=${id}. Maybe this parentModel was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      return res.status(500).json({ msg: 'requested not updated', err })
    })
}
