export function prototypeDataRetriever(obj) {
  //get prototype
  const prototype = Object.getPrototypeOf(obj)
  //get type
  const type = typeof Object.getPrototypeOf(obj)
  //get properties
  const properties = Object.keys(prototype)
  console.log(properties)

  return {type, properties}
}
