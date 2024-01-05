const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Get the ul#ingredients element
const ulIngredients = document.getElementById("ingredients");

// Loop through each ingredient in the array
ingredients.forEach((ingredient) => {
  // Create a new li element
  const liElement = document.createElement("li");

  // Add the ingredient name as text content
  liElement.textContent = ingredient;

  // Add the "item" class to the li element
  liElement.classList.add("item");

  // Append the li element to the ul#ingredients list
  ulIngredients.appendChild(liElement);
});

