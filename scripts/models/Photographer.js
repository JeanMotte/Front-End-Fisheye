export default class Photographer {
  constructor(id, name, city, country, tags, tagline, price, portrait) {
    this.id = id

    this.name = name

    this.city = city

    this.country = country

    this.tagline = tagline

    this.price = price

    this.portrait = portrait
  }

  getFullName() {
    return `${this.name}`
  }

  getTagline() {
    return this.tagline
  }

  getPrice() {
    return this.price
  }

  getPortrait() {
    return this.portrait
  }
}
