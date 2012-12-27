var apps,
  ks

// Create the ajaxRequest function to be used for jQuery-less ajax calls.
function ajaxRequest()
{
  var xmlHttp

  try
  {
    //Firefox, Opera 8.0+, Safari
    xmlHttp = new XMLHttpRequest();
  }
  catch(e)
  {
    //Internet Explorer
    try
    {
      xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch(e)
    {
      try
      {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      catch(e)
      {
        alert("Your browser does not support AJAX!")
        return false;
      }
    }
  }
  return xmlHttp;
}

var getApps = new ajaxRequest()

getApps.onreadystatechange = function(){
 if (getApps.readyState == 4){
  if (getApps.status == 200){
   var xmldata = getApps.responseText
   //var xmldata = eval("(" + getApps.responseText + ")")
   apps = xmldata
   initRequireJs()
  }
  else{
   alert("Could not get apps.js")
  }
 }
}

getApps.open("GET", "kickstrap/apps.js", true)
getApps.send(null)

// Eek, do we need rjs stuff to be global?
function initRequireJs() {

	eval(apps)
	requirejs.config({
	  baseUrl: 'kickstrap/_core/js/lib',
	  paths: {
	    app: '../../apps'
	  }
	})

	requirejs(ks.apps,
	function ($) {
	
	})
}




