import Api from '../api/api_constructor.js'
import Header from '../templates/header.js'
import MediaToDisplay from '../templates/mediaToDisplay.js'
import { displayLikes, tjmTag } from '../utils/likes.js'

const api = new Api('../../data/photographers.json')
const photographerId = new URLSearchParams(window.location.search).get('id')

export async function init() {
  const { photographers, media } = await api.get()
  const photographerData = photographers.find(
    (photographer) => photographer.id === parseInt(photographerId)
  )
  const photographerMedias = media.filter(
    (media) => media.photographerId === parseInt(photographerId)
  )

  displayHeader(photographerData)

  const mediaToDisplay = new MediaToDisplay(
    photographerData,
    photographerMedias
  )
  mediaToDisplay.insertGallery()

  displayLikes(photographerMedias)

  tjmTag(photographerData, photographerMedias)

  return { photographerData, photographerMedias }
}

function displayHeader(data) {
  const headerTemplate = new Header(data)
  headerTemplate.setHeader()

  headerTemplate.setModalHeader()
}

init()
