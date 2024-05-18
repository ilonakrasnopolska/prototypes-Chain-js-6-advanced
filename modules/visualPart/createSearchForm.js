import {button, container, form, inputBox ,input, title} from "./DOM-elements.js"
import {isValid} from "../helpers/formValidator.js"


export function createSearchForm() {
  //set search form settings
  form.role = 'search'
  input.type = 'search'
  input.placeholder = 'Enter a name of class'
  button.type = 'submit'

  //add form e listener
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (isValid(input)) {
      input.classList.remove('invalid')
      if(inputBox.children[1]) {
        inputBox.children[1].remove()
      }
    }
  })

  //append all elements
  inputBox.append(input)
  form.append(inputBox, button)
  container.append(title, form)
}


