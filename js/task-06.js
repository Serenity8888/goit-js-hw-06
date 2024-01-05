document.addEventListener("DOMContentLoaded", function () {
  const validationInput = document.getElementById("validation-input");

  validationInput.addEventListener("blur", function () {
    const enteredText = validationInput.value.trim();
    const expectedLength = parseInt(validationInput.getAttribute("data-length"), 10);

    if (enteredText.length === expectedLength) {
      validationInput.classList.remove("invalid");
      validationInput.classList.add("valid");
    } else {
      validationInput.classList.remove("valid");
      validationInput.classList.add("invalid");
    }
  });
});
