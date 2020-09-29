$(document).ready(function() {
    var markers = new OpenLayers.Layer.Markers("Markers");
    onInit();
    function onInit() {
    map = new OpenLayers.Map("mapdiv");
    map.addLayer(new OpenLayers.Layer.OSM());

    var lonLat = new OpenLayers.LonLat(-58.83063, -27.46924).transform(
        new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
        map.getProjectionObject() // to Spherical Mercator Projection
    );

    var zoom = 16;
    
    map.addLayer(markers);
    map.setCenter(lonLat, zoom);
    map.events.register("click", map, handleMapClick);
    }


    function handleMapClick(evt) {
        markers.clearMarkers();
        var lonlat = map
            .getLonLatFromViewPortPx(evt.xy)
            .transform(
                new OpenLayers.Projection("EPSG:900913"),
                new OpenLayers.Projection("EPSG:4326")
            );
        $("#latitud").val(lonlat.lat);
        $("#longitud").val(lonlat.lon);

        var lonLat = new OpenLayers.LonLat(lonlat.lon, lonlat.lat).transform(
            new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
            map.getProjectionObject() // to Spherical Mercator Projection
        );
        
         markers.addMarker(new OpenLayers.Marker(lonLat));
    }
});
