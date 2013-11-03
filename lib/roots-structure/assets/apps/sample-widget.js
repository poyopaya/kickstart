/*
  Standard Widget Template for Kickstrap
  Uses CommonJS, but can be AMD as well if you prefer

  Better than loading 'jquery', would be to have a kickstrap widget base class that 
  bundles Angular, AngularFire and some widget helpers:

  var k$Widget = require('kickstrap-widget');
*/
require('./sample-widget.css!');
var $ = require('jquery');

exports.attach = function(element, options) {
  /* dynamic stuff here */
  setTimeout(function() {
    $(element).html('<p>Dynamic HTML changes</p>');
  }, options.timeout);
}