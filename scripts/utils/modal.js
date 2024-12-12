// modal display
function displayModal() {
  modal.style.display = 'block'
}

function closeModal() {
  modal.style.display = 'none'
}

const toggleModal = (show) => {
  modal.style.display = show ? 'block' : 'none'
}

document.getElementById('contact_modal').style.display = 'none'

// form selectors

const modal = document.getElementById('contact_modal')
const form = document.querySelector('form')
const fields = [
  {
    element: document.getElementById('first'),
    error: document.getElementById('alert-first-name'),
    validate: (value) => /^[a-zA-Z]{2,}$/.test(value),
  },
  {
    element: document.getElementById('last'),
    error: document.getElementById('alert-last-name'),
    validate: (value) => /^[a-zA-Z]{2,}$/.test(value),
  },
  {
    element: document.getElementById('email'),
    error: document.getElementById('alert-email'),
    validate: (value) => /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(value),
  },
  {
    element: document.getElementById('message'),
    error: document.getElementById('alert-message'),
    validate: (value) => value.length >= 10,
  },
]

document
  .querySelectorAll('.error-message')
  .forEach((msg) => (msg.style.display = 'none'))

// form validation
const validateField = ({ element, error, validate }) => {
  const isValid = validate(element.value)
  element.style.borderColor = isValid ? '' : '#FF4E60'

  error.style.display = isValid ? 'none' : 'block'

  return isValid
}

fields.forEach(({ element, validate, error }) => {
  element.addEventListener('input', () =>
    validateField({ element, validate, error })
  )
})

// form submission
form.addEventListener('submit', (event) => {
  event.preventDefault()

  const isFormValid = fields.every((field) => validateField(field))

  if (isFormValid) {
    const formInputs = Object.fromEntries(
      fields.map(({ element }) => [element.name || element.id, element.value])
    )

    console.group('Form Submission')

    console.table(formInputs)

    console.groupEnd()

    toggleModal(false)

    form.reset()
  }
})