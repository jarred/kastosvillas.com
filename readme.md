# Scss

`compass watch`

# JS

## Libs

`uglifyjs -o assets/js/libs.js assets/js/libs/modernizr.js assets/js/libs/jquery.js assets/js/libs/leaflet.js assets/js/libs/underscore.js assets/js/libs/backbone.js assets/js/libs/leaflet-google.js assets/js/libs/greensock/TweenMax.js`

## Coffescript

Development (watch and compile into a single file)

`coffee --watch --join assets/js/app.js --compile assets/_coffee/*.coffee assets/_coffee/views/*.coffee`