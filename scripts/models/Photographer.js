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
    const picture = `assets/photographers/${this.portrait}`
    const article = document.createElement('article')
    const link = document.createElement('a')
    link.href = `./photographer.html?id=${this.id}`

    const imgWrapper = document.createElement('div')
    imgWrapper.classList.add('img-wrapper')

    const img = document.createElement('img')
    img.setAttribute('src', picture)

    img.setAttribute('alt', `Photo de ${this.name}`)

    const h2 = document.createElement('h2')
    h2.textContent = this.name

    const location = document.createElement('p')
    location.textContent = `${this.city}, ${this.country}`

    location.classList.add('location')

    const taglineDOM = document.createElement('p')
    taglineDOM.textContent = this.tagline

    taglineDOM.classList.add('tagline')

    const priceDOM = document.createElement('p')
    priceDOM.textContent = `${this.price}€/jour`

    priceDOM.classList.add('price')

    // Append all elements to the link
    link.appendChild(imgWrapper)

    imgWrapper.appendChild(img)

    link.appendChild(h2)

    link.appendChild(location)

    link.appendChild(taglineDOM)

    link.appendChild(priceDOM)

    // Append the link to the article
    article.appendChild(link)

    return article
  }
}
