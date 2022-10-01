const arrayToList = (array) => {
  let current = null

  array.forEach(node => {
    if (!current) {
      current = {
        value: node,
        rest: null
      }
    } else {
      let temp = current
      
      while (temp.rest) {
        temp = temp.rest
      }
 
      temp.rest = {
        value: node,
        rest: null
      }
    }
  })
  return current
}

const listToArray = (list) => {
  const array = []
  while (list) {
    array.push(list.value)
    list = list.rest
  }
  return array
}

const prepend = (element, list) => {
  return {value: element, rest: list}
}

const nth = (index, list) => {
  if (index) return nth(index - 1, list.rest)
  return list.value
}

console.log(arrayToList([1, 2, 3]))
console.log(listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }))
console.log(prepend(99, {value: 1, rest: { value: 2, rest: { value: 3, rest: null }}}))
console.log(nth(2, { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }))
console.log(nth(1, { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }))
console.log(nth(0, { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }))