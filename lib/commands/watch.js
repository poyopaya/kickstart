var shell 			= require('shelljs'),
	fs 				= require('fs'),
	path 			= require('path');

var _watch = function(commands) { shell.exec('roots watch') };

module.exports = { execute: _watch };