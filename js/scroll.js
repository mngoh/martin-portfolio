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


// Function to scroll content to the left
// function scrollContentLeft() {
//   const scrollmenu = document.getElementById('scrollmenu');
//   const scrollAmount = 150; 

//   scrollmenu.scrollBy({
//     left: -scrollAmount,
//     behavior: 'smooth',
//   });

//   checkIfBox1Showing(); 
// }

// // Function to scroll content to the right
// function scrollContentRight() {
//   const scrollmenu = document.getElementById('scrollmenu');
//   const scrollAmount = 150; 

//   scrollmenu.scrollBy({
//     left: scrollAmount,
//     behavior: 'smooth',
//   });

//   checkIfBox1Showing();
// }

// // Function to check if box1 is showing and hide the left button if necessary
// function checkIfBox1Showing() {
//   const scrollmenu = document.getElementById('scrollmenu');
//   const box1 = document.getElementById('box1');

//   // If box1 is at the beginning (leftmost position), hide the left button
//   if (scrollmenu.scrollLeft === 0 || scrollmenu.scrollLeft < box1.offsetWidth) {
//     document.getElementById('button-left').style.display = 'none';
//   } else {
//     document.getElementById('button-left').style.display = 'block';
//   }
// }

// Function to scroll content to the left
function scrollContentLeft() {
  const scrollmenu = document.getElementById('scrollmenu');
  const scrollAmount = 200;

  scrollmenu.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth',
  });

  checkIfButtonsVisibility();
}

// Function to scroll content to the right
function scrollContentRight() {
  const scrollmenu = document.getElementById('scrollmenu');
  const scrollAmount = 200;

  scrollmenu.scrollBy({
    left: scrollAmount,
    behavior: 'smooth',
  });

  checkIfButtonsVisibility();
}

// Function to check if buttons should be visible or hidden
function checkIfButtonsVisibility() {
  const scrollmenu = document.getElementById('scrollmenu');
  const box1 = document.getElementById('box1');
  const containerWidth = scrollmenu.offsetWidth;
  const contentWidth = scrollmenu.scrollWidth;

  // If box1 is at the beginning (leftmost position), hide the left button
  if (scrollmenu.scrollLeft === 0 || scrollmenu.scrollLeft < box1.offsetWidth / 2) {
    document.getElementById('button-left').style.display = 'none';
  } else {
    document.getElementById('button-left').style.display = 'block';
  }

  // If the end of the content is reached, hide the right button
  if (scrollmenu.scrollLeft >= contentWidth - containerWidth) {
    document.getElementById('button-right').style.display = 'none';
  } else {
    document.getElementById('button-right').style.display = 'block';
  }
}
