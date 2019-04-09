
var http = require('http');
var express = require('express');


var config = require('../config');

var app = express();
var server = http.createServer(app);

require('./express')(app)

var ssl = config.minio.secure ? 's' : '';
var minioURL = 'http'+ ssl +'://' + config.minio.endPoint + ':' + config.minio.port;
// - Routes
app.get('/api/angular-config.js', function(req, res){
  return res.end('var minioURL = "'+ minioURL + '"')
});

app.post('/api/sum', function (req, res) {
	var sum = Number(req.body.first) + Number(req.body.second);
	return res.json({'sum': sum});
});


require('./error-handler')(app)


server.listen(config.port, config.ip, function() {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

module.exports = app;
