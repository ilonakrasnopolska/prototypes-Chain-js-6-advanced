export class CustomElement {
  constructor (tagName = 'div', className = '', textContent = '') {
    this.element = document.createElement(tagName)
    this.element.className = className
    this.element.textContent = textContent
  }

  createElement() {
    return this.element
  }
}

export const container = document.getElementById('app')
export const form = new CustomElement('form', 'form mx-auto text-center',
  '').createElement()
export const title = new CustomElement('h1', 'title text-center mb-5',
  'Enter the value:').createElement()
export const input = new CustomElement('input', 'form__input me-4',
  '').createElement()
export const button = new CustomElement('button', 'btn btn-lg btn-info',
  'Show Chain').createElement()

input.style.height = '50px'
button.style.height = '50px'
