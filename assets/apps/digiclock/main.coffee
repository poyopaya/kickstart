define [
	'./css/jquery.jdigiclock.css!'
	'./lib/jquery.jdigiclock'
], () ->
	$('#digi-clock').jdigiclock(
		clockImagesPath: './apps/digiclock/images/clock/'
		weatherImagesPath: './apps/digiclock/images/weather'
	)