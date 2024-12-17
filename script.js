const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const phoneNumber = "5511984672641";
        const message = "Gostaria de agendar uma consultoria!";
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    });
});

const WhatsApp = document.querySelectorAll('.WhatsApp');
WhatsApp.forEach(WhatsApp => {
    WhatsApp.addEventListener('click', function() {
        const phoneNumber = "5511984672641";
        const message = "Gostaria de agendar uma consultoria!";
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const animação = document.querySelectorAll(".animate-on-scroll");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    });
  
    elements.forEach(animação => observer.observe(animação));
  });
  
  const backToTopButton = document.getElementById('backToTop');

  window.onscroll = function () {
    if (window.scrollY > 200) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  