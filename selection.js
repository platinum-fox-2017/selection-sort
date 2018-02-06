function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimum = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimum]) {
        minimum = j
      }
    }
    let swap = arr[i]
    arr[i] = arr[minimum]
    arr[minimum] = swap
  }
  return arr
}

console.log(selectionSort([33, 2, 52, 106, 73]))
console.log(selectionSort([13, 5, 22, 99, 11]))