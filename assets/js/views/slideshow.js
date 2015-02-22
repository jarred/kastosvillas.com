var _           = require('underscore');
var Backbone    = require('backbone');
var $           = require('jquery');
var JSON        = require('JSON');
var TweenMax    = require('gsap');

var SlideshowView = Backbone.View.extend({
  initialize: function(){
    this.model = new Backbone.Model(JSON.parse(this.$('.js-slideshow-data').html()));
    this.showImage(0);
  },
  showImage: function(index){
    var image = this.model.get('images')[0];
    var img = new Image();
    var _this = this;
    img.onload = function(){
      var $image = $("<div />");
      $image.attr('class', 'slideshow-image');
      $image.css({
        backgroundImage: "url(" + image.src + ")",
        opacity: 0
      });
      _this.$el.append($image);
      TweenMax.to($image, .4, {
        opacity: 1
      });
    }
    img.src = image.src;
  }
});

module.exports = SlideshowView;
