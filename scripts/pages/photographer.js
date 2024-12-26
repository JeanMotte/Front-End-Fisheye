import Header from '../templates/header.js'
import MediaToDisplay from '../templates/mediaToDisplay.js'
import { displayLikes, tjmTag } from '../utils/likes.js'
import { getMediaData } from '../services/data_service.js'
import { Lightbox } from '../models/Lightbox.js'

const photographerId = new URLSearchParams(window.location.search).get('id')

window.setPhotographerData = (data) => {
  window.photographerData = data
}

export async function init() {
  const { photographers, media } = await getMediaData()

  const photographerData = photographers.find(
    (photographer) => photographer.id === parseInt(photographerId)
  )

  window.setPhotographerData(photographerData)

  const photographerMedias = media.filter(
    (media) => media.photographerId === parseInt(photographerId)
  )
  displayHeader(photographerData)

  const mediaToDisplay = new MediaToDisplay(
    photographerData,
    photographerMedias
  )

  // set default filter to popularite
  mediaToDisplay.sortGallery()

  mediaToDisplay.insertGallery()

  window.setMediaToDisplay(mediaToDisplay)

  displayLikes(photographerMedias)

  tjmTag(photographerData, photographerMedias)

  Lightbox.init(photographerMedias, photographerData)

  return { photographerData, photographerMedias }
}

function displayHeader(data) {
  const headerTemplate = new Header(data)
  headerTemplate.setHeader()

  headerTemplate.setModalHeader()
}

init()
