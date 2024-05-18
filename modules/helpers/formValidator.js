import {label} from "../visualPart/DOM-elements.js"

export function isValid(input) {
  let success = true
  if (input.value.length === 0) {
    input.classList.add('invalid')
    label.textContent = 'The value is empty!'
    input.parentElement.append(label)
    success = false
    return success
  }
  if (!isNaN(input.value)) {
    input.classList.add('invalid')
    label.textContent = 'The value should not contain a number!'
    input.parentElement.append(label)
    success = false
    input.value = ''
    return success
  }
  else {
    return success
  }
}
