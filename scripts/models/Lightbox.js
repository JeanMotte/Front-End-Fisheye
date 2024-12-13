export class Lightbox {
  constructor(url) {
    this.element = this.buildDom(url)

    document.body.appendChild(this.element)

    this.addEventListeners()
  }

  addEventListeners() {
    this.element
      .querySelector('.lightbox__close')
      .addEventListener('click', () => this.close())
  }

  close() {
    this.element.remove()
  }

  buildDom(url) {
    const dom = document.createElement('div')
    dom.classList.add('lightbox')

    dom.innerHTML = `
      <button class="lightbox__close" aria-label="Close lightbox">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <button class="lightbox__previous" aria-label="Previous image">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button class="lightbox__next" aria-label="Next image">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
      <div class="lightbox__container">
        <img class="lightbox__image" src="${url}" alt="Lightbox media preview" />
        <div class="lightbox__caption">${url}</div>
      </div>
    `

    return dom
  }

  static init() {
    const links = document
      .querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]')
      .forEach((link) => {
        link.addEventListener('click', (event) => {
          event.preventDefault()

          new Lightbox(link.href)
        })
      })
  }
}

Lightbox.init()
