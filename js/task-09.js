function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Get references to the elements
const bodyElement = document.body;
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

// Function to change the background color
function changeBackgroundColor() {
  // Generate a random color using getRandomHexColor function
  const randomColor = getRandomHexColor();

  // Apply the color to the body element
  bodyElement.style.backgroundColor = randomColor;

  // Update the color value in the span
  colorSpan.textContent = randomColor;
}

// Add click event listener to the button
changeColorButton.addEventListener('click', changeBackgroundColor);

