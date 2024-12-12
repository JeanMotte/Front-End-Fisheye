export default class Header {
  constructor(photographer) {
    this.photographer = photographer
  }

  setHeader() {
    const headerSpace = document.querySelector('.photograph-header')

    const info = `
      <div class="photograph-header__info">
        <h1 class="name">${this.photographer.name}</h1>
        <div class="location-tagline-target">
          <p class="location">${this.photographer.city}, ${this.photographer.country}</p>
          <p class="tagline">${this.photographer.tagline}</p>
        </div>
      </div>
      <div>
        <button class="contact_button" onclick="displayModal()">
            Contactez-moi
        </button>
      </div>
      <div class="photograph-header__portrait" id="tags">
        <img src="/assets/photographers/${this.photographer.portrait}" alt="Photo de ${this.photographer.name}" class="" />
      </div>
    `

    headerSpace.innerHTML = info
  }

  setModalHeader() {
    const modalHeader = document.getElementById('modal-photographer-name')
    modalHeader.textContent = `
      ${this.photographer.name}
    `
  }
}
