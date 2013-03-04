// Let LESS use our production setting as well.

var resourceArray = ['core/_kickstrap']

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
            console.kbash = function() {}

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

ks.readyFxs = []
ks.ready = function(fx) { ks.readyFxs = ks.readyFxs.concat(fx) }
