var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};


app.use(allowCrossDomain);
app.use(express.static(__dirname + '/app'));
app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,"/app/index.html"));
});

app.use('/css', express.static(__dirname + '/app/css'));
app.use('/fonts', express.static(__dirname + '/app/fonts'));
app.use('/img', express.static(__dirname + '/app/img'));
app.use('/node_modules', express.static(__dirname + '/app/node_modules'));
app.use('/pages', express.static(__dirname + '/app/pages'));
app.use('/js', express.static(__dirname + '/app/js'));
app.use('/scripts', express.static(__dirname + '/app/scripts'));
app.use('/lib', express.static(__dirname + '/app/lib'));
app.use('/maps', express.static(__dirname + '/app/maps'));
app.use('/assets', express.static(__dirname + '/app/assets'));
app.use('/bower_components', express.static(__dirname + '/app/bower_components'));
app.use('/lib', express.static(__dirname + '/app/lib/'));
 
app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('/app/index.html', { root: __dirname });
});

// app.get("/ournews", function(req,res){
//   res.send("test");
// });

app.listen(1324,function(){
    console.log("Live at Port 1324");
});
