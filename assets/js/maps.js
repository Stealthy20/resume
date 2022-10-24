function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 59.3144200230809,
            lng: 18.068134990515787
        }
    });

    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const locations = [
        { lat: 59.31375046620422, lng: 18.065344686505227 },
        { lat: 59.33624054206536, lng: 18.067730941178997 },
        { lat: 59.34375280776369, lng: 18.006287722781305 }
    ];

    const markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    const markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}