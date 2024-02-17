// Select all elements with the class 'header_button'
const buttons = document.querySelectorAll('.header_button');
const rightButtons = document.querySelectorAll('.right_header_button');

// Add event listener to each button
buttons.forEach((button) => {
  button.addEventListener('click', function () {
    // Remove 'active' class from all buttons
    buttons.forEach((btn) => {
      btn.classList.remove('active_button');
    });
    rightButtons.forEach((btn) => {
      btn.classList.remove('active_button');
    });

    // Add 'active' class to the clicked button
    this.classList.add('active_button');
  });
});

rightButtons.forEach((button) => {
  button.addEventListener('click', function () {
    // Remove 'active' class from all buttons
    buttons.forEach((btn) => {
      btn.classList.remove('active_button');
    });
    rightButtons.forEach((btn) => {
      btn.classList.remove('active_button');
    });

    // Add 'active' class to the clicked button
    this.classList.add('active_button');
  });
});

// scroll code

// Get the button element

// Get the button element
var btn = document.querySelector('.arrow-up');

// Add scroll event listener to window
// window.addEventListener("scroll", function () {
//   // Check if the scroll position is greater than 300 pixels
//   if (window.scrollY > 80) {
//     // If yes, add 'show' class to the button
//     console.log("");

//     btn.classList.remove("hide");
//   } else {
//     // If not, remove 'show' class from the button
//     btn.classList.add("hide");
//   }
// });

// Add click event listener to the button
btn.addEventListener('click', function (e) {
  // Prevent default behavior of the button click (prevents page from scrolling to top)
  e.preventDefault();
  // Scroll smoothly to the top of the page
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
