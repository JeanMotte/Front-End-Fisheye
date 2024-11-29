//Mettre le code JavaScript lié à la page photographer.html

import Api from '../api/api_constructor.js'
import Header from '../templates/header.js'
import Media from '../models/Media.js'
import MediaToDisplay from '../templates/mediaToDisplay.js'

const api = new Api('../../data/photographers.json')
const photographerId = new URLSearchParams(window.location.search).get('id')

// TODO: put the displayHeader and displayMedia inside array and do Promise.all

async function init() {
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

  console.log(photographerData, photographerMedias)

  return { photographerData, photographerMedias }
}

function displayHeader(data) {
  const headerTemplate = new Header(data)
  headerTemplate.setHeader()
}

init()
