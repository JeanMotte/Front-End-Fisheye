import { Lightbox } from '../models/Lightbox.js'
import { displayLikes } from './likes.js'

document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.custom-dropdown')
  const selectedItem = dropdown.querySelector('.selected-item')
  const options = dropdown.querySelectorAll('.dropdown-option')
  const chevronIcon = selectedItem.querySelector('i')

  let mediaToDisplay

  // Set mediaToDisplay instance
  window.setMediaToDisplay = (instance) => {
    mediaToDisplay = instance
  }

  // Toggle dropdown visibility
  selectedItem.querySelector('button').addEventListener('click', () => {
    const isExpanded = options[0].hasAttribute('hidden')

    options.forEach((option) => option.toggleAttribute('hidden', !isExpanded))

    // Update chevron icon
    chevronIcon.classList.toggle('fa-chevron-down', !isExpanded)

    chevronIcon.classList.toggle('fa-chevron-up', isExpanded)

    selectedItem.style.borderRadius = isExpanded ? '5px 5px 0 0' : '5px'
  })

  // Handle option selection
  options.forEach((option) => {
    option.querySelector('button').addEventListener('click', () => {
      const newValue = option.getAttribute('data-value')
      const newText = option.querySelector('button').textContent

      // Move the current selected item to the options
      const oldValue = selectedItem.getAttribute('data-value')
      const oldText = selectedItem.querySelector(
        'button > span:first-child'
      ).textContent

      option.setAttribute('data-value', oldValue)

      option.querySelector('button').textContent = oldText

      // Update the selected item
      selectedItem.setAttribute('data-value', newValue)

      selectedItem.querySelector('button > span:first-child').textContent =
        newText

      // Hide dropdown and reset chevron
      options.forEach((opt) => opt.setAttribute('hidden', true))

      chevronIcon.classList.remove('fa-chevron-up')

      chevronIcon.classList.add('fa-chevron-down')

      selectedItem.style.borderRadius = '5px'

      // Update media display
      if (mediaToDisplay) {
        const sortedMedia = mediaToDisplay.sortGallery(newValue)
        mediaToDisplay.insertGallery(sortedMedia)

        displayLikes(sortedMedia)

        const photographerData = window.photographerData
        Lightbox.init(sortedMedia, photographerData)
      }
    })
  })

  // Close dropdown if clicked outside
  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
      options.forEach((option) => option.setAttribute('hidden', true))

      chevronIcon.classList.remove('fa-chevron-up')

      chevronIcon.classList.add('fa-chevron-down')

      selectedItem.style.borderRadius = '5px'
    }
  })
})
