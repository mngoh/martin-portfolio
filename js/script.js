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

// Scroll Appear in Website
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show')
    }
  })
});
const hiddenElements = document.querySelectorAll('.section-background');
hiddenElements.forEach((el) => observer.observe(el));
