var express = require('express');
var app = express();

app.use(express.static('public/'));

app.get('/', function(req, res) {
  res.sendfile('./views/index.html');
});

app.listen(3000);
console.log("Listening on port 3000:http://localhost:3000");
