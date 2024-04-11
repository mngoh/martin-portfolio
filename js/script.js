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


// Scroll Appear in Website
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  const selectors = ['.profile', '.about', '.projects', '.contact-container', '.box'];
  selectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => observer.observe(element));
  });
});


// Search Bar for Blog
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.search-input');
  const searchForm = document.querySelector('.search');
  const boxes = document.querySelectorAll('.box');
  const noResultsMessage = document.querySelector('.no-results-message');

  function filterBoxes(searchTerm) {
      searchTerm = searchTerm.trim().toLowerCase();
      let foundMatch = false;
      boxes.forEach(function(box) {
          const boxText = box.textContent.toLowerCase();
          if (boxText.includes(searchTerm)) {
              box.style.display = 'block'; // Show the box
              foundMatch = true;
          } else {
              box.style.display = 'none'; // Hide the box
          }
      });

      // Display "No Matching Results" message if no matches found
      if (!foundMatch) {
          noResultsMessage.style.display = 'block';
      } else {
          noResultsMessage.style.display = 'none';
      }
  }

  // Event listener for the form submit
  searchForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
      filterBoxes(searchInput.value);
  });

  // Event listener for the input change
  // searchInput.addEventListener('input', function() {
  //   filterBoxes(searchInput.value);
  // });
});

// Scrolling Navbar Background - BLOG
document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementsByClassName('toggle-button')[0];
  const navbarLinks = document.getElementsByClassName('navbar-links-blog')[0];
  const navbar = document.querySelector('.navbar-blog');

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

// Scroll Function 
let prevScrollPos = window.pageYOffset;
window.addEventListener('scroll', function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector('.navbar-blog').classList.add('nav-show');
  } else {
    document.querySelector('.navbar-blog').classList.remove('nav-show');
  }
  prevScrollPos = currentScrollPos;
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.navbar-blog').classList.add('nav-show');
});


// Filter Blog 
document.addEventListener('DOMContentLoaded', () => {
  const filterDropdown = document.querySelector('.filter');
  const boxes = document.querySelectorAll('.box');

  filterDropdown.addEventListener('change', (e) => {
    const selectedCategory = e.target.value;
    boxes.forEach(box => {
      const category = box.getAttribute('data-category');
      if (selectedCategory === 'all' || category === selectedCategory) {
        box.style.display = 'block';
      } else {
        box.style.display = 'none';
      }
    });
  });
});
