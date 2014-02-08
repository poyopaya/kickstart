var shell 			= require('shelljs'),
	fs 				= require('fs'),
	path 			= require('path');

var _compile = function(commands) { shell.exec('roots compile') };

module.exports = { execute: _compile };