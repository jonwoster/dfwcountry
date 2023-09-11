let map;

const bootimage = "./images/boot_image.png";

// Logic and function for when we want to load the data from API
const url = './json/venue_data.json';
let data = {};

// Get locations from json file
async function getlocations() {
  const response = await fetch(url);
  data = await response.json();
}

async function initMap() {

  // call function to get locations of venues
  await getlocations();

  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(32.913212206056755, -97.04067852441372),
    zoom: 10,
  });
  
  const locations = data.venues;  

  // Create markers.
  for (let i = 0; i < locations.length; i++) {
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i].lat, locations[i].long), 
      icon: bootimage, 
      title: locations[i].name,
      url: locations[i].website,
      map: map,
    });

    // Add click listener to the marker
    google.maps.event.addListener(marker, 'click', function() {
      window.location.href = marker.url;
    });
  }
}

window.initMap = initMap;







