//Mettre le code JavaScript lié à la page photographer.html

import Api from '../api/api_constructor.js'
import Header from '../templates/header.js'

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

  // displayMedia(photographerData, photographerMedias)

  console.log(photographerData, photographerMedias)

  return { photographerData, photographerMedias }
}

function displayHeader(data) {
  const headerTemplate = new Header(data)
  headerTemplate.setHeader()
}

// function displayMedia(data, media) {
//   const mediaTemplate = new Media(data, media)
//   mediaTemplate.setMedias()
// }

init()
