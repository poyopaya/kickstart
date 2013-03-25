// Let LESS use our production setting as well.

var resourceArray = ['']

requirejs.config({
    // baseUrl: ( ks.settings.root || '' ),
    baseUrl: '',
    // TODO: Pull in from ks.settings.root

    paths: { 
        core : 'kickstrap/_core/js',
        jquery: [
            '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min', // cdn
            'core/jquery' // fallback
        ],
        apps: 'kickstrap/apps'
    },
    map: {
      '*': {
        'css': 'core/require-css/css', 
        'less': 'core/require-less/less'
      }
    }
});

// Create the ks object before getting settings
var ks = new Object()

requirejs(['kickstrap/settings', 'jquery'],
function   ($) {

/*    $.ajax({
        url: 'kickstrap/settings.js'
        , success: function(data) { */

            less = { env: ks.settings.mode }

            // Create paths to each app's config.js based on keyword
            for ( var i=0; i < ks.apps.length; i++ ) {
                ks.apps[i] = 'apps/' + ks.apps[i] + '/config'
            }
            resourceArray = resourceArray.concat(ks.apps)
            // Start the main app logic.
            requirejs(resourceArray,
            function   ($) {

            });
        });

   /* }
})*/

ks.version = '2.0.0 Alpha'
ks.readyFxs = []
ks.ready = function(fx) { ks.readyFxs = ks.readyFxs.concat(fx) }
console.log('%cKickstrap', 'font-style:italic;font-family: helvetica neue, helvetica, sans-serif;font-size:40px;color:#FDD726;text-shadow:0 1px 0 #D1B43B,0 2px 0 #D1B43B,0 3px 0 #D1B43B,0 4px 0 #D1B43B,0 5px 0 #D1B43B,0 6px 1px rgba(30,28,23,.1),0 0 5px rgba(30,28,23,.1),0 1px 3px rgba(30,28,23,.3),0 3px 5px rgba(30,28,23,.2),0 5px 10px rgba(30,28,23,.25),0 10px 10px rgba(30,28,23,.2),0 20px 20px rgba(30,28,23,.15);');
console.log(ks.version);
