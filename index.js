const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Test Sever running......')
})


app.get('/me', (req, res) => {
  res.send('Hello This is Ali Ibne Masud')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})