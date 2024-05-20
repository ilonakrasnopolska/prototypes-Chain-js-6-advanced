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
export const form = new CustomElement('form', 'form mx-auto d-flex ' +
  'justify-content-center row needs-validation mb-5', '').createElement()
export const title = new CustomElement('h1', 'title text-center mb-5',
  'JS Prototype Chain Viewer').createElement()
export const inputBox = new CustomElement('div', 'form__input-box me-2 col-sm-4',
  '').createElement()
export const input = new CustomElement('input', 'form__input',
  '').createElement()
export const label = new CustomElement('label', 'error-message',
  '').createElement()
export const button = new CustomElement('button', 'btn btn-lg btn-info col-sm-2',
  'Show Chain').createElement()
export const list = new CustomElement('ol', 'accordion',
  '').createElement()

