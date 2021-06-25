const express = require('express')
const exphbs = require('express-handlebars')
const PORT = process.env.PORT || 3000
const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
require('./config/mongoose')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`Server is listening http://localhost:${PORT}`)
})
