const express = require('express')

let app     = express()
const path  = require('path')

app.use(express.static('static'))
app.use('/public', express.static(path.join(__dirname, '../public')))
app.use('/app', express.static(path.join(__dirname, '../src/index.html')))
/*
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../src/', 'dummy.html'))
})
*/

app.listen(3000, function () {
  console.log('Tallently listening on port 3000!');
});
// express nya disini ya hen
