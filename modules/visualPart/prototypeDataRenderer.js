import {CustomElement} from "./DOM-elements.js"

export function createAccordionBody(subList, property) {
  // create accordion collapse - box with content inside button
    let item = new CustomElement('li', 'item',
      `Property: ${property}`).createElement()
    subList.appendChild(item)
}
