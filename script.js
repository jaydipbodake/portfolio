AOS.init();
    const toggle = document.getElementById('darkModeToggle');
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
    });

    const typingSpan = document.getElementById("typing");
    const roles = ["Jaydip", "Frontend Developer", "Tech Enthusiast"];
    let wordIndex = 0, charIndex = 0, deleting = false;
    function type() {
      const word = roles[wordIndex];
      typingSpan.textContent = deleting ? word.substring(0, charIndex--) : word.substring(0, charIndex++);
      if (!deleting && charIndex === word.length + 1) deleting = true;
      if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % roles.length;
      }
      setTimeout(type, 150);
    }
    type();