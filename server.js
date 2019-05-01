var personsData = require('./personsData.js')

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/people', (req, res) => res.send(personsData.names))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))