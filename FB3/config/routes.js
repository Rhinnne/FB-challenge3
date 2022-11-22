const express = require('express')
const route = express.Router()
const control = require('../controller/control')

route.get('/', control.landing)
route.all('/feed', control.homepage)
route.get('/feed/:allen', control.viewOne) 
route.get('/delete/:bob', control.tributeToDelete)
route.all('/feed/edit/:id', control.editFeed)

module.exports = route
