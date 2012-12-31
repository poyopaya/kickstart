// VARIABLES
// =========
var apps,
  ks = {
    opts: { console: true },
    apps: []
  },
  tempObj
// FUNCTIONS
// =========

// CONSOLELOG()
function consoleLog(msg, msgType, objName) {
  var prefix = 'KS: '
  if (ks.opts.console && window.console) {
    if (objName) console.log([msg, objName])
    else {
      switch (msgType) {
        case 'warn':
        console.warn(prefix + msg)
        break

        case 'error':
        console.error(prefix + msg)
        break

        default:
        console.log(prefix + msg)
        break
      }
    }
  }
}

// AJAX Call
function ajaxRequest() {
  var xmlHttp
  try { xmlHttp = new XMLHttpRequest(); }
  catch(e) {
    try { xmlHttp = new ActiveXObject("Msxml2.XMLHTTP"); }
    catch(e) {
      try { xmlHttp = new ActiveXObject("Microsoft.XMLHTTP"); }
      catch(e) {
        console.log("Your browser does not support AJAX!")
        return false;
      }
    }
  }
  return xmlHttp;
}

// LET THE KICKSTRAP SITE BEGIN
// ============================

// 1. APP-GETTER
// Returns the apps the ks object--ks.apps
var getApps = new ajaxRequest() 
getApps.onreadystatechange = function() {
  if (getApps.readyState == 4) {
    if (getApps.status == 200) {
      var xmldata = getApps.responseText
      ks.apps = eval(xmldata)
      readJSONs()
    }
    else { alert("Could not get apps.js") }
  }
}
getApps.open("GET", "kickstrap/apps.js", true)
getApps.send(null)

// 2. PACKAGE.JSON READER
// Now that we have the app names, we have their paths. In the paths, we can
// read their package.json files.
function readJSONs() {
  for (var i = 0; i < ks.apps.length; i++) {
    // The URL to the package.json file for this app
    var url = "kickstrap/apps/" + String(ks.apps[i]) + "/package.json"
    console.log(url)
    consoleLog('Getting JSONs')
    var getAppJSONs = new ajaxRequest()
    getAppJSONs.onreadystatechange = function() {
      if (getAppJSONs.readyState == 4) {
        if (getAppJSONs.status == 200) {
          var xmldata = getAppJSONs.responseText
          ks.apps[i] = JSON.parse(xmldata)
        }
      }
      else { consoleLog('Could not find package.json file for app "' + String(ks.apps[i]) + '"') }
    }
    getAppJSONs.open("GET", url, true)
    getAppJSONs.send(null)
  }
}

// Eek, do we need rjs stuff to be global?
function initRequireJs() {
	requirejs.config({
	  baseUrl: 'kickstrap/apps',
	  paths: { lib: '../_core/js/lib' }
	}) 
	requirejs(ks.apps, function() { /* ks.readyFire() */ })
}
