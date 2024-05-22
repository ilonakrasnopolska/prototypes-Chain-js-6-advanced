import {container, input, list} from "../visualPart/DOM-elements.js"
import {renderPrototypeChain} from "../visualPart/prototypeChainRenderer.js"
import {getEnumerableProperties} from "./prototypeInspector.js"

function getPrototypeChain(obj) {
  //empty arr for adding prototype name's
  let chain = []
  //get class prototype
  let prototype = obj.prototype

  while (prototype) {

    chain.push({name: prototype})

    prototype = Object.getPrototypeOf(prototype)
  }

  return chain.map(obj => {
    return { ...obj, properties: getEnumerableProperties(obj.name)  }
  })
}

export function createPrototypeChainList() {
  //class name from input value
  const className = input.value
  //function from window by name from input
  const globalClassReference = window[className]

  if (globalClassReference || typeof globalClassReference === 'function') {
    list.innerHTML = ``
    const chain = getPrototypeChain(globalClassReference)
    chain.forEach(proto => {
      renderPrototypeChain(proto.properties, proto.name)
    })
  }
}

