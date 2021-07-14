// Scroll Header 

window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  header.classList.add('active', window.scrollY > 0);

  if (header.classList.contains('false')) {
    header.classList.remove('active');
    header.classList.remove('false');
  }
});

// Overlay Modal

const modal = document.querySelectorAll('.modalRS');
const block = document.querySelectorAll('.search-box__block');
const overlay = document.querySelector('.overlay-modal');

block.forEach(item => {
  item.addEventListener('click', function () {
    overlay.classList.add('active');

    const id = item.getAttribute('attr-modal');
    const currentModal = document.querySelector(id);

    currentModal.classList.add('active');

    // // Close Modal through Overlay-Modal
    overlay.addEventListener('click', function () {
      currentModal.classList.remove('active');
      overlay.classList.remove('active');
    })
  })
})