async function getData() {
  return fetch('../../data/photographers.json')
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error))
}

export async function getPhotographerData() {
  const { photographers } = await getData()

  return photographers
}

export async function getMediaData() {
  return await getData()
}
