import {container, CustomElement, input, list} from "./DOM-elements.js"

//for creating new id of accordion
let counter = 1

export function addListToDOC() {
  list.id="accordionExample"
  container.append(list)
}

export function renderPrototypeChain(proto, isExpanded = false) {
  //create element li
  let item = new CustomElement('li', 'accordion-item', '').createElement()

  // create header with button
  let accordionHeader = new CustomElement('h2', 'accordion-header', '').createElement()
  let accordionButton = proto && proto.constructor && proto.constructor.name ?
    new CustomElement('button', 'accordion-button', `${proto.constructor.name}`).createElement() :
    new CustomElement('button', 'accordion-button', 'Untitled').createElement()

  // create accordion collapse
  let accordionCollapse = new CustomElement('div', 'accordion-collapse collapse', '').createElement()
  let accordionBody = new CustomElement('div', 'accordion-body', '').createElement()
  let accordionContent = new CustomElement('strong', '', 'one').createElement()

  // set ids and attributes
  accordionCollapse.id = `collapse${counter}`
  accordionButton.setAttribute('data-bs-toggle', 'collapse')
  accordionButton.setAttribute('data-bs-target', `#collapse${counter}`)
  accordionButton.setAttribute('aria-controls', `collapse${counter}`)
  accordionButton.setAttribute('aria-expanded', isExpanded.toString())
  accordionHeader.id = `heading${counter}`
  if (!isExpanded) {
    accordionButton.classList.add('collapsed')
  } else {
    accordionCollapse.classList.add('show')
  }

  counter++

  // set attributes for collapse
  accordionCollapse.setAttribute('data-bs-parent', '#accordionExample')

  // append elements
  accordionBody.appendChild(accordionContent)
  accordionCollapse.appendChild(accordionBody)
  accordionHeader.appendChild(accordionButton)
  item.append(accordionHeader, accordionCollapse)
  list.append(item)

  input.value = ''
}
