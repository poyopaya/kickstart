var shell = require('shelljs'),
	fs = require('fs');

var _new = function(args) {
	shell.echo(args._[1]);

	if ( shell.exec ( 'roots new ' + args._[1] + ' --kickstrap' ).code !== 0 ) {
		shell.echo('Error: Could not run roots. Try "roots new ." instead.');
		shell.exit(1);
	};
};

module.exports = { execute: _new };