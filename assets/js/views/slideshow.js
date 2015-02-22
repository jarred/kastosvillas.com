var _           = require('underscore');
var Backbone    = require('backbone');
var $           = require('jquery');
var JSON        = require('JSON');
var TweenMax    = require('gsap');

var SlideshowView = Backbone.View.extend({
  currentImage: null,
  initialize: function(){
    this.model = new Backbone.Model(JSON.parse(this.$('.js-slideshow-data').html()));
    this.showImage(0);
  },
  showImage: function(index){
    this.currentImage = index;
    var image = this.model.get('images')[index];
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
      TweenMax.to($image, 2, {
        opacity: 1,
        ease: Circ.easeOut,
        onComplete: function(){
          _this.cleanup();
        }
      });
    }
    img.src = image.src;
  },
  cleanup: function(){
    _.each(this.$('.slideshow-image'), function(el, index, all){
      if(index < all.length - 3){
        var $el = $(el);
        $el.remove();
      }
    });
    this.waitInt = setTimeout(_.bind(this.nextImage, this), 2000);
  },
  nextImage: function(){
    this.currentImage++;
    if(this.currentImage > this.model.get('images').length - 2){
      this.currentImage = 0;
    }
    this.showImage(this.currentImage);
  }
});

module.exports = SlideshowView;
