// Defineing an array to hold the favorites
var favorites = [];

// Function to open the image in a modal when I clicked
function openImage(src) 
{
  // Geting the modal and image elements
  var modal = document.getElementById("myModal"); // Get the modal element
  var img = document.getElementById("img01"); // Get the image element

  // Displaying the modal and set the image source
  modal.style.display = "block"; // Show the modal
  img.src = src; // Seting the image source to the clicked image

  // Adding a blur effect to the background when the modal is open
  document.getElementById("photo-gallery").classList.add("blur"); // Add the "blur" class to the photo gallery element
  document.getElementById("favorites").classList.add("blur"); // Add the "blur" class to the favorites element
}

// Function to close the modal
function closeModal() 
{
  // Hide the modal
  document.getElementById("myModal").style.display = "none"; // Hide the modal by setting its display style to "none"
  
  // Remove the blur effect from the background when the modal is closed
  document.getElementById("photo-gallery").classList.remove("blur"); // Remove the "blur" class from the photo gallery element
  document.getElementById("favorites").classList.remove("blur"); // Remove the "blur" class from the favorites element
}

// Function to add the currently displayed image to the favorites
function addToFavorites() 
{
  // Getting the currently displayed image
  var img = document.getElementById("img01"); // Get the image element

  // Checking if the image is already in the favorites
  if (favorites.includes(img.src)) {
    alert("This image is already in your favorites."); // Display an alert message
    return;
  }

  // Limiting the number of favorites to 3
  if (favorites.length >= 3) 
  {
    alert("You must remove a favorite before adding another."); // Display an alert message
    return;
  }
  
  // Add the image to the favorites array
  favorites.push(img.src); // Add the image source to the favorites array
  
  // Create a new image element for the favorites
  var newImg = document.createElement("img"); // Create a new <img> element
  newImg.src = img.src; // Set the image source to the current image
  

  // When the new image is clicked, create a button to remove the image from the favorites
  newImg.onclick = function() 
  {
    var btn = document.createElement("button"); // Create a new <button> element
    btn.innerText = "Remove"; // Set the button text to "Remove"
    
    // When the button is clicked, remove the image from the favorites array and from the display
    btn.onclick = function() {
      favorites = favorites.filter(function(src) 
      {
        return src !== img.src; // Filter out the current image source from the favorites array
      });
      newImg.remove(); // Removeing the image element from the display
      btn.remove(); // Remove the button element from the display
    };
    document.getElementById("favorites").appendChild(btn); // Append the button to the favorites element
  };
  
  // Adding the new image to the favorites display
  document.getElementById("favorites").appendChild(newImg); // Append the image to the favorites element
}

// Adding onclick event listeners for the images
window.onload = function() 
{
  var imageContainers = document.getElementsByClassName("image-container"); // Get all elements with the class "image-container"
  for (var i = 0; i < imageContainers.length; i++) 
  {
    (function(index) 
    {
      imageContainers[index].onclick = function() 
      {
        openImage(imageContainers[index].getElementsByTagName("img")[0].src); // Call the openImage function with the clicked image source
      };
    })(i);
  }
}
