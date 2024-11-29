export default class Media {
  constructor(data) {
    this.id = data.id

    this.photographerId = data.photographerId

    this.title = data.title

    this.likes = data.likes

    this.date = data.date

    this.price = data.price

    this.alt = data.alt
  }

  setMedias() {
    const mediaContainer = document.querySelector('.medias')
    const mediaTemplate = document.createElement('article')
    mediaTemplate.classList.add('media__item')

    mediaTemplate.innerHTML = `
      <img src="assets/img/${this.photographerId}/${this.title}" alt="${this.alt}" class="media__img" />
      <div class="media__content">
        <h2 class="media__title">${this.title}</h2>
        <div class="media__likes">
          <span class="media__likes-count">${this.likes}</span>
          <button class="media__likes-button" aria-label="likes">
            <i class="fas fa-heart"></i>
          </button>
        </div>
      </div>
    `

    mediaContainer.appendChild(mediaTemplate)
  }
}
