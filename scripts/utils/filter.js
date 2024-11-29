document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.custom-dropdown')
  const selectedItem = dropdown.querySelector('.selected-item')
  const dropdownList = dropdown.querySelector('.dropdown-list')
  const chevronIcon = selectedItem.querySelector('i')

  // Handle click on the selected item to toggle dropdown visibility
  selectedItem.addEventListener('click', () => {
    const isHidden = dropdownList.hasAttribute('hidden')
    dropdownList.toggleAttribute('hidden', !isHidden)

    // Toggle chevron icon
    chevronIcon.classList.toggle('fa-chevron-down', !isHidden)

    chevronIcon.classList.toggle('fa-chevron-up', isHidden)

    // Adjust border-radius based on dropdown state
    if (isHidden) {
      selectedItem.style.borderBottomLeftRadius = '0'

      selectedItem.style.borderBottomRightRadius = '0'
    } else {
      selectedItem.style.borderBottomLeftRadius = '5px'

      selectedItem.style.borderBottomRightRadius = '5px'
    }
  })

  // Handle selection from the dropdown list
  dropdownList.addEventListener('click', (event) => {
    const target = event.target
    if (target.tagName.toLowerCase() === 'li') {
      // Update the selected item
      const newValue = target.getAttribute('data-value')
      const newText = target.textContent

      // Swap selected item with clicked item in the dropdown list
      target.setAttribute('data-value', selectedItem.getAttribute('data-value'))

      target.textContent = selectedItem.textContent

      selectedItem.setAttribute('data-value', newValue)

      selectedItem.childNodes[0].textContent = newText

      // Hide the dropdown list and reset chevron
      dropdownList.setAttribute('hidden', true)

      chevronIcon.classList.remove('fa-chevron-up')

      chevronIcon.classList.add('fa-chevron-down')

      // Restore border-radius when dropdown closes
      selectedItem.style.borderBottomLeftRadius = '5px'

      selectedItem.style.borderBottomRightRadius = '5px'
    }
  })

  // Close the dropdown if clicked outside
  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
      dropdownList.setAttribute('hidden', true)

      chevronIcon.classList.remove('fa-chevron-up')

      chevronIcon.classList.add('fa-chevron-down')

      // Restore border-radius when dropdown closes
      selectedItem.style.borderBottomLeftRadius = '5px'

      selectedItem.style.borderBottomRightRadius = '5px'
    }
  })
})
