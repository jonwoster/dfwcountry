


// Related to the nav //
function togglemenu() {
    document.getElementById("primary-nav").classList.toggle("open");
    document.getElementById("hamburger-button").classList.toggle("open");
    console.log("in toggle menu function");
}

const x = document.getElementById('hamburger-button');
//console.log("just before onclick");
x.onclick = togglemenu;









