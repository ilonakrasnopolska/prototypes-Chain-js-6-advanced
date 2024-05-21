import {CustomElement} from "./DOM-elements.js"
import {prototypeDataRetriever} from "../helpers/prototypeInspector.js"

export function createAccordionBody(subList) {
  // create accordion collapse - box with content inside button
  let accordionBody = new CustomElement('div', 'card card-body', 'one').createElement()

  let type = prototypeDataRetriever(Array).type
  console.log(type)
  accordionBody.textContent = type

  subList.appendChild(accordionBody)
  return subList
}
