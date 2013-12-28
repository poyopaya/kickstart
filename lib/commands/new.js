var shell 			= require('shelljs'),
	fs 				= require('fs'),
	path 			= require('path');

var _new = function(commands) {
	shell.echo('Copying in Kickstrap files...')
	var template 	= path.join(__dirname, '../../templates/new'),
		destination = path.join(path.normalize(process.cwd()), commands[0], '/');
	shell.cp('-r', template + '/*', destination)
	shell.exec('cd ' + destination + ';roots watch')
	shell.echo('Compiling via Roots and launching server...')
	shell.echo('"ctrl + c" to quit watching')
	shell.echo('"roots watch" to watch project again.')
};

module.exports = { execute: _new };