import {CustomElement} from "./DOM-elements.js"

export function createAccordionBody(subList, property) {
  // create accordion collapse - box with content inside button
    let item = new CustomElement('li', 'item mb-2 d-flex align-items-center',
      ``).createElement()
  let propertyButton = new CustomElement('button', 'btn btn-light me-2',
    `Property: ${property.value}`).createElement()
  let typeOfProperty = new CustomElement('span', 'type-hidden',
    `Type: ${property.type}`).createElement()


    propertyButton.type = 'button'
    propertyButton.style.fontSize = '20px'
    typeOfProperty.style.fontSize = '20px'

    propertyButton.addEventListener('click', () => {
      typeOfProperty.classList.toggle('type-show')
    })

    item.append(propertyButton, typeOfProperty)
    subList.appendChild(item)
}
