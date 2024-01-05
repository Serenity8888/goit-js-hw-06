document.addEventListener('DOMContentLoaded', function () {
  // Get the input and span elements
  var nameInput = document.getElementById('name-input');
  var nameOutput = document.getElementById('name-output');

  // Add an input event listener to the name input
  nameInput.addEventListener('input', function () {
    // Set the span text to the input value or "Anonymous" if empty
    nameOutput.textContent = nameInput.value || 'Anonymous';
  });
});
