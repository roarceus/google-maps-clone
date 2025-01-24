mapboxgl.accessToken = '<acces_token>';

navigator.geolocation.getCurrentPosition(locationSuccess, locationError, { enableHighAccuracy: true});

function locationSuccess(position) {
    displayMap([position.coords.longitude, position.coords.latitude]);
}

function locationError() {
    displayMap([-0.12838, 51.51574]);
}

function displayMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });
    
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-right');

    var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
    });

    map.addControl(directions, 'top-left');
}

