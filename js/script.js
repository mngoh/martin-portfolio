document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav ul li a, .profile-text button");
  const learnMoreButton = document.querySelector(".button-link");
  const hireButton = document.querySelector(".button-hire");
  const aboutButton = document.querySelector(".button-about"); 
  const projectButton = document.querySelector(".button-project");
  const articlesButton = document.querySelector(".button-articles");
  const aboutSection = document.getElementById("about");
  const projectSection = document.getElementById("projects");
  const contactSection = document.getElementById("contact"); 

  // Function to handle smooth scrolling
  function smoothScroll(targetOffset, scrollDuration) {
    const start = window.pageYOffset;
    const startTime = "now" in window.performance ? performance.now() : new Date().getTime();
    function scroll() {
      const currentTime = "now" in window.performance ? performance.now() : new Date().getTime();
      const elapsed = currentTime - startTime;
      const scrollProgress = Math.min(elapsed / scrollDuration, 1);
      const scrollPosition = start + (targetOffset - start) * easeInOutCubic(scrollProgress);
      window.scrollTo(0, scrollPosition);
      if (scrollProgress < 1) {
        requestAnimationFrame(scroll);
      }
    }
    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
    requestAnimationFrame(scroll);
  }
  // Add event listeners to each link/button
  for (const link of navLinks) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const targetOffset = targetElement.offsetTop;
      const scrollDuration = 2000;
      smoothScroll(targetOffset, scrollDuration);
    });
  }
  learnMoreButton.addEventListener("click", function(event) {
    event.preventDefault();
    const targetOffset = aboutSection.offsetTop;
    const scrollDuration = 2000;
    smoothScroll(targetOffset, scrollDuration);
  });
  hireButton.addEventListener("click", function(event) {
    event.preventDefault();
    const targetOffset = contactSection.offsetTop;
    const scrollDuration = 2000;
    smoothScroll(targetOffset, scrollDuration);
  });
  aboutButton.addEventListener("click", function(event) {
    event.preventDefault();
    const targetOffset = projectSection.offsetTop;
    const scrollDuration = 2000;
    smoothScroll(targetOffset, scrollDuration);
  });
  projectButton.addEventListener("click", function(event) {
    event.preventDefault();
    const targetOffset = contactSection.offsetTop;
    const scrollDuration = 2000;
    smoothScroll(targetOffset, scrollDuration);
  });
  articlesButton.addEventListener("click", function(event) {
    event.preventDefault();
    const targetOffset = contactSection.offsetTop;
    const scrollDuration = 2000;
    smoothScroll(targetOffset, scrollDuration);
  });
});

// Scrolling Navbar Background
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];
    const navbar = document.querySelector('.navbar');

    toggleButton.addEventListener('click', (event) => {
      event.preventDefault();
      navbarLinks.classList.toggle('active');
      navbar.classList.toggle('black-background');
    });

    const links = navbarLinks.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', () => {
        navbarLinks.classList.remove('active');
        navbar.classList.remove('black-background');
      });
    }
  });
// Hidden Nav Bar
// const nav = document.querySelector('.navbar');
// let lastScrollY = window.scrollY;
// window.addEventListener("scroll", () => {
//   if (lastScrollY < window.scrollY) {
//     nav.classList.add('navbar--hidden');
//   } else {
//     nav.classList.remove('navbar--hidden');
//   }
//   lastScrollY = window.scrollY;
// });


// Articles
function redirectToDifferentPage(url) {
  window.location.href = url;
}


// About Carousel
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls for About Carousel
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls for About Carousel
function currentSlide(n) {
  showSlides((slideIndex = n));
  updateDots(n); // Call the function to update the dots
}

// Show About Carousel Slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("car-img");
  let dots = document.getElementsByClassName("dots"); // Use the correct class name
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active"); // Remove the "active" class from all dots
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active"); // Add the "active" class to the selected dot
}

// Function to update dots
function updateDots(n) {
  showSlides((slideIndex = n));
}





// Project Section Carousel
let projIndex = 1;
showProjectSlides(projIndex);

// Next/previous controls for Project Section Carousel
function plusProjectSlides(n) {
  showProjectSlides((projIndex += n));
}

// Thumbnail image controls for Project Section Carousel
function currentSlide(n) {
  showProjectSlides((projIndex = n));
}

// Show Project Section Carousel Slides
function showProjectSlides(n) {
  let i;
  let projs = document.getElementsByClassName("box");
  let circles = document.getElementsByClassName("dots"); // Use the correct class name
  if (n > projs.length) {
    projIndex = 1;
  }
  if (n < 1) {
    projIndex = projs.length;
  }
  for (i = 0; i < projs.length; i++) {
    projs[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].classList.remove("active"); // Remove the "active" class from all dots
  }
  projs[projIndex - 1].style.display = "block";
  circles[projIndex - 1].classList.add("active"); // Add the "active" class to the selected dot
}


// Card Click 
function flipCard(cardId) {
  const card = document.getElementById(cardId);
  card.classList.toggle('flipped');
}


// Card Toggle
function toggleCollapsible(cardId) {
  const card = document.getElementById(cardId);
  const cardBack = card.querySelector('.card-back');

  if (cardBack.style.display === 'block') {
    cardBack.style.display = 'none';
  } else {
    cardBack.style.display = 'block';
  }
}