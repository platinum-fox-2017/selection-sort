'use strict'

function selectionSort(array) {
  var arr=[];

  while(array.length!==0) {
    var min=findMin(array);
    arr.push(min);
    array.splice(array.indexOf(min),1);
  }
  return arr;
}

function findMin(arr) {
  var min=Number.MAX_SAFE_INTEGER;
  for(var i in arr) {
    if(min>arr[i]) min=arr[i];
  }
  return min;
}

var arr1=[33,2,52,106,73]
var arr2=[13,5,22,99,11]

console.log(selectionSort(arr1))
console.log(selectionSort(arr2))