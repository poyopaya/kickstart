# JSPM

###
try
	window.jspm.config(
		locations: 
			kickstrap: 'https://github.jspm.io/guybedford/kickstrap-proto@master'
	)
catch error
	console.log('FROM HELPER ' + error)
###
# Can't remember why we did it this way.