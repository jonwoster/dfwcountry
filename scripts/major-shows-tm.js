const display = document.querySelector(".cards");

// Logic and function for when we want to load the data from API
// Use DMA ID of 261 which is Dallas Ft Worth area
// const url = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=261&subgenres=KZazBEonSMnZfZ7vAFa&apikey=9RvR08IgKdeYphlBPBqdfNgzsgSqvOs3";


const url = "https://app.ticketmaster.com/discovery/v2/classifications/subgenres/KZazBEonSMnZfZ7vAFa.json?apikey=9RvR08IgKdeYphlBPBqdfNgzsgSqvOs3";

// genre id for country: "KnvZfZ7vAv6"
// subgenre id for country: "KZazBEonSMnZfZ7vAFa"

async function getcards() {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data = ", data);  //debugging only
}
  
// const displaycards = (venues) => {
//     const cards = document.querySelector('div.cards'); // select the output container element
  
//     venues.forEach((venue) => {
//       // Create elements to add to the div.cards element
//       let card = document.createElement('section');

//       let busname = document.createElement('a');  // changed from p to a
//       let venuearea = document.createElement('p');

//       let icons = document.createElement('div');
//       let venuenav = document.createElement('a');
//       let venuefacebook = document.createElement('a');
//       let venueinstagram = document.createElement('a');
//       let venuetwitter = document.createElement('a');

//       // Designate what text to display for the elements
//       busname.textContent = `${venue.name}`;
//       venuenav.innerHTML = '<i class="material-icons" id="nav-icon">directions</i>';
//       venuefacebook.innerHTML = '<i class="fa-brands fa-facebook"></i>';
//       venueinstagram.innerHTML = '<i class="fa-brands fa-instagram"></i>';
//       venuetwitter.innerHTML = '<i class="fa-brands fa-twitter"></i>';
//       venuearea.textContent = "(" + `${venue.area}` + ")";
      
//       // Set attributes for links
//       busname.setAttribute('href', `${venue.website}`);
//       venuenav.setAttribute('href', `${venue.navigation}`);
//       venuefacebook.setAttribute('href', `${venue.facebook}`);
//       venueinstagram.setAttribute('href', `${venue.instagram}`);
//       venuetwitter.setAttribute('href', `${venue.twitter}`);

//       // Set attributes to specify classes
//       busname.setAttribute('class', 'venuename');
//       venuearea.setAttribute('class', 'sector');
//       icons.setAttribute('class', 'icons');
  
//       // Append the section(card) with the created elements
//       card.appendChild(busname);
//       card.appendChild(venuearea);
      
//       icons.appendChild(venuenav);

//       // If the JSON includes info for the social media, append those to the display card
//       if (`${venue.facebook}`) {icons.appendChild(venuefacebook);}
//       if (`${venue.instagram}`) {icons.appendChild(venueinstagram);}
//       if (`${venue.twitter}`) {icons.appendChild(venuetwitter);}

//       card.appendChild(icons);
      
//       cards.appendChild(card);

//     }); // end of forEach loop
//   } // end of function expression

getcards();  //load the data from the API
