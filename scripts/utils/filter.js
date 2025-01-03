import { Lightbox } from '../models/Lightbox.js'
import { displayLikes } from './likes.js'

document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.custom-dropdown')
  const selectedItem = dropdown.querySelector('.selected-item')
  const selectedButton = selectedItem.querySelector('button.selected-filter')
  const options = dropdown.querySelectorAll('.dropdown-option')
  const chevronIcon = selectedItem.querySelector('i')

  let mediaToDisplay

  // Set mediaToDisplay instance
  window.setMediaToDisplay = (instance) => {
    mediaToDisplay = instance
  }

  // Update border-radius of the selected item based on dropdown state
  const updateBorderRadius = (isExpanded) => {
    selectedItem.style.borderRadius = isExpanded ? '5px' : '5px 5px 0 0'
  }

  // Function to toggle dropdown visibility and update styles
  const toggleDropdown = () => {
    const isExpanded = options[0].hasAttribute('hidden')
    options.forEach((option) => option.toggleAttribute('hidden', !isExpanded))

    // Update chevron icon
    chevronIcon.classList.toggle('fa-chevron-down', !isExpanded)

    chevronIcon.classList.toggle('fa-chevron-up', isExpanded)

    // Update border-radius and aria-expanded
    updateBorderRadius(!isExpanded)

    selectedButton.setAttribute('aria-expanded', isExpanded)
  }

  // Event listener for the selected item button
  selectedButton.addEventListener('click', toggleDropdown)

  // Handle option selection
  options.forEach((option) => {
    option.querySelector('button').addEventListener('click', () => {
      const newValue = option.getAttribute('data-value')
      const newText = option.querySelector('span').textContent

      // Move the current selected item to the options
      const oldValue = selectedItem.getAttribute('data-value')
      const oldText = selectedItem.querySelector('span:first-child').textContent

      option.setAttribute('data-value', oldValue)

      option.querySelector('span').textContent = oldText

      // Update the selected item
      selectedItem.setAttribute('data-value', newValue)

      // Set the aria label to button according to selected filter
      selectedItem
        .querySelector('button:first-child')
        .setAttribute('aria-label', `Order by ${newText}`)

      selectedItem.querySelector('span:first-child').textContent = newText

      // Hide dropdown and reset styles
      options.forEach((opt) => opt.setAttribute('hidden', true))

      chevronIcon.classList.remove('fa-chevron-up')

      chevronIcon.classList.add('fa-chevron-down')

      updateBorderRadius(true)

      // Update aria-expanded
      selectedButton.setAttribute('aria-expanded', false)

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

      updateBorderRadius(true)

      selectedButton.setAttribute('aria-expanded', false)
    }
  })
})
