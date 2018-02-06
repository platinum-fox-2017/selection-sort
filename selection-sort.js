'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function selectionSort(arr) {
  // Your sorting code
  let temp
  for (let i = 0; i < arr.length; i++) {
      let minPos = i
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[minPos]) {
              minPos = j
          }
      }
      //SWAP
      temp = arr[i]
      arr[i] = arr[minPos]
      arr[minPos] = temp
  }
  return arr
}

var arrayGenapSorted = selectionSort(testArrayGenap)
console.log(arrayGenapSorted);
var arrayGanjilSorted = selectionSort(testArrayGanjil)
console.log(arrayGanjilSorted);