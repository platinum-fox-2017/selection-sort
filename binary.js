'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  let empty;
  for(let i=0; i<arr.length; i++){
    let min = i;
    for(let j=i+1; j<arr.length; j++){
      if(arr[min]>arr[j]){
        min = j;
      }
    }
    empty = arr[min];
    arr[min] = arr[i];
    arr[i] = empty
  }
  return arr
}

console.log(ownSort(testArrayGenap));
// console.log(ownSort(testArrayGanjil));

// function binarySearch (search, array) {
//   // Your searching code
//   return 0;
// }

// var arrayGenapSorted = ownSort(testArrayGenap)
// var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
// console.log(binary_search(8, arrayGenapSorted))
// console.log(binary_search(10, arrayGenapSorted))
// console.log(binary_search(33, arrayGenapSorted))
//
// console.log(binary_search(53, arrayGanjilSorted))
// console.log(binary_search(3, arrayGanjilSorted))
// console.log(binary_search(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }
