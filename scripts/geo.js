$.getJSON('../data/geo_data.json', function(geo_data) {
  // 1. create map holder
  var map = new L.Map('map-holder', {
    center: new L.LatLng(51.5548885, -0.108438),
    zoom: 3
  });
  // 2. add base layer
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png', {
    minZoom: 1,
    maxZoom: 15,
    noWrap: false,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
  }).addTo(map);
  // 3. place points
  for (var key in geo_data) {
    var circle = L.circle(geo_data[key], {
      color: 'white',
      fillColor: 'white',
      fillOpacity: 0.25,
      radius: 500
    }).addTo(map);
  };
});
