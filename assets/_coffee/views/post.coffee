KV.Views.PostView = Backbone.View.extend

  initialize: (@o) ->
    @model = new Backbone.Model @$el.data()

    @$('.photoset-grid').photosetGrid
      highresLinks: true
      rel: $('.photoset-grid').attr('data-id')
      gutter: '20px'
