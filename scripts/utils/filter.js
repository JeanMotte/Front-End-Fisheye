import { Lightbox } from '../models/Lightbox.js'
import { displayLikes } from './likes.js'

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.getElementById('sort-select')

  // Initialize Choices.js
  new Choices(selectElement, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
  })

  let mediaToDisplay

  // Set mediaToDisplay instance
  window.setMediaToDisplay = (instance) => {
    mediaToDisplay = instance
  }

  selectElement.addEventListener('change', () => {
    const selectedValue = selectElement.value

    // Update media display
    if (mediaToDisplay) {
      const sortedMedia = mediaToDisplay.sortGallery(selectedValue)
      mediaToDisplay.insertGallery(sortedMedia)

      displayLikes(sortedMedia)

      const photographerData = window.photographerData
      Lightbox.init(sortedMedia, photographerData)
    }
  })
})
