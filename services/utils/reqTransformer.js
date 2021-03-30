module.exports = reqTransformer = (req, body) => {
  for (const [key, value] of Object.entries(req.body)) {
    body(key).not().isEmpty().trim().escape()
    if (typeof value == 'string') {
      req.body[key] = value.toLowerCase()
    }
    console.log(`${key}: ${value}`)
  }
  return req.body
}
