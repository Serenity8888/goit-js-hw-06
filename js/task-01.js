// Select the ul#categories element
      const categoriesList = document.getElementById('categories');

      // Get all li.item elements within ul#categories
      const categoryItems = categoriesList.querySelectorAll('.item');

      // Display the number of categories
      console.log(`Number of categories: ${categoryItems.length}`);

      // Loop through each li.item element
      categoryItems.forEach((category) => {
        // Get the category name from the h2 tag
        const categoryName = category.querySelector('h2').textContent;

        // Get the number of elements in the category
        const categoryElements = category.querySelectorAll('ul > li').length;

        // Display the information in the console
        console.log(`\nCategory: ${categoryName}`);
        console.log(`Elements: ${categoryElements}`);
      });