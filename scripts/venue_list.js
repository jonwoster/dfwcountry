// const gridbutton = document.querySelector("#grid");
// const mapbutton = document.querySelector("#mapbut");
const display = document.querySelector(".cards");
// let map;
// const bootimage = "./images/boot_image.png";

// // Default is to show that the grid button is active
// gridbutton.classList.add("gridactive");

// Logic and function for when we want to load the data from API
const url = './json/venue_data.json';

async function getcards() {
    const response = await fetch(url);
    const data = await response.json();
    displaycards(data.venues);
}

// *****************    Map scripting     *********************************************


// function initMap() {
//   console.log("inside initMap function");
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: new google.maps.LatLng(32.913212206056755, -97.04067852441372),
//     zoom: 10,
//   });

//   // list the locations
//   const locations = [
//     {
//       position: new google.maps.LatLng(32.79155145290058, -97.34744073292899),
//       type: "venue",
//       title: "Billy Bob's Texas",
//     },
//   ];

//   // Create markers.
//   for (let i = 0; i < locations.length; i++) {
//     const marker = new google.maps.Marker({
//       position: locations[i].position,
//       icon: bootimage, //icons[locations[i].type].icon,
//       title: locations[i].title,
//       url: 'http://www.google.com/',
//       map: map,
//     });
//     // Add click listener to the marker
//     google.maps.event.addListener(marker, 'click', function() {
//       window.location.href = marker.url;
//     });
//   }
// }
// // window.initMap = initMap;

// When the user clicks on the grid button apply the grid class styling to the article ("display")
// gridbutton.addEventListener("click", () => {
// 	display.classList.add("grid");
// 	display.classList.remove("map");
//   //Change appearance of the grid vs map buttons to show which is active
//   gridbutton.classList.add("gridactive");
//   // mapbutton.classList.remove("mapactive");
// });

// // When the user clicks on the map button apply the map class styling to the article ("display")
// mapbutton.addEventListener("click", showMap); 
// function showMap() {
// 	display.classList.add("map");
// 	display.classList.remove("grid");
//   //Change appearance of the grid vs list buttons to show which is active
//   gridbutton.classList.remove("gridactive");
//   mapbutton.classList.add("mapactive");
//   console.log("Inside showMap function");
// }
  
const displaycards = (venues) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    venues.forEach((venue) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');

      let busname = document.createElement('p');
      let venuearea = document.createElement('p');
      let buswebsite = document.createElement('a');

      let icons = document.createElement('div');
      let venuenav = document.createElement('a');
      let venuefacebook = document.createElement('a');
      let venueinstagram = document.createElement('a');
      let venuetwitter = document.createElement('a');

      // Designate what text to display for the elements
      busname.textContent = `${venue.name}`;
      buswebsite.textContent = "Website"; 
      // venuenav.innerHTML = '<i id = "nav-icon", class="material-icons">&#xe52e;</i>';
      venuenav.innerHTML = '<i class="material-icons" id="nav-icon">directions</i>';
      venuefacebook.innerHTML = '<i class="fa-brands fa-facebook"></i>';
      venueinstagram.innerHTML = '<i class="fa-brands fa-instagram"></i>';
      venuetwitter.innerHTML = '<i class="fa-brands fa-x"></i>';
      venuearea.textContent = "(" + `${venue.area}` + ")";
      
      // Set attributes for links
      buswebsite.setAttribute('href', `${venue.website}`);
      venuenav.setAttribute('href', `${venue.navigation}`);
      venuefacebook.setAttribute('href', `${venue.facebook}`);
      venueinstagram.setAttribute('href', `${venue.instagram}`);
      venuetwitter.setAttribute('href', `${venue.twitter}`);

      // Set attributes to specify classes
      busname.setAttribute('class', 'venuename');
      venuearea.setAttribute('class', 'sector');
      buswebsite.setAttribute('id', 'website');
      icons.setAttribute('class', 'icons');
  
      // Append the section(card) with the created elements
      card.appendChild(busname);
      card.appendChild(venuearea);
      card.appendChild(buswebsite);
      
      icons.appendChild(venuenav);
      icons.appendChild(venuefacebook);
      icons.appendChild(venueinstagram);
      icons.appendChild(venuetwitter);

      card.appendChild(icons);
      
      cards.appendChild(card);

    }); // end of forEach loop
  } // end of function expression

getcards();  //load the data from the API
