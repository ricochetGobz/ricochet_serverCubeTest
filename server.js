var express    = require('express');        // call express
var app        = express();                 // define our app using express
var http       = require('http').Server(app);
var bodyParser = require('body-parser');

app.use(express.static('public'));
var port = process.env.PORT || 8080;

/* WEB PART */
app.get('*', function(req, res) {
       res.sendFile(__dirname + '/public/index.html');
});


/* ARDUINO PART */
app.post('/cube/connected', function(req,res){
  console.log("cube c_connected");
  res.json({
          success: true,
          message: 'Enjoy your token!',
          token: "HelloWorld"
  });
});
app.post('/cube/touched', function(req,res){
  console.log("cube touched");
});
app.post('/cube/turned', function(req,res){
  console.log("cube turned");
});
http.listen(port);
console.log('Magic happens on port ' + port);
