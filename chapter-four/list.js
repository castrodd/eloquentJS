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

console.log(arrayToList([1, 2, 3]))
console.log(listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }))