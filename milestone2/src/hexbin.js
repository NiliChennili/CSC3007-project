import React, { useState, useEffect } from 'react';
import "./hexbin.css";
import * as turf from '@turf/turf'
// import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer'
// import { TileLayer } from 'https://cdn.esm.sh/react-leaflet/TileLayer'
// import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'

const hexbin = () => {
    const [data, setData] = useState([]); //using useState to hook to store the data and render it on the DOM

   
    const getData = () => {
      fetch("../Dataset/us_states_hexbin.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (myJson) {
          console.log(myJson);
          setData(myJson);
        });
    };

    useEffect(() => {
        getData();
      }, []);
    

      
        // Translate Polygon
        function transform(x) {
            var feat = x
            // var poly = turf.polygon([[[0,29],[3.5,29],[2.5,32],[0,29]]]);
            var translatedPoly = turf.transformTranslate(x, 450, 90);

            // for (var i = 0; i < feat.length; i++) {
            //     var coord = turf.polygon(feat[i].geometry.coordinates);
            //     turf.transformTranslate(coord, 1, 90);
            // }
            return translatedPoly
        }

        transformedPoly = transform(data);

        // Finding Centroid of Geojson Polygons
        function centroid(d) {
            var points = [];

            // var midpt = turf.centroid(d.features[0]);
            // var midpt2 = turf.centroid(d.features[1]);

            // points.push(midpt);
            // points.push(midpt2);

            for (var i = 0; i < d.features.length; i++) {
                points.push(turf.centroid(d.features[i]))
            }
            return points
        }

        var coord_center = centroid(transformedPoly);
        console.log(coord_center);

        function getState(y) {
            //var text = y.features[1].properties.iso3166_2;
            var arrText = [];

            for (var i = 0; i < y.features.length; i++) {
                var text = y.features[i].properties.iso3166_2;
                arrText.push(text)
            }
            return arrText
        }

        var statesName = getState(data)
        console.log(statesName[0])

        function getLat(d) {
            var latitude = [];
            for (var i = 0; i < d.length; i++) {
                var lat = d[i].geometry.coordinates[1]
                latitude.push(lat);
            }
            return latitude
        }

        var lat_center = getLat(coord_center);
        console.log(lat_center[0])

        function getLng(d) {
            var longtitude = [];
            for (var i = 0; i < d.length; i++) {
                var lng = d[i].geometry.coordinates[0]
                longtitude.push(lng);
            }
            return longtitude
        }

        var lng_center = getLng(coord_center);
        console.log(lng_center[0])

        // Load Mapbox Access Token
        var mapboxAccessToken = "pk.eyJ1IjoiMTkwMTg0OS1uYXRoYW5pZWwiLCJhIjoiY2w1c3hxbXA2MDBpZzNpcGQ5dzV1ZmM2YyJ9.eqDDBQoZwr8WrrlG8sTdww";

        // Declare map backdrop
        var map = L.map('map').setView([35.8, -96.9], 4);

        // var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //     maxZoom: 19,
        //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        // }).addTo(map);

        var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
            id: 'mapbox/light-v9',
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            tileSize: 512,
            zoomOffset: -1,
            maxZoom: 19
        }).addTo(map);

        function statesNameLabel(
            latLng,
            txt
        ) {
            let icon = L.divIcon({
                html: '<span>' + txt + '</span>',
                className: "",
            });
            let marker = L.marker(latLng, {
                icon: icon,
            });
            return marker;
        }

        for (var i = 0; i < 51; i++) {
                statesNameLabel(
                [lat_center[i]+0.2, lng_center[i]-0.2],
                statesName[i],
            ).addTo(map);
        }

        // statesNameLabel(
        //     [lat_center[0], lng_center[0]],
        //     statesName[0],
        // ).addTo(map);

        

        // Color Scale
        function getColorScale(d) {
            return d > 50 ? '#045a8d' :
                d > 45 ? '#2b8cbe' :
                    d > 40 ? '#74a9cf' :
                        d > 30 ? '#a6bddb' :
                            d > 20 ? '#d0d1e6' :
                                '#f1eef6';
        }

        // Fill Color to Cases
        function style(feature) {
            return {
                fillColor: getColorScale(feature.properties.cases),
                weight: 2,
                opacity: 1,
                color: 'white',
                fillOpacity: 0.6
            };
        }

        var geojson;

        // Add Interaction Pop!
        function highlightFeature(e) {
            var layer = e.target;
            info.update(layer.feature.properties);

            layer.setStyle({
                weight: 4,
                color: 'skyblue',
                padding: '4px',
                fillOpacity: 0.6
            });


            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                layer.bringToFront();
            }
        }

        function resetHighlight(e) {
            geojson.resetStyle(e.target);
            info.update();
        }

        function onEachFeature(feature, layer) {
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
            });
        }

        // Generate map
        geojson = L.geoJson(transformedPoly, {
            style: style,
            onEachFeature: onEachFeature,
        }).addTo(map);

        // Adding Tooltip
        var info = L.control();

        info.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
            this.update();
            return this._div;
        };

        // method that we will use to update the control based on feature properties passed
        info.update = function (props) {
            this._div.innerHTML = '<h2>Covid 19 Statistics - Adjusted for Population</h2>' + (props ?
                '<b>' + props.google_name + '</b><br/>' + props.cases
                : 'Hover over a state');
        };

        info.addTo(map);

        // Add Legend
        var legend = L.control({ position: 'bottomright' });

        legend.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0, 20, 30, 40, 45, 50],
                labels = ['<strong><center>Newcases in Jul 22</center></strong><strong>(Rate per 100k Pop.)</strong><br>'];

            // loop through our density intervals and generate a label with a colored square for each interval
            for (var i = 0; i < grades.length; i++) {
                div.innerHTML +=
                    labels.push('<center><i class="circle" style="background:' + getColorScale(grades[i] + 1) + '"></i> ' +
                        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br></center>' : '+'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };

        legend.addTo(map);

  
  return (
<div>
        <div id="map"></div>
</div>

  );
}

export default hexbin;