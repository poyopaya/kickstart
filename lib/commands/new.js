var shell 			= require('shelljs'),
	fs 				= require('fs'),
	path 			= require('path');

var _new = function(commands) {
	shell.echo('printing...')
	shell.echo(path.normalize(process.cwd()))
	shell.echo(__dirname)
	shell.echo(commands[1])
	shell.echo(commands[0])
	var template 	= path.join(__dirname, '../../templates/new'),
		destination = path.join(path.normalize(process.cwd()), commands[0], '/');
	shell.cp('-r', template + '/*', destination)
	shell.cd(destination)
	shell.exec('roots watch')
};

module.exports = { execute: _new };