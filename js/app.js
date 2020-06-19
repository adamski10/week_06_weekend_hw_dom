document.addEventListener('DOMContentLoaded', () => {
  console.log('JvaScript loaded');

  const form = document.querySelector('#new-item-form')
  form.addEventListener('submit', handleFormSubmit)
})