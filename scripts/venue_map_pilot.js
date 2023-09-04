let map;

const bootimage = "./images/boot_image.png";

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(32.913212206056755, -97.04067852441372),
    zoom: 10,
  });

  // list the locations
  const locations = [
    {
      position: new google.maps.LatLng(32.79155145290058, -97.34744073292899),
      type: "venue",
      title: "Billy Bob's Texas",
    },
  ];

  // Create markers.
  for (let i = 0; i < locations.length; i++) {
    const marker = new google.maps.Marker({
      position: locations[i].position,
      icon: bootimage, //icons[locations[i].type].icon,
      title: locations[i].title,
      url: 'http://www.google.com/',
      map: map,
    });
    // Add click listener to the marker
    google.maps.event.addListener(marker, 'click', function() {
      window.location.href = marker.url;
    });
  }
}
window.initMap = initMap;
