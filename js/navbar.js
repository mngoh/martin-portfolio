document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementsByClassName('toggle-button')[0];
  const navbarLinks = document.getElementsByClassName('navbar-links')[0];

  toggleButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    navbarLinks.classList.toggle('active');
  });

  const links = navbarLinks.getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
      navbarLinks.classList.remove('active');
    });
  }
});
