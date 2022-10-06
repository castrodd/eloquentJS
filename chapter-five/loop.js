const loop = (value, test, body, update) => {
  return (input) => {
    while (test(value)) {
      input[value] = body(input[value])
      value = update(value)
    }
    return input
  }
}

const sample = loop(
  0, 
  (value) => value < 3, 
  (value) => value.toUpperCase(),
  (value) => value + 1
)

console.log(sample(['a', 'b', 'c']))