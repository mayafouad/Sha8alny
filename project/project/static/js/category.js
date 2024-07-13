function search() {
  // Declare variables
  var input, filter, categories, category, title, i, displayedCount;
  input = document.querySelector('.category-Search');
  filter = input.value.toUpperCase();
  categories = document.querySelector('.categories');
  category = categories.getElementsByClassName('category');
  displayedCount = 0; // Initialize the count of displayed categories

  // Loop through all categories, and hide those who don't match the search query
  for (i = 0; i < category.length; i++) {
      title = category[i].getElementsByClassName("category-title")[0];
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
          category[i].style.display = "";
          displayedCount++; // Increment count for each displayed category
      } else {
          category[i].style.display = "none";
      }
  }

  // Update the count of displayed categories
  if(displayedCount==0){
    document.querySelector('.categories-count').innerText = displayedCount + " Category";
  }
  else{
  document.querySelector('.categories-count').innerText = displayedCount + " Categories";
  }
  // Hide the "Load more" button after search
  var button = document.querySelector('.see-more');
  button.style.display = "none";
}
function showMore() {
  var categories = document.querySelectorAll('.category');
  var button = document.querySelector('.see-more');
  for (var i = 3; i < categories.length; i++) {
      categories[i].style.display = "block";
  }
  document.querySelector('.categories-count').innerText = 6 + " Categories";
  button.style.display = "none"; // Hide the button after displaying all categories
}
