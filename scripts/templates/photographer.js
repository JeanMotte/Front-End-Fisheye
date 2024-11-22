function photographerTemplate(data) {
  const { name, city, country, tagline, price, portrait, id } = data

  const picture = `assets/photographers/${portrait}`

  function getUserCardDOM() {
    const article = document.createElement('article')
    const img = document.createElement('img')
    img.setAttribute('src', picture)

    img.setAttribute('alt', `Photo de ${name}`)

    const link = document.createElement('a')
    link.href = `./photographer.html?id=${id}`

    article.appendChild(link)

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

    // Append all elements to the link
    link.appendChild(img)

    link.appendChild(h2)

    link.appendChild(location)

    link.appendChild(taglineDOM)

    link.appendChild(priceDOM)

    // Append the link to the article
    article.appendChild(link)

    return article
  }

  return { name, picture, getUserCardDOM }
}
