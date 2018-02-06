'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  var sortArray = [];
  while(arr.length != 0){
        var val = arr[0];
        var index = 0;
        for(var i = 1; i < arr.length; i++){
            if(arr[i] < val){
              val = arr[i];
              index = i;
            }
        } 
        sortArray.push(val);
        arr.splice(index,1);
        
  }
  return sortArray;
}


var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(arrayGenapSorted);
console.log(arrayGanjilSorted);
module.exports = {
    ownSort
}
