//http://ca.isohunt.com/js/json.php?ihq=ubuntu&start=1&rows=20&sort=seeds&order=desc
var http = require('http'),
	querystring = require('querystring');

module.exports = function(options, callback, errorCallback){
	var onError = errorCallback || function(){};

	var baseUrl = 'http://ca.isohunt.com/js/json.php?';
	var params = querystring.stringify (options);

	var result = '';

	http.get(baseUrl + params, function(res){

		res.on('data', function(chunk){
			result += chunk;
		});

		res.on('end', function(){
			callback(JSON.parse(result));
		});
	}).on('error', onError);
};