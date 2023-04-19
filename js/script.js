import { Modal } from './modal'

// variáveis 
const form = document.querySelector('form')
const inputWeigth = document.querySelector('#weigth')
const inputHeigth = document.querySelector('#heigth')


form.onsubmit = function(event) {
  event.preventDefault()

  const weigth = inputWeigth.value
  const heigth = inputHeigth.value

  const result = IMC(weigth, heigth)

  Modal.message.innerText = `Seu imc é de ${result}`

  Modal.open()

  inputWeigth.value = ""
  inputHeigth.value = ""

}


function IMC(weight, height){
  return (weight / ((height / 100)**2)).toFixed(2)
}

