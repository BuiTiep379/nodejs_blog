const path = require('path')
const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const app = express()
const route = require('./routes')

const port = 3000
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json())

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))
// themplate engine
app.engine(
  'hbs',
  exphbs({
    extname: '.hbs'
  })
)
debugger
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))
// route init
route(app)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
