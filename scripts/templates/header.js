export default class Header {
  constructor(photographer) {
    this.photographer = photographer
  }

  setHeader() {
    const headerSpace = document.querySelector('.photograph-header')

    const info = `
      <div class="photograph-header__info">
        <h1 class="name" tabindex="2" id="${this.photographer.name}">${this.photographer.name}</h1>
        <div class="location-tagline-target" tabindex="3">
          <p class="location">${this.photographer.city}, ${this.photographer.country}</p>
          <p class="tagline">${this.photographer.tagline}</p>
        </div>
      </div>
      <div>
        <button class="contact_button" onclick="displayModal()" tabindex="4">
            Contactez-moi
        </button>
      </div>
      <div class="photograph-header__portrait" id="tags">
        <img src="./assets/photographers/${this.photographer.portrait}" alt="" tabindex="5" />
      </div>
    `

    headerSpace.innerHTML = info
  }

  setModalHeader() {
    const modalHeader = document.getElementById('modal-photographer-name')
    modalHeader.textContent = `
      ${this.photographer.name}
    `

    const modal = document.querySelector('dialog.modal')
    modal.setAttribute('aria-label', `Contact me, ${this.photographer.name}`)
  }
}
