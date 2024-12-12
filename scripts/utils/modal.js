const modal = document.getElementById('contact_modal')

function displayModal() {
  modal.style.display = 'block'
}

function closeModal() {
  modal.style.display = 'none'
}

// form selectors
const form = document.querySelector('form')
const firstName = document.getElementById('first')
const lastName = document.getElementById('last')
const email = document.getElementById('email')
const message = document.getElementById('message')
const errorMessages = document.querySelectorAll('.error-message')

const firstNameError = document.getElementById('alert-first-name')
const lastNameError = document.getElementById('alert-last-name')
const emailError = document.getElementById('alert-email')
const messageError = document.getElementById('alert-message')

errorMessages.forEach((message) => {
  message.style.display = 'none'
})

// check functions

const checkNameField = (element) => {
  // Regex to check for at least two letters and no special characters
  const validPattern = /^[a-zA-Z]{2,}$/

  if (!validPattern.test(element.value)) {
    element.style.borderColor = '#FF4E60'

    element.style.borderWidth = '2px'

    // Display the appropriate error message
    if (element === firstName) firstNameError.style.display = 'block'
    if (element === lastName) lastNameError.style.display = 'block'

    return false
  } else {
    element.style.borderColor = ''

    // Hide error messages
    if (element === firstName) firstNameError.style.display = 'none'
    if (element === lastName) lastNameError.style.display = 'none'

    return true
  }
}

const checkEmailField = () => {
  const validPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/
  if (!validPattern.test(email.value)) {
    email.style.borderColor = '#FF4E60'

    email.style.borderWidth = '2px'

    emailError.style.display = 'block'

    return false
  } else {
    email.style.borderColor = ''

    emailError.style.display = 'none'

    return true
  }
}

const checkMessageField = () => {
  if (message.value.length < 10) {
    message.style.borderColor = '#FF4E60'

    message.style.borderWidth = '2px'

    messageError.style.display = 'block'

    return false
  } else {
    message.style.borderColor = ''

    messageError.style.display = 'none'

    return true
  }
}

// Event listeners

firstName.addEventListener('input', () => checkNameField(firstName))

lastName.addEventListener('input', () => checkNameField(lastName))

email.addEventListener('input', checkEmailField)

message.addEventListener('input', checkMessageField)

// Form submission

form.addEventListener('submit', validate)

function validate(event) {
  event.preventDefault()

  const isFirstNameValid = checkNameField(firstName)
  const isLastNameValid = checkNameField(lastName)
  const isEmailValid = checkEmailField()
  const isMessageValid = checkMessageField()

  // collect user inputs
  const formInputs = {
    'First Name': firstName.value,
    'Last Name': lastName.value,
    Email: email.value,
    Message: message.value,
  }

  if (isFirstNameValid && isLastNameValid && isEmailValid && isMessageValid) {
    console.group('Form Submission')

    console.table(formInputs)

    console.groupEnd()

    // Display the success modal and reset form
    modal.style.display = 'none'

    form.reset()
  }
}
