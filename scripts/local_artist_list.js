const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

// Default is to show that the grid button is active
gridbutton.classList.add("gridactive");

// When the user clicks on the grid button apply the grid class styling to the article ("display")
gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
  //Change appearance of the grid vs list buttons to show which is active
  gridbutton.classList.add("gridactive");
  listbutton.classList.remove("listactive");
});

// When the user clicks on the list button apply the list class styling to the article ("display")
listbutton.addEventListener("click", showList); 
function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
  //Change appearance of the grid vs list buttons to show which is active
  gridbutton.classList.remove("gridactive");
  listbutton.classList.add("listactive");
}


// Logic and function for when we want to load the data from API
const url = './json/local_artist_data.json';

async function getcards() {
    const response = await fetch(url);
    const data = await response.json();
    displaycards(data.local_artists);
}
  
const displaycards = (local_artists) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    local_artists.forEach((local_artist) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let busname = document.createElement('p');
      let buswebsite = document.createElement('a');
      let venuefacebook = document.createElement('a');
      let venueinstagram = document.createElement('a');
      let venuetwitter = document.createElement('a');
      let venuearea = document.createElement('a');
      let venuenav = document.createElement('a');

      // Designate what text to display for the elements
      busname.textContent = `${venue.name}`;
      buswebsite.textContent = "Website"; 
      venuefacebook.textContent = "Facebook"; 
      venueinstagram.textContent = "Instagram";
      venuetwitter.textContent = "Twitter";
      venuearea.textContent = "Area: " + `${venue.area}`;
      venuenav.textContent = "Navigation";


      // Set attributes for links
      buswebsite.setAttribute('href', `${venue.website}`);
      venuefacebook.setAttribute('href', `${venue.facebook}`);
      venueinstagram.setAttribute('href', `${venue.instagram}`);
      venuetwitter.setAttribute('href', `${venue.twitter}`);
      venuenav.setAttribute('href', `${venue.navigation}`);

      // Set attributes
      busname.setAttribute('class', 'venuename');
      venuearea.setAttribute('class', 'sector');
  
  
      // Append the section(card) with the created elements
      card.appendChild(busname);
      card.appendChild(venuearea);
      card.appendChild(buswebsite);
      card.appendChild(venuefacebook);
      card.appendChild(venueinstagram);
      card.appendChild(venuetwitter);
      card.appendChild(venuenav);
      
      cards.appendChild(card);

    }); // end of forEach loop
  } // end of function expression

getcards();  //load the data from the API