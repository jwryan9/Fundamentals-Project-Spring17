/**
 * Created by jasonryan on 3/24/17.
 */

var map, flightPlan;
var atl = {lat: 33.6407, lng: -84.4277};
var cid = {lat: 41.8864, lng: -91.70697};
var jfk = {lat: 40.6413, lng: -73.7781};
var ord = {lat: 41.9742, lng: -87.9072};
var sfo = {lat: 37.7749, lng: -122.4194};

var airports = {'atl':atl, 'cid':cid, 'jfk':jfk, 'ord':ord, 'sfo':sfo};
var center = {lat: 39.8282, lng: -98.5795};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 5,
        mapTypeId: 'terrain'
    });

    flightPlan = generateFlightPlan(['cid', 'jfk']);
    //flightPlan = generateFlightPlan(trip);
    addMkrs(flightPlan, map);
    addFlightPath(flightPlan, map, '#FF0000');
}

function generateMap(locations, len) {
    flightPlan = generateFlightPlan(locations);
    initMap(flightPlan, len);
}

// Adds flight path to map based on flight plan
function addFlightPath(flightPlan, map, color) {
    var flightPath;
    flightPath = new google.maps.Polyline({
        path: flightPlan,
        geodesic: true,
        strokeOpacity: 0.8,
        strokeWeight: 4,
        strokeColor: color
    });

    flightPath.setMap(map);
}


// Generates flight plan
function generateFlightPlan(locations) {
    var index;
    var flightPlanCoordinates = [];
    for (index = 0; index < locations.length; ++index) {
        flightPlanCoordinates.push(airports[locations[index]]);
     }
    initMap(flightPlanCoordinates, 2);
    return flightPlanCoordinates;
}

// Function adds Marker to map with label
function addMkrs(locations, map) {
    var mkr, index;
    for(index = 0; index < locations.length; ++index) {
        mkr = new google.maps.Marker({
            position: locations[index],
            map: map
        });
    }
}

// Function calculates mid point between airports in array
function calcCenter(mkrs) {
    var index, len;
    var latSum = 0;
    var lngSum = 0;
    for(index = 0, len = mkrs.length; index < len; ++index) {
        latSum += mkrs[index]['lat'];
        lngSum += mkrs[index]['lng'];
    }
    var latMid = latSum/mkrs.length;
    var lngMid = lngSum/mkrs.length;
    return {lat: latMid, lng: lngMid};
}
