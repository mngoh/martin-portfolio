document.addEventListener("DOMContentLoaded", function() {

  // ── Smooth Scroll ──────────────────────────────────────────
  function smoothScroll(targetOffset, scrollDuration) {
    const start = window.pageYOffset;
    const startTime = performance.now();
    function scroll() {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / scrollDuration, 1);
      const ease = progress < 0.5 ? 4 * progress ** 3 : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;
      window.scrollTo(0, start + (targetOffset - start) * ease);
      if (progress < 1) requestAnimationFrame(scroll);
    }
    requestAnimationFrame(scroll);
  }

  const aboutSection = document.getElementById("about");
  const projectSection = document.getElementById("projects");

  document.querySelector(".button-link")?.addEventListener("click", e => {
    e.preventDefault();
    smoothScroll(aboutSection.offsetTop, 2000);
  });
  document.querySelector(".button-hire")?.addEventListener("click", e => {
    e.preventDefault();
    smoothScroll(projectSection.offsetTop, 2000);
  });

  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) smoothScroll(target.offsetTop, 2000);
    });
  });

  // ── Navbar Toggle ──────────────────────────────────────────
  const toggleButton = document.querySelector('.toggle-button');
  const navbarLinks = document.querySelector('.navbar-links');
  const navbar = document.querySelector('.navbar');

  toggleButton?.addEventListener('click', e => {
    e.preventDefault();
    navbarLinks.classList.toggle('active');
    toggleButton.classList.toggle('open');
    navbar.classList.toggle('nav-open');
  });

  navbarLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navbarLinks.classList.remove('active');
      toggleButton.classList.remove('open');
      navbar.classList.remove('nav-open');
    });
  });

  // ── Scroll Appear ──────────────────────────────────────────
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  });
  ['.profile', '.about', '.projects', '.box'].forEach(sel => {
    document.querySelectorAll(sel).forEach(el => observer.observe(el));
  });

  // ── Typewriter ─────────────────────────────────────────────
  const words = ["AI", "Data Science", "Machine Learning"];
  const el = document.getElementById("typewriter");
  let wordIndex = 0, charIndex = 0, deleting = false;

  function type() {
    const current = words[wordIndex];
    if (deleting) {
      el.textContent = current.substring(0, --charIndex);
    } else {
      el.textContent = current.substring(0, ++charIndex);
    }

    let delay = deleting ? 60 : 100;
    if (!deleting && charIndex === current.length) {
      delay = 1800;
      deleting = true;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 400;
    }
    setTimeout(type, delay);
  }
  type();

  // ── Card Tilt ──────────────────────────────────────────────
  document.querySelectorAll('.box').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotateX = ((y - cy) / cy) * -2.5;
      const rotateY = ((x - cx) / cx) * 2.5;
      const shadowX = ((x - cx) / cx) * 15;
      const shadowY = ((y - cy) / cy) * 15;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      card.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(0,0,0,0.7)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
      card.style.boxShadow = '0 4px 15px rgba(0,0,0,0.5)';
    });
  });

  // ── Particles ──────────────────────────────────────────────
  const canvas = document.getElementById("particle-canvas");
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const PARTICLE_COUNT = 60;
  const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5,
    dx: (Math.random() - 0.5) * 0.4,
    dy: (Math.random() - 0.5) * 0.4,
    alpha: Math.random() * 0.4 + 0.1,
  }));

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
      ctx.fill();
    });

    // Draw connecting lines between close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(255,255,255,${0.08 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(drawParticles);
  }
  drawParticles();
});
