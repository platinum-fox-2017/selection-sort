const binarySort = (input) => {
  for (let i = 0; i < input.length; i++) {
    let min = input[i]
    for (let j = i + 1; j < input.length; j++) {
      if (input[j] < min) {
        min = input[j]
        input[j] = input[i]
        input[i] = min
      }
    }
  }
  return input
}

console.log(binarySort([33, 2, 52, 106, 73])) // length 5
console.log(binarySort([13, 5, 22, 99, 11]))
