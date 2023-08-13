document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav ul li a, .profile-text button");
  const learnMoreButton = document.querySelector(".button-link");
  const aboutButton = document.querySelector(".button-about"); 
  const projectButton = document.querySelector(".button-project");
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
});

// About Section 
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}