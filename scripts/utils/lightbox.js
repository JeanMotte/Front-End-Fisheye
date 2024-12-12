const closeBtn = document.querySelector('.lightbox__close')
const lightbox = document.querySelector('.lightbox')

if (closeBtn && lightbox) {
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none'
  })
}
