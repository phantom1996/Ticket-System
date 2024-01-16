const connectToMongo = require('./db');
connectToMongo();

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.use('/api/auth', require('./routes/Auth'))
app.use('/api/ticket', require('./routes/Ticket'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})