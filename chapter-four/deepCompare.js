const deepCompare = (item1, item2) => {
  // Both null
  if (item1 == null && item2 == null) {
    return true
  }

  // At least one null
  if (item1 == null || item2 == null) {
    return false
  }

  // At least one non-object
  if (typeof item1 !== 'object' || typeof item2 !== 'object') {
    return item1 === item2
  }

  // Both objects
  item1Properties = Object.keys(item1)
  item2Properties = Object.keys(item2)

  for (let prop of item1Properties) {
    if (!item2Properties.includes(prop)) {
      return false
    }
  }

  return item1Properties.every(prop => deepCompare(item1[prop], item2[prop]))
}

console.log(deepCompare(null, null)) // true
console.log(deepCompare(null, 3)) // false
console.log(deepCompare(3, 3)) // true
console.log(deepCompare(3, 4)) // false
console.log(deepCompare('four', 'four')) // true
console.log(deepCompare(3, {})) // false
console.log(deepCompare({}, {})) // true
console.log(deepCompare({id: 3}, {name: 'three'})) // false
console.log(deepCompare({id: 'three'}, {id: 'three'})) // true
console.log(deepCompare({id: 'three', name: 'second'}, {id: 'three', name: 'three'})) // false
