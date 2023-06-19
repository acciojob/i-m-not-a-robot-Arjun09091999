//your JS code here. If required.
function fetchImages() {
  // Implement your logic to fetch images from API and randomize their order
  // Replace the src attributes of the image elements with the fetched image URLs
  // Hint: You can use the `Math.random()` function to generate random indices for shuffling the images
}

// Reset the state to the initial state
function resetState() {
  document.getElementById("reset").style.display = "none";
  document.getElementById("verify").style.display = "none";
  document.getElementById("para").innerHTML = "";
}

// Handle image click event
function handleImageClick(event) {
  // Implement your logic to handle image click event
  // Update the state and display the appropriate buttons/messages based on the clicks
}

// Handle reset button click event
function handleResetClick(event) {
  resetState();
}

// Handle verify button click event
function handleVerifyClick(event) {
  // Implement your logic to verify the selected tiles
  // Display the result message based on the verification
}

// Add event listeners
document.addEventListener("DOMContentLoaded", fetchImages);

document.querySelectorAll("img").forEach(function (img) {
  img.addEventListener("click", handleImageClick);
});

document.getElementById("reset").addEventListener("click", handleResetClick);

document.getElementById("verify").addEventListener("click", handleVerifyClick);
