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

// // Function to scroll content to the left
// function scrollContentLeft() {
//   const scrollmenu = document.getElementById('scrollmenu');
//   var width = document.getElementById('box1').offsetWidth;

//   scrollmenu.scroll({
//     left: scrollmenu.scrollLeft - width - 250, 
//     behavior: 'smooth'
//     });
//   }
// function scrollContentRight() {
//   const scrollmenu = document.getElementById('scrollmenu');
//   var width = document.getElementById('box1').offsetWidth;
//   scrollmenu.scroll({
//     left: scrollmenu.scrollLeft + width + 250,
//     behavior: 'smooth'
//     });
//     document.getElementById('button-left').style.display = 'block';
//   }

let isScrolling = false; // Flag to prevent double-clicks

// Function to scroll content to the left
function scrollContentLeft() {
  if (isScrolling) return; // Ignore if scrolling is already in progress
  const scrollmenu = document.getElementById('scrollmenu');
  const width = document.getElementById('box1').offsetWidth;
  const newPosition = scrollmenu.scrollLeft - width - 251;
  
  isScrolling = true;
  scrollmenu.scroll({
    left: newPosition,
    behavior: 'smooth',
  });

  // Reset the flag after the scrolling animation is complete (approx. 500ms)
  setTimeout(() => {
    isScrolling = false;
  }, 500);
}

// Function to scroll content to the right
function scrollContentRight() {
  if (isScrolling) return; // Ignore if scrolling is already in progress
  const scrollmenu = document.getElementById('scrollmenu');
  const width = document.getElementById('box1').offsetWidth;
  const newPosition = scrollmenu.scrollLeft + width + 250;

  isScrolling = true;
  scrollmenu.scroll({
    left: newPosition,
    behavior: 'smooth',
  });

  // Reset the flag after the scrolling animation is complete (approx. 500ms)
  setTimeout(() => {
    isScrolling = false;
  }, 500);
   document.getElementById('button-left').style.display = 'block';

}
