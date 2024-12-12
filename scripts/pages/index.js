import Photographer from '../models/Photographer.js'
import { getPhotographerData } from '../services/data_service.js'

async function init() {
  const photographers = await getPhotographerData()

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
