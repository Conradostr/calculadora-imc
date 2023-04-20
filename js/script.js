import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateIMC, notANumber } from "./utils.js"

// variáveis 
const form = document.querySelector('form')
const inputWeigth = document.querySelector('#weigth')
const inputHeigth = document.querySelector('#heigth')


form.onsubmit = function(event) {
  event.preventDefault()

  const weigth = inputWeigth.value
  const heigth = inputHeigth.value
  const result = calculateIMC(weigth, heigth)
  const weigthorHeigthIsNotANumber = notANumber(weigth) || notANumber(heigth)
  
  if(weigthorHeigthIsNotANumber){
    AlertError.open()
    return;
  }


  AlertError.close()
  displayAlertMessage(result)
}

function displayAlertMessage(result){
  Modal.message.innerText = `Seu imc é de ${result}`
  Modal.open()
}

inputHeigth.oninput = () =>  AlertError.close()

inputWeigth.oninput = () =>  AlertError.close()
