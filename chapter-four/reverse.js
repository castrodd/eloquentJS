const reverseArray = (array) => {
  const newArray = []
  for (let number of array) {
    newArray.unshift(number)
  }
  return newArray
}

const reverseArrayInPlace = (array) => {
  const length = array.length
  const midpoint = Math.floor(length / 2)

   for (let i = 0; i < midpoint; i++) {
    const temp = array[i]
    array[i] = array[length - 1 - i]
    array[length - 1 - i] = temp
   }

   return array
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8]))
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]))
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9]))