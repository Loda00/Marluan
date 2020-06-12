const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({
    success: 200,
    reply: ' Holi xddddd'
  })
})

app.post('/', (req, res) => {

})

app.listen(PORT, () => {
  console.log('Server running')
})