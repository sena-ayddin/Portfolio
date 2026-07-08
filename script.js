// smooth scroll ----------------------------------------------------------------------------
// navdaki linke tıklayınvca sayfa o bölüme kaysın

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // normal atlama davranışını engelle
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' }); // yumuşakça kaysın
    }
  });
});

// contact form --------------------------------------------------------------------------------
// mesajı gönderince sayfayı yenilemeden teşekkür mesajı

const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // sayfanın yenilenmesini engelle

  // form alanlarını al
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // alanlar doluysa teşekkür mesajı göster
  if (name && email && message) {
    form.innerHTML = `
      <div class="thanks-message">
        <h3>Thank you, ${name}!</h3>
        <p>Your message has been received. I'll get back to you soon.</p>
      </div>
    `;
  }
});

// scroll animasyonu -------------------------------------------------------------------------------------

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // visible class ekle
    }
  });
}, { threshold: 0.1 }); // %10 görününce tetikle

// tüm section'ları gözlemle
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});