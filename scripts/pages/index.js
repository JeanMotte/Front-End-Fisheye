async function fetchPhotographersData() {
  try {
    const response = await fetch('../../data/photographers.json')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    console.log(data)

    return data
  } catch (error) {
    'Error fetching the JSON file:', error
  }
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
