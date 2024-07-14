import { Modal } from "./elements.js";

function ModalAlert () {

  function closeModalKey (event) {
    if(event.key !== 'Enter' && event.key !== ' ' && event.key !== 'Escape'){
      event.preventDefault();
      Modal.btnClose.focus()
    }
  }
  
  function openModal () {
    Modal.card.classList.add('open')
    Modal.card.setAttribute('aria-hidden', 'false')
    Modal.alert.classList.add('open')
    Modal.btnClose.focus()
  
    document.addEventListener('keydown', closeModalKey)
  }
  
  function closeModal () {
    document.removeEventListener('keydown', closeModalKey)
    Modal.card.setAttribute('aria-hidden', 'true')
    Modal.card.classList.remove('open')
    Modal.alert.classList.remove('open')
  }
    
  Modal.btnClose.addEventListener("click", () => {
    closeModal()
  })
  
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && Modal.card.classList.contains('open')) {
      closeModal()
    }
  
    if (event.key === 'Enter' && Modal.card.classList.contains('open')) {
      closeModal();
    }
  })

  return {
    openModal
  }
}

export const {openModal} =   ModalAlert()
