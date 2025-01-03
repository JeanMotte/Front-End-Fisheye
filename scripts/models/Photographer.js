export default class Photographer {
  constructor(id, name, city, country, tagline, price, portrait) {
    this.id = id

    this.name = name

    this.city = city

    this.country = country

    this.tagline = tagline

    this.price = price

    this.portrait = portrait
  }

  getUserCardDOM() {
    const picture = `./assets/photographers/${this.portrait}`

    // Define the HTML as a string
    const html = `
      <article>
        <a href="./photographer.html?id=${this.id}" role="link" aria-label="${this.name}" tabindex="3">
          <div class="img-wrapper">
            <img src="${picture}">
          </div>
          <h2>${this.name}</h2>
        </a>
          <div tabindex="3">
            <p class="location">${this.city}, ${this.country}</p>
            <p class="tagline">${this.tagline}</p>
            <p class="price">${this.price}€/jour</p>
          </div>
      </article>
    `

    // Create a container element
    const container = document.createElement('div')
    container.innerHTML = html

    // Return the first child element (the article)
    return container.firstElementChild
  }
}
