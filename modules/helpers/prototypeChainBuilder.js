import {input, list} from "../visualPart/DOM-elements.js"
import {renderPrototypeChain} from "../visualPart/prototypeChainRenderer.js"
import {getEnumerableProperties} from "./prototypeInspector.js"

function getPrototypeChain(obj) {
  //empty arr for adding prototype name's
  let chain = []
  //get class prototype
  let currentPrototype = obj.prototype

  while (currentPrototype) {

    chain.push({name: currentPrototype})

    currentPrototype = Object.getPrototypeOf(currentPrototype)
  }

  return chain.map(obj => {
    let properties = getEnumerableProperties(obj.name)
    return { ...obj, properties}
  })
}

export async function createPrototypeChainList() {
  //class name from input value
  const className = input.value
  //function from window by name from input
  const globalClassReference = window[className]

  if (globalClassReference || typeof globalClassReference === 'function') {
    list.innerHTML = ``
    const chain = getPrototypeChain(globalClassReference)
    console.log(chain)
    chain.forEach(proto => {
      renderPrototypeChain(proto.name, proto.properties)
    })
  }
}

