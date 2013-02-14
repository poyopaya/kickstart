requirejs.config({
    baseUrl: 'kickstrap/_core/js/lib',
    paths: { 
        jquery: [
            '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min', // cdn
            'jquery' // fallback
        ],
    },
    shim: {
        '_kickstrap': {
            deps: ['jquery'],
            exports: '_kickstrap'
        },
    }
});

 // Start the main app logic.
requirejs(['_kickstrap'],
function   ($) {

});