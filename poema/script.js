function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  document.getElementById('scrollToTopButton').addEventListener('click', scrollToTop);
  document.querySelectorAll('ul a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Impede o comportamento padrão do link
      const targetId = link.getAttribute('href').substring(1); // Remove o símbolo '#' do href
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
