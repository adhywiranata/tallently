const express = require('express')
const MongoClient = require('mongodb').MongoClient
// const ObjectId = require('mongodb').ObjectID

const app = express()
const path = require('path')

let db

app.use(express.static('static'))
app.use('/public', express.static(path.join(__dirname, '../public')))
app.use('/app', express.static(path.join(__dirname, '../src/index.html')))

app.get('/api/contacts', (req, res) => {
  db.collection('contacts')
    .find()
    .sort({ name: 1 })
    .toArray((err, docs) => {
      if (err) {
        console.log('error ', err)
      } else {
        res.json(docs)
      }
    })
})

// MongoDB Connector
MongoClient.connect('mongodb://localhost/conmandb', (err, dbConnection) => {
  if (err) {
    console.log('error!')
  } else {
    db = dbConnection
  }
});

const server = app.listen(3000, () => {
  const port = server.address().port
  console.log('Contact app run on ', port)
})

module.exports = server
