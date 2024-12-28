export async function displayLikes(photographerMedias, photographerData) {
  const likesBtns = document.querySelectorAll('.btn-like')

  likesBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const mediaId = parseInt(btn.dataset.id, 10)

      const media = photographerMedias.find((media) => media.id === mediaId) // Find corresponding media object

      if (media) {
        const likesElement = btn.previousElementSibling
        const isLiked = btn.classList.contains('liked')

        if (isLiked) {
          media.likes--

          btn.classList.remove('liked')
        } else {
          media.likes++

          btn.classList.add('liked')
        }

        // Update the likes count in the DOM
        likesElement.textContent = media.likes

        // Update the total likes in the DOM
        tjmTag(photographerData, photographerMedias)
      } else {
        console.error(`Media with ID ${mediaId} not found.`)
      }
    })
  })
}

export async function tjmTag(photographerData, photographerMedias) {
  // display photographer initial total likes
  const totalLikes = photographerMedias.reduce(
    (acc, media) => acc + media.likes,
    0
  )

  // update photographer total likes in DOM
  const totalLikesElement = document.querySelector('.total-like-number')
  totalLikesElement
    ? (totalLikesElement.textContent = totalLikes)
    : (document.querySelector('.tjm-tag').innerHTML = `
      <div class="tjm-wrapper" tabindex="6">
        <div class="tjm-tags"><span class="total-like-number">${totalLikes}</span><span class="fas fa-heart" aria-hidden="true"></span></div>
        <div class="tjm-tags tjm-price"><span>${photographerData.price}€ / jour</span></div>
      </div>
    `)
}
