const openModelButtons = document.querySelectorAll('[data-mode-target]')
openModelButtons.forEach(button =>{
  button.addEventList('click',() =>{
    const modal = document.querySelector(button.dataset.modalTarget)
    openmodel(modal)
  }

}
function openmodel(model) {
  if (modal == null) return
  modal.classList.add('active')

}
