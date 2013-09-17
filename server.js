var http = require('http');
var routes = require('./route');
var express = require('express'), app = express();
var engines = require('consolidate');

app.configure( function(){
    //use /public as resouece path
    app.use( express.static( __dirname + '/public' ) );
    app.set('views', __dirname + '/views');
    app.set('view engine', 'haml');
  
});

app.engine( 'haml', engines.haml );

routes( app );

app.listen(process.env.PORT, process.env.IP);

/*
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(process.env.PORT, process.env.IP);
*/

console.log('Server running at http://127.0.0.1:1337/');