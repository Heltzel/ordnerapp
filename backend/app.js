const express = require('express')
const app = express()
const PORT = 5000
app.use(express.json())

// Routing
const crudRoutes = require('./routes/crudRoutes')
const uploadFormRoutes = require('./routes/formRoutes')

app.use(crudRoutes)
app.use(uploadFormRoutes)

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})