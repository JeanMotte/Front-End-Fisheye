export default class MediaToDisplay {
  constructor(photographer, medias) {
    this.photographer = photographer

    this.medias = medias
  }

  setMediasType(media) {
    const mediaBasePath = `/assets/images/${this.photographer.name}/`

    if (media.image)
      return `
        <img 
          class="media-indiv media-photo" 
          src="${mediaBasePath}${media.image}" 
          alt="${media.alt}">
      `
    if (media.video)
      return `
        <video 
          class="media-indiv media-video" 
          aria-label="${media.alt}">
          <source 
            src="${mediaBasePath}${media.video}" 
            type="video/mp4">
        </video>
      `

    return 'no media'
  }

  setGalleryCard(media) {
    const mediaContent = this.setMediasType(media)

    return `
      <article class="gallery_card">
        <a href="#" data-media="${media.id}" role="link" aria-label="View media large" class="card-link">
        <figure>${mediaContent}</figure>
        </a>
        <figcaption>
          <div role="group" aria-label="Like button and number of likes" class="title-and-likes">
              <p class="media-title">${media.title}</p>
              <div class="likes">
                <span class="likes-number">${media.likes}</span>
                <button 
                  class="btn-like" 
                  type="button" 
                  aria-label="Like" 
                  data-id="${media.id}">
                  <span class="fas fa-heart" aria-hidden="true"></span>
                </button>
              </div>
            </div>
          </figcaption>
      </article>
    `
  }

  setFullGalery() {
    return this.medias.map((media) => this.setGalleryCard(media)).join('')
  }

  insertGallery() {
    const profilePageContent = document.querySelector('.medias')
    const content = `
      <section class="gallery">
        ${this.setFullGalery()}
      </section>
    `

    profilePageContent.innerHTML = content

    return content
  }
}
