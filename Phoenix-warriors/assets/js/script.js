'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 

document.getElementById("searchBtn").addEventListener("click", searchPage);
document.getElementById("searchInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        searchPage();
    }
});

function searchPage() {
    // Mapping of keywords to URLs
    var keywordMap = {
        "pg": "pg.html",
        "rent": "find_home.html",
        "parking": "parking.html",
        // Add more keywords and corresponding URLs as needed
    };

    // Get the input value
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();

    // Check if search term exists in the keyword map
    if (keywordMap.hasOwnProperty(searchTerm)) {
        // Navigate to the corresponding page
        window.location.href = keywordMap[searchTerm];
    } 
}

