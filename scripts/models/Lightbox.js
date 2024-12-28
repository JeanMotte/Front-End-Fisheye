export class Lightbox {
  constructor(url, title, currentIndex, mediaList, photographerData) {
    this.element = this.buildDom(url, title)

    this.currentIndex = currentIndex

    this.mediaList = mediaList

    this.photographerData = photographerData

    document.body.appendChild(this.element)

    this.addEventListeners()
  }

  addEventListeners() {
    this.element
      .querySelector('.lightbox__close')
      .addEventListener('click', () => this.close())

    this.element
      .querySelector('.lightbox__previous')
      .addEventListener('click', () => this.showPrevious())

    this.element
      .querySelector('.lightbox__next')
      .addEventListener('click', () => this.showNext())
  }

  updateMedia() {
    const currentMedia = this.mediaList[this.currentIndex]
    const mediaContainer = this.element.querySelector('.lightbox__container')

    const photographerName = this.photographerData.name.replace(/\s+/g, '%20')
    const mediaUrl = currentMedia.image
      ? `assets/images/${photographerName}/${currentMedia.image}`
      : `assets/images/${photographerName}/${currentMedia.video}`

    if (currentMedia.image) {
      mediaContainer.innerHTML = `
        <img class="lightbox__image" src="${mediaUrl}" alt="Image of ${currentMedia.title}" />
        <figcaption class="lightbox__caption">${currentMedia.title || 'No title available'}</figcaption>
      `
    } else if (currentMedia.video) {
      mediaContainer.innerHTML = `
        <video class="lightbox__image" controls>
          <source src="${mediaUrl}" type="video/mp4" />
        </video>
        <figcaption class="lightbox__caption">${currentMedia.title || 'No title available'}</figcaption>
      `
    }
  }

  showPrevious() {
    this.currentIndex =
      (this.currentIndex - 1 + this.mediaList.length) % this.mediaList.length

    this.updateMedia()
  }

  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.mediaList.length

    this.updateMedia()
  }

  close() {
    this.element.remove()
  }

  buildDom(url, title) {
    const dom = document.createElement('dialog')
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

  static init(mediaList, photographerData) {
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

            new Lightbox(
              link.href,
              media?.title || 'No title available',
              mediaList.indexOf(media),
              mediaList,
              photographerData
            )
          })
        }
      })
  }
}
