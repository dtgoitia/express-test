const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.get('/', function(req, res) {
  // return 404
  console.log('/ GET accessed');
  res.send('Hello world!');
});

app.get('/cars', function(req, res) {
  console.log('/cars GET accessed');
});


// Source: https://stackoverflow.com/questions/10005939/how-do-i-consume-the-json-post-data-in-an-express-application
app.use(bodyParser.json());

app.post('/cars', function(req, res) {
  console.log('/cars POST accessed');
  console.log('\treq:', req.body);
});

app.listen(3000, function() {
  console.log('App listening in port 3000');
});