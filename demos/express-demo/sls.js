const express = require('express')
const path = require('path')
const app = express()

// Routes
app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/post', (req, res) => {
  res.send([
    {
      title: 'serverless framework',
      link: 'https://serverless.com'
    }
  ])
})

app.get('/post/:id', (req, res) => {
  const id = req.params.id
  res.send({
    id: id,
    title: 'serverless framework',
    link: 'https://serverless.com'
  })
})

// Error handler
app.use(function(err, req, res, next) {
  console.error(err)
  res.status(500).send('Internal Serverless Error')
})

module.exports = app
