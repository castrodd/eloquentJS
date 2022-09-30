const range = (start, end) => {
  let result = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}

const sum = (array) => {
  let total = 0
  array.forEach(number => {
    total += number
  })
  return total
}

console.log(sum(range(1, 10)))
