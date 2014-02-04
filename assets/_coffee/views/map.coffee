KV.Views.MapView = Backbone.View.extend 
	
	initialize: (@o) ->
		_.bindAll @, 'setZoom'

		@map = L.map 'map', 
			scrollWheelZoom: false
			center: [38.5646649, 20.905957400000034]
			zoom: 3
			styles: KV.MapStyle

		googleLayer = new L.Google('ROADMAP');
		# googleLayer = new L.Google('SATELLITE');

		@map.addLayer(googleLayer);

		@o.appModel.bind 'change-step', @setZoom

	setZoom: (z) ->
		console.log 'setZoom', arguments
		@map.setZoom (3 + (z* 1)), 
			animate: true
