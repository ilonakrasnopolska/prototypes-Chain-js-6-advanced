export function getPrototypesChainByClass(input) {
  const userInput = input.value.toLowerCase()
  const windowValue = window[input.value]

  if (windowValue || typeof windowValue === 'function') {
    if (userInput === windowValue.name.toLowerCase()) {
      console.log(windowValue)
      input.value = ''
    }
  }
}
