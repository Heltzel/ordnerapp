const express = require('express')
var cors = require('cors')
const app = express()
const PORT = 5000
app.use(express.json())
app.use(cors())

// Routing
const crudRoutes = require('./routes/crudRoutes')
const uploadFormRoutes = require('./routes/formRoutes')

app.use(crudRoutes)
app.use(uploadFormRoutes)
app.use(express.static(__dirname + '../disk'))
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})
