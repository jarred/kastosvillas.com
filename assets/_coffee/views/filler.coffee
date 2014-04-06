KV.Views.FillerView = Backbone.View.extend

  backgrounds: [
    "bg-island.png"
    "bg-topographic.png"
    "bg-painting.png"
  ]

  colours: [
    "#73B4B6"
    "#C93030"
    "#EEE"
  ]

  initialize: (@o) ->
    bg = "url('http://assets.kastosvillas.com/assets/images/" + @backgrounds[Math.floor(Math.random() * @backgrounds.length)] + "\')"
    colour = @colours[Math.floor(Math.random() * @colours.length)]
    console.log 'bg', bg
    console.log '@$el', @$el
    console.log 'colour', colour
    @$el.css
      backgroundImage: bg
      backgroundColor: colour
