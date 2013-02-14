var rv;

requirejs.config({
    // By default load any module IDs from js/lib
    baseUrl: 'kickstrap/_core/js/lib',
    // except, if the module ID starts with "app",
    // load it from the js/app directory. paths
    // config is relative to the baseUrl, and
    // never includes a ".js" extension since
    // the paths config could be for a directory.
    paths: { run: '../run' }
});

// Those with IE shall be marked.
var ver = getInternetExplorerVersion();
function getInternetExplorerVersion() {
  rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}

var requireList = ['jquery', '_kickstrap']
// IE users will receive the HTML5 shiv
if ( rv > -1 ) requireList.push('html5shiv')

// Start the main app logic.
requirejs(requireList,
function   ($) {

});