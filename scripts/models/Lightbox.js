export class Lightbox {
  constructor(url, title) {
    this.element = this.buildDom(url, title)

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

  buildDom(url, title) {
    const dom = document.createElement('div')
    dom.classList.add('lightbox')

    console.log(url)

    if (url.endsWith('.jpg')) {
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
        <img class="lightbox__image" src="${url}" alt="Image of ${title}" />
        <figcaption class="lightbox__caption">${title || 'No title available'}</figcaption>
      </div>
    `
    } else if (url.endsWith('.mp4')) {
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
        <video class="lightbox__image" controls alt="video of ${title}">
          <source src="${url}" type="video/mp4" />
        <figcaption class="lightbox__caption">${title || 'No title available'}</figcaption>
      </div>
    `
    }

    return dom
  }

  static init(mediaList) {
    document
      .querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]')
      .forEach((link) => {
        const href = link.href
        if (!href) return

        const media = mediaList.find((m) =>
          m.image ? link.href.includes(m.image) : link.href.includes(m.video)
        )

        if (media) {
          link.addEventListener('click', (event) => {
            event.preventDefault()

            new Lightbox(link.href, media?.title || 'No title available')
          })
        }
      })
  }
}

Lightbox.init()
