// Get the font-size control and the text span
const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

// Add an event listener for the input event on the font-size control
fontSizeControl.addEventListener("input", function () {
  // Update the font size of the text span based on the control value
  textSpan.style.fontSize = fontSizeControl.value + "px";
});
