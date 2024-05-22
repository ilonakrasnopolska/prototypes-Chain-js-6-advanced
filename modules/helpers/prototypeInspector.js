export function getEnumerableProperties (obj) {
  //for getting all properties

  // let properties = []
  // console.log(obj)
  // for (let key in obj) {
  //   properties.push(key)
  // }
  // console.log(properties)
  // return properties

  //for getting only enumerable properties!!!
  return Object.keys(obj)
}

// let properties = getEnumerableProperties(Image.prototype)


    // properties.push({ name: prop, type: typeof obj[prop] })
