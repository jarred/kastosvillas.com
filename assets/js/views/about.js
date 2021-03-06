var _           = require('underscore');
var Backbone    = require('backbone');
var $           = require('jquery');
var JSON        = require('JSON');
var Gmaps       = require('gmaps');

var AboutView = Backbone.View.extend({
  initialize: function(){
    this.initMap();
  },
  initMap: function(){
    console.log(this);
    this.map = new Gmaps({
      div: '#js-about-map',
      lat: 38.5687836,
      lng: 20.908864,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    })
  }
});

module.exports = AboutView;
