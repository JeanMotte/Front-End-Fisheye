export default class MediaToDisplay {
  constructor(photographer, medias) {
    this.photographer = photographer

    this.medias = medias
  }

  setMediasType(media) {
    const mediaBasePath = `/assets/images/${this.photographer.name}/`

    if (media.image && typeof media.image === 'string')
      return `
        <img 
          class="media-indiv media-photo" 
          src="${mediaBasePath}${media.image}" 
          alt="${media.alt}">
      `
    if (media.video && typeof media.video === 'string')
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
    const mediaBasePath = `/assets/images/${this.photographer.name}/`
    const mediaContent = this.setMediasType(media)

    return `
      <article class="gallery_card">
        <a href="${mediaBasePath}${media.image || media.video}" data-media="${media.id}" aria-label="${media.title}, closeup view" role="link" class="card-link" tabindex="8">
        <figure>${mediaContent}</figure>
        </a>
        <figcaption>
          <div role="group" aria-label="Like button and number of likes" class="title-and-likes">
              <p class="media-title" tabindex="8">${media.title}</p>
              <div class="likes">
                <span class="likes-number" tabindex="8">${media.likes}</span>
                <button 
                  class="btn-like" 
                  type="button" 
                  aria-label="Like" 
                  data-id="${media.id}"
                  tabindex="8">
                  <span class="fas fa-heart" aria-hidden="true"></span>
                </button>
              </div>
            </div>
          </figcaption>
      </article>
    `
  }

  setFullGalery() {
    return this.medias
      .filter((media) => media.image || media.video)
      .map((media) => this.setGalleryCard(media))
      .join('')
  }

  setFullGalery2(mediaList) {
    return mediaList
      .filter((media) => media.image || media.video)
      .map((media) => this.setGalleryCard(media))
      .join('')
  }

  sortGallery(filter) {
    switch (filter) {
      case 'popularite':
        this.medias.sort((a, b) => b.likes - a.likes)

        break
      case 'date':
        this.medias.sort((a, b) => new Date(b.date) - new Date(a.date))

        break
      case 'titre':
        this.medias.sort((a, b) => a.title.localeCompare(b.title))

        break

      default:
        this.medias.sort((a, b) => b.likes - a.likes)
    }

    return this.medias
  }

  insertGallery(mediaList) {
    if (mediaList) {
      const profilePageContent = document.querySelector('.medias')
      const content = `
      <section class="gallery">
        ${this.setFullGalery2(mediaList)}
      </section>
    `

      profilePageContent.innerHTML = content

      return content
    } else {
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
}
