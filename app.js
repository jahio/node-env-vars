var express = require('express');
var app = express();

// Set some basic view settings for Express.
// Taken from https://github.com/visionmedia/express/blob/master/examples/ejs/index.js
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.bodyParser());
app.use(express.logger('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('variables', { env_vars: process.env });
});

app.listen((process.env.PORT || 3000));

// for(v in process.env) {
//   console.log("Environment variable " + v + " = " + process.env[v]);
// }