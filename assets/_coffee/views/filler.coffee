KV.Views.FillerView = Backbone.View.extend

  backgrounds: [
    "bg-island.png"
    "bg-topographic.png"
  ]

  initialize: (@o) ->
    bg = "url('http://assets.kastosvillas.com/assets/images/" + @backgrounds[Math.floor(Math.random() * @backgrounds.length)] + "\')"
    console.log 'bg', bg
    console.log '@$el', @$el
    @$el.css
      backgroundImage: bg
      # backgroundColor: "#00ff34"
