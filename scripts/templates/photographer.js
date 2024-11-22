function photographerTemplate(data) {
  const { name, city, country, tagline, price, portrait } = data

  const picture = `assets/photographers/${portrait}`

  function getUserCardDOM() {
    const article = document.createElement('article')
    const img = document.createElement('img')
    img.setAttribute('src', picture)

    const h2 = document.createElement('h2')
    h2.textContent = name

    const location = document.createElement('p')
    location.textContent = `${city}, ${country}`

    location.classList.add('location')

    const taglineDOM = document.createElement('p')
    taglineDOM.textContent = tagline

    taglineDOM.classList.add('tagline')

    const priceDOM = document.createElement('p')
    priceDOM.textContent = `${price}€/jour`

    priceDOM.classList.add('price')

    article.appendChild(img)

    article.appendChild(h2)

    article.appendChild(location)

    article.appendChild(taglineDOM)

    article.appendChild(priceDOM)

    return article
  }

  return { name, picture, getUserCardDOM }
}
