import {container, CustomElement, input, list} from "./DOM-elements.js"
import {createAccordionBody} from "./prototypeDataRenderer.js"

//for creating new id of accordion tab's
let counter = 1
//for open and close accordion
let isExpanded = false


export function addListToDOC() {
  list.id="accordionExample"
  container.append(list)
}

export function renderPrototypeChain(properties, protoName) {
  //create element li
  let item = new CustomElement('li', 'accordion-item', '').createElement()

  // create header with button
  let accordionHeader = new CustomElement('h2', 'accordion-header', '').createElement()
  let accordionButton = protoName && protoName.constructor && protoName.constructor.name ?
    new CustomElement('a', 'accordion-button', `${protoName.constructor.name}`).createElement() :
    new CustomElement('a', 'accordion-button', 'Untitled').createElement()

  //for creating list inside button with data about prototype
  let subList = new CustomElement('ul', 'accordion-collapse collapse',
    '').createElement()
  console.log(properties)
  //create sublist with properties for each accordion with prototype name
  properties.forEach(property => {
    // create accordion collapse - box with content inside button
    createAccordionBody(subList, property)
  })

  // set id's and attributes and etc
  let collapseId = `collapse${counter}`
  accordionButton.type = 'button'
  accordionButton.href = '#collapseExample'
  accordionButton.setAttribute('data-bs-toggle', 'collapse')
  accordionButton.setAttribute('data-bs-target', `#${collapseId}`)
  accordionButton.setAttribute('aria-controls', collapseId)
  accordionHeader.id = `heading${counter}`
  subList.setAttribute('data-bs-parent', '#accordionExample')
  subList.id = collapseId

  counter++

  // Event listener to toggle aria-expanded attribute and classes
  accordionButton.addEventListener('click', () => {
    accordionButton.setAttribute('aria-expanded',  isExpanded = !isExpanded.toString())
    accordionButton.classList.toggle('collapsed')
    subList.classList.toggle('show')
  })


  // append elements
  accordionHeader.appendChild(accordionButton)
  item.append(accordionHeader, subList)
  list.append(item)

  input.value = ''
  return item
}
