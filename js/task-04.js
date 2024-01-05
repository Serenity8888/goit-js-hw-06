// Create a variable to store the current counter value
let counterValue = 0;

// Get references to the HTML elements
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterSpan = document.getElementById('value');

// Add click event listeners to the buttons
decrementButton.addEventListener('click', () => {
  // Decrease the counter value by 1
  counterValue -= 1;
  
  // Update the interface with the new counter value
  counterSpan.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
  // Increase the counter value by 1
  counterValue += 1;
  
  // Update the interface with the new counter value
  counterSpan.textContent = counterValue;
});
