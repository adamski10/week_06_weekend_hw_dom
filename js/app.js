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

  // const newPlaceName = document.createElement('li')
  // const newLocation = document.createElement('li')
  // const newDetails = document.createElement('li')
  const newEntry = document.createElement('li')
  
  // newPlaceName.textContent = `What? ${placeName}`
  // newLocation.textContent = `Where? ${location}`
  // newDetails.textContent = `Any useful details: ${details}`
  newEntry.textContent = `What? ${placeName} \r\nWhere? ${location} \r\nUseful details: ${details}`
  newEntry.id = "new-entry"


  const list = document.getElementById("visit-wish-list");
  list.appendChild(newEntry);
  // list.appendChild(newPlaceName);
  // list.appendChild(newLocation);
  // list.appendChild(newDetails);
  
  this.reset()
}

const handleClearAll = function () {
  document.querySelector("#visit-wish-list").innerHTML = ""
  
}