
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector(`.burger`).addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('nav-active');
        document.querySelector(`.burger`).classList.toggle('active');
        document.querySelectorAll('.nav-links li').forEach((link, index) => {
          if (link.style.animation) {
            link.style.animation = '';
          } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
          }
        });
    
        
      });
    });