document.getElementById('learnMoreBtn').addEventListener('click', function() {
  window.scrollTo({
      top: document.getElementById('about').offsetTop,
      behavior: 'smooth'
  });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  this.reset();
});