import {label, input} from "../visualPart/DOM-elements.js"
import {createPrototypeChainList} from "./prototypeChainBuilder.js"

export function isValid() {
  let success = true
  if (input.value.length === 0 || !isNaN(input.value) || typeof window[input.value] === 'undefined') {
    input.classList.add('invalid')

    if (input.value.length === 0) {
      label.textContent = 'The value is empty!'
    } else if (!isNaN(input.value)) {
      label.textContent = 'The value should not contain a number!'
    } else {
      label.textContent = `${input.value} - the wrong value , does not exist!`
    }

    input.parentElement.append(label)
    input.value = ''
    success = false
    return success
  } else {
    createPrototypeChainList()
    return success
  }
}
