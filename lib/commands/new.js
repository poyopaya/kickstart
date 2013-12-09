var shell = require('shelljs')
	fs = require('fs');

if ( exec ( 'roots new ' + args._[1] ).code !== 0 ) {
	echo('Error: Could not run roots. Try "roots new ." instead.');
	exit(1);
}