// Define the dictionary of navbar items
var navbarItems = {
  Home: "index.html",
  Games: "games.html",
  Apps: "#",
  Utilities: "#"
};

// Get the navbar element
var navbar = document.querySelector(".navbar");

// Create an unordered list element
var ul = document.createElement("ul");

// Iterate over the items in the dictionary
for (var key in navbarItems) {
  if (navbarItems.hasOwnProperty(key)) {
    // Create a list item element
    var li = document.createElement("li");

    // Create an anchor element
    var a = document.createElement("a");
    a.href = navbarItems[key];
    a.textContent = key;

    // Append the anchor element to the list item
    li.appendChild(a);

    // Append the list item to the unordered list
    ul.appendChild(li);
  }
}

// Append the unordered list to the navbar
navbar.appendChild(ul);
