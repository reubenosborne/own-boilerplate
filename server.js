const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes/users')

const app = express()



// Middleware

app.engine('hbs', hbs({ extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))

// Routes

app.use('/', userRoutes)
app.use(express.static(__dirname + '/public'));

module.exports = app
