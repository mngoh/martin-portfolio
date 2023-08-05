// Hidden Nav Bar
const nav = document.querySelector('.navbar');
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add('navbar--hidden');
  } else {
    nav.classList.remove('navbar--hidden');
  }
  lastScrollY = window.scrollY;
});

// Get the scrollmenu container and the buttons
function scrollContentRight() {
  const scrollmenu = document.getElementById('scrollmenu');
  scrollmenu.scrollLeft += 600;
  document.getElementById('button-left').style.display = 'block';

  // Check if the scrollmenu has reached the rightmost end
  const isAtRightEnd = scrollmenu.scrollLeft + scrollmenu.clientWidth >= scrollmenu.scrollWidth;

  // If the scrollmenu has reached the rightmost end, hide the button-right
  if (isAtRightEnd) {
    document.getElementById('button-right').style.display = 'none';
  }
}

// Get the scrollmenu container and the buttons
function scrollContentLeft() {
  const scrollmenu = document.getElementById('scrollmenu');
  scrollmenu.scrollLeft -= 600;
  document.getElementById('button-right').style.display = 'block';

  // Check if the scrollmenu has reached the leftmost end
  const isAtLeftEnd = scrollmenu.scrollLeft === 0;

  // If the scrollmenu has reached the leftmost end, hide the button-left
  if (isAtLeftEnd) {
    document.getElementById('button-left').style.display = 'none';
  }
}

// Function to handle scroll events
function handleScroll() {
  const scrollmenu = document.getElementById('scrollmenu');

  // Check if the scrollmenu has reached the rightmost end
  const isAtRightEnd = scrollmenu.scrollLeft + scrollmenu.clientWidth >= scrollmenu.scrollWidth;

  // Check if the scrollmenu has reached the leftmost end
  const isAtLeftEnd = scrollmenu.scrollLeft === 0;

  // Show/hide the buttons accordingly
  document.getElementById('button-left').style.display = isAtLeftEnd ? 'none' : 'block';
  document.getElementById('button-right').style.display = isAtRightEnd ? 'none' : 'block';
}


