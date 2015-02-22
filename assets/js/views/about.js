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
      lat: 38.5727023,
      lng: 20.917293,
      zoom: 13
    })
  }
});

module.exports = AboutView;
