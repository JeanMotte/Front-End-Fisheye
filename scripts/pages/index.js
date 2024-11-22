import Api from '../api/api_constructor.js'

const api = new Api('../../data/photographers.json')

async function fetchPhotographersData() {
  return await api.get()
}

async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section')

  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer)
    const userCardDOM = photographerModel.getUserCardDOM()
    photographersSection.appendChild(userCardDOM)
  })
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await fetchPhotographersData()
  displayData(photographers)
}

init()
