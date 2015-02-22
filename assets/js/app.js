var KastosVillas = {};
var $           = require('jquery');
global.jQuery   = $;
var _           = require('underscore');
var Backbone    = require('backbone');
Backbone.$ = $;

KastosVillas.Views = {
  Slideshow:  require('./views/slideshow.js'),
  About:      require('./views/about.js')
};

KastosVillas.App = {
  init: function (){
    this.extendViews();
  },
  extendViews: function (){
    _.each($('.js-view'), function(el){
      var $el = $(el);
      var view = KastosVillas.Views[($el.data('view'))];
      var v = new view({
        el: el
      });
      $el.removeClass('js-view');
    });
  }
}

console.log(KastosVillas);

KastosVillas.App.init();
module.exports = KastosVillas;
