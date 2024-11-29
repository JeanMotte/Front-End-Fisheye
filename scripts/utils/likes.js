import { init } from '../pages/photographer.js'

export async function displayLikes() {
  const medias = await init()
  const likesBtn = document.querySelectorAll('.btn-like')
  const likesNumber = document.querySelectorAll('.likes-number')

  const updateLikes = () => {
    const totalLikes = medias.reduce((acc, media) => acc + media.likes, 0)
    likesNumber.forEach((like) => (like.textContent = totalLikes))
  }

  likesBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const media = medias.find((media) => media.id === btn.dataset.id)

      if (media) {
        media.likes++

        const likesElement = btn.previousElementSibling // Find the likes display element
        likesElement.textContent = `${media.likes}` // Update likes display

        updateLikes()
      }
    })
  })
}
