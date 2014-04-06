KV = window.KastosVillas ||= {}
KV.Views = {}

KV.App =
	init: ->
		_.bindAll @, 'extendViews'
		@appModel = new Backbone.Model()
		@extendViews()

	extendViews: ->
		_.each $('.js-extend'), (el) =>
			$el = $(el)
			name = $el.data('view')
			return if name is null or name is ''
			return if KV.Views[name] is undefined
			view = new KV.Views[name]
				el: el
				appModel: @appModel
			$el.removeClass 'js-extend'
