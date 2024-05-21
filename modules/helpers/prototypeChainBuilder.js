import {container, input, list} from "../visualPart/DOM-elements.js"
import {renderPrototypeChain} from "../visualPart/prototypeChainRenderer.js"

function getPrototypeChain(obj) {
  //empty arr for adding prototype name's
  let chain = []
  //get class prototype
  let prototype = obj.prototype

  while (prototype) {
    chain.push(prototype)
    prototype = Object.getPrototypeOf(prototype)
  }
  return chain.map(proto => {
   renderPrototypeChain(proto)
  })
}

export function createPrototypeChainList() {
  //class name from input value
  const className = input.value
  //function from window by name from input
  const globalClassReference = window[className]

  if (globalClassReference || typeof globalClassReference === 'function') {
    list.innerHTML = ``
    getPrototypeChain(globalClassReference)
  }
}

