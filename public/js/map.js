



$(document).ready(function() {
    map = new OpenLayers.Map("mapdiv");
    map.addLayer(new OpenLayers.Layer.OSM());
    var lonLat = new OpenLayers.LonLat(-58.83063,-27.469240)
          .transform(
            new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
            map.getProjectionObject() // to Spherical Mercator Projection
          );
          
    var zoom=16;
    map.events.register('click', map, handleMapClick);
    
    map.setCenter (lonLat, zoom);

    function handleMapClick(evt)
{
var lonlat = map.getLonLatFromViewPortPx(evt.xy).transform(
	new OpenLayers.Projection("EPSG:900913"),
    new OpenLayers.Projection("EPSG:4326"));
    $('#latitud').val((lonlat.lat));
    $('#longitud').val(lonlat.lon);

 
}
})
