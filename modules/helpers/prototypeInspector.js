export function getEnumerableProperties (obj) {
  //for getting only enumerable properties and their types!!!
  if (typeof obj !== 'object' || obj === null) {
    return []
  }

  const enumerableProperties = Object.getOwnPropertyNames(obj)

  const keys = enumerableProperties.map(prop => {
    let value = prop
    let type = typeof obj
    return {value, type}
  })
  return {keys}
}
