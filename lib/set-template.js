var shell = require('shelljs')

// TODO: Install from the wip branch of Kickstrap.
if ( shell.exec ( 'roots template add kickstrap https://github.com/ajkochanowicz/Kickstrap').code !== 0 ) {
	shell.echo('Error: Could not add the Kickstrap template');
	shell.exit(1);
}