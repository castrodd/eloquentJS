const everything = (array, fn) => {
  for (let element of array) {
    if (!fn(element)) return false
  }
  return true
}

console.log(everything([2, 4, 6, 8, 10], (num) => num%2 == 0)) // true
console.log(everything([2, 4, 6, 8, 11], (num) => num%2 == 0)) // false

const everything2 = (array, fn) => {
  return !array.some((element) => !fn(element))
}

console.log(everything2([2, 4, 6, 8, 10], (num) => num%2 == 0)) // true
console.log(everything2([2, 4, 6, 8, 11], (num) => num%2 == 0)) // false