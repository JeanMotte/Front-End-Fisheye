import Api from '../api/api_constructor.js'
import Photographer from '../models/Photographer.js'

const api = new Api('../../data/photographers.json')

async function fetchPhotographersData() {
  return await api.get()
}

async function init() {
  const { photographers } = await fetchPhotographersData()
  displayData(photographers)
}

async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section')

  // Instantiate a Photographer object for each photographer
  photographers.forEach((photographerData) => {
    const photographer = new Photographer(
      photographerData.id,
      photographerData.name,
      photographerData.city,
      photographerData.country,
      photographerData.tagline,
      photographerData.price,
      photographerData.portrait
    )

    // Use photographer getter to generate card
    const userCardDOM = photographer.getUserCardDOM()
    photographersSection.appendChild(userCardDOM)
  })
}

init()
