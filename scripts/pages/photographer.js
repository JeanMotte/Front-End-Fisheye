//Mettre le code JavaScript lié à la page photographer.html

import Api from '../api/api_constructor.js'
import Header from '../templates/header.js'

const api = new Api('../../data/photographers.json')
const photographerId = new URLSearchParams(window.location.search).get('id')

async function init() {
  const { photographers, media } = await api.get()
  const photographerData = photographers.find(
    (photographer) => photographer.id === parseInt(photographerId)
  )
  const photographerMedias = media.filter(
    (media) => media.photographerId === parseInt(photographerId)
  )
  console.log(photographerData, photographerMedias)

  // return { photographerData, photographerMedias }
  const headerTemplate = new Header(photographerData)
  headerTemplate.setHeader()
}

init()

// custom select

const customSelect = document.querySelector('.custom-select')
