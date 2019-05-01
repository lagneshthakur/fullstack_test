var personsData = require('./personsData.js')

const express = require('express')
var cors = require('cors');
const app = express()
const port = 3000
app.use(cors({
    origin: 'http://localhost:4200'
  }));

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/people', (req, res) => res.send(personsData.names))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))