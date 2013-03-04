    // We'll start with this and add the user-defined apps once retrieved
var resourceArray = ['core/_kickstrap']

requirejs.config({
    baseUrl: '/kickstrap',
    map: {
      '*': {
        'css': '_core/js/require-css/css', 
        'less': '_core/js/require-less/less'
      }
    },
    paths: { 
        core : '_core/js/lib',
        jquery: [
            '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min', // cdn
            'core/jquery' // fallback
        ],
        kickstrap: [
            'core/_kickstrap'
        ]
    }
    /*
    , shim: {
        'core/_kickstrap': {
            deps: ['core/jquery'],
            exports: 'core/_kickstrap'
        },
    }
    */
});
requirejs(['settings', 'jquery'],
function   ($) {
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
