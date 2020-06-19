document.addEventListener('DOMContentLoaded', () => {
  console.log('JvaScript loaded');

  const form = document.querySelector('#new-place-form')
  form.addEventListener('submit', handleFormSubmit)

  const clearForm = document.querySelector('#clear-all')
  clearForm.addEventListener('click', handleClearAll)
})

const handleFormSubmit = function(event) {
  event.preventDefault();
  const placeName = event.target.name.value
  const location = event.target.location.value
  const details = event.target.details.value

  const newEntry = document.createElement('ul')
  newEntry.id = 'options'
  const newPlaceName = document.createElement('li')
  const newLocation = document.createElement('li')
  const newDetails = document.createElement('li')

  newPlaceName.textContent = `Place name: ${placeName}`
  newLocation.textContent = `Location: ${location}`
  newDetails.textContent = `Useful details: ${details}`

  document.getElementById("visit-wish-list").appendChild(newEntry)
  document.getElementById("options").appendChild(newPlaceName);
  document.getElementById("options").appendChild(newLocation);
  document.getElementById("options").appendChild(newDetails);
  this.reset()
}

const handleClearAll = function () {
  document.querySelector("#visit-wish-list").innerHTML = ""
  
}