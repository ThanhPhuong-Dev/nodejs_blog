const express = require('express')
const app = express()
const port = 2002

app.get('/', (req, res) => {
  res.send('Hello World! day la thanh phuong dev')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})