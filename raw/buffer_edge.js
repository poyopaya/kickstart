/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'EllipseCopy',
                type: 'ellipse',
                rect: ['16px', '12px','128px','128px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Ellipse',
                type: 'ellipse',
                rect: ['409px', '12px','128px','128px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['7px', '155px','139px','20px','auto', 'auto'],
                text: "Input",
                align: "center",
                font: ['Courier, Courier New, monospace', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['404px', '155px','139px','20px','auto', 'auto'],
                text: "Output",
                align: "center",
                font: ['Courier, Courier New, monospace', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '155px'],
                ["style", "font-family", 'Courier, \'Courier New\', monospace'],
                ["style", "left", '404px'],
                ["style", "text-align", 'center']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '200px'],
                ["style", "width", '550px']
            ],
            "${_EllipseCopy}": [
                ["style", "top", '12px'],
                ["style", "left", '16px'],
                ["color", "background-color", 'rgba(216,205,180,1)']
            ],
            "${_TextCopy}": [
                ["style", "top", '155px'],
                ["style", "font-family", 'Courier, \'Courier New\', monospace'],
                ["style", "left", '7px'],
                ["style", "text-align", 'center']
            ],
            "${_Ellipse}": [
                ["style", "top", '12px'],
                ["style", "left", '409px'],
                ["color", "background-color", 'rgba(216,205,180,1)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid56", tween: [ "color", "${_EllipseCopy}", "background-color", 'rgba(253,215,38,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(216,205,180,1)'}], position: 0, duration: 250 },
                { id: "eid66", tween: [ "color", "${_EllipseCopy}", "background-color", 'rgba(216,205,180,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(253,215,38,1.00)'}], position: 250, duration: 250 },
                { id: "eid67", tween: [ "color", "${_EllipseCopy}", "background-color", 'rgba(253,215,38,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(216,205,180,1)'}], position: 500, duration: 250 },
                { id: "eid68", tween: [ "color", "${_EllipseCopy}", "background-color", 'rgba(216,205,180,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(253,215,38,1.00)'}], position: 750, duration: 250 },
                { id: "eid69", tween: [ "color", "${_EllipseCopy}", "background-color", 'rgba(253,215,38,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(216,205,180,1)'}], position: 1000, duration: 250 },
                { id: "eid70", tween: [ "color", "${_EllipseCopy}", "background-color", 'rgba(216,205,180,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(253,215,38,1.00)'}], position: 1250, duration: 250 },
                { id: "eid71", tween: [ "color", "${_EllipseCopy}", "background-color", 'rgba(253,215,38,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(216,205,180,1)'}], position: 1500, duration: 250 },
                { id: "eid72", tween: [ "color", "${_EllipseCopy}", "background-color", 'rgba(216,205,180,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(253,215,38,1.00)'}], position: 1750, duration: 250 },
                { id: "eid75", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(253,215,38,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(216,205,180,1)'}], position: 0, duration: 250 },
                { id: "eid77", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(216,205,180,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(253,215,38,1.00)'}], position: 250, duration: 250 },
                { id: "eid79", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(253,215,38,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(216,205,180,1)'}], position: 1000, duration: 250 },
                { id: "eid81", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(216,205,180,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(253,215,38,1.00)'}], position: 1250, duration: 250 },
                { id: "eid82", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(253,215,38,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(216,205,180,1)'}], position: 2000, duration: 250 },
                { id: "eid83", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(216,205,180,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(253,215,38,1.00)'}], position: 2250, duration: 250 },
                { id: "eid84", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(253,215,38,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(216,205,180,1)'}], position: 3000, duration: 250 },
                { id: "eid85", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(216,205,180,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(253,215,38,1.00)'}], position: 3250, duration: 250 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-116087028");
