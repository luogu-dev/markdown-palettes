const express = require('express')
const app = express()
app.use(require('morgan')('tiny'))
app.use(express.static(__dirname + '/dist'))
app.get('/', (req, rep) => void rep.redirect('/demo.html'))
const port = 8080
app.listen(port, () => void console.log('Listening on http://localhost:' + port))
