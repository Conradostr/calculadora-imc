export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal h2 span'),
  buttonClose: document.querySelector('.modal h2 button'),

  open(){
    Modal.wrapper.classList.add('open')
  },
  close(){
    Modal.wrapper.classList.remove('open')
  }
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}