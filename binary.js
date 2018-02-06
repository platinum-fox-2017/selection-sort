'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  var result = [];
  var currentMin = arr[0];
  var indexMin = 0;

  if(arr.length === 1) {
    return arr;
  }

  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < currentMin) {
      currentMin = arr[i];
      indexMin = i;
    }
  }
  
  result.push(currentMin);
  arr.splice(indexMin, 1);
  var finalResult = result.concat(ownSort(arr));
  return finalResult;
}

// function binarySearch (search, array) {
//   // Your searching code
//   return 0;
// }

var arrayGenapSorted = ownSort(testArrayGenap);
var arrayGanjilSorted = ownSort(testArrayGanjil);

console.log(arrayGenapSorted); // [ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
console.log(arrayGanjilSorted); // [ 3, 21, 31, 53, 53, 55, 77, 85, 89 ]
console.log(ownSort([33, 2, 52, 106, 73])) // [ 2, 33, 52, 73, 106 ]

// Driver code
// console.log(binary_search(8, arrayGenapSorted))
// console.log(binary_search(10, arrayGenapSorted))
// console.log(binary_search(33, arrayGenapSorted))

// console.log(binary_search(53, arrayGanjilSorted))
// console.log(binary_search(3, arrayGanjilSorted))
// console.log(binary_search(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }
