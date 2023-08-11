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


  // Carousel 
  const buttons = document.querySelectorAll("[data-carousel-button]")
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1
      const slides = button.closest("[data-carousel]").querySelector("[data-slides")

      const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset
      if (newIndex < 0) newIndex = slides.children.length -1
      if (newIndex >= slides.children.length) newIndex = 0
      
      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
    })
  });