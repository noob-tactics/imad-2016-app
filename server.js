var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/index', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/jb.jpg', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'jb.jpg'));
 });

app.get('/SignUp', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'SignUp.html'));
});
app.get('/myProfile', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'myProfile.html'));
});
app.get('/ui/jbg.jpg', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'jbg.jpg'));
 });



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
