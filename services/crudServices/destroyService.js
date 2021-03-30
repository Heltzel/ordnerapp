module.exports = destroyService = (req, res, parentModel) => {
  const { id } = req.params
  parentModel
    .destroy({
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.status(200).json({
          msg: 'success',
          admin: { msg: `parentModel with ID: ${id} is deleted.` },
        })
      } else {
        res.status(500).json({
          message: `Cannot delete parentModel with id=${id}. Maybe parentModel was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: `Could not delete parentModel with id=${id}`,
      })
    })
}
