// Solution 1 ----------------------------------------------------------------------------------------
function selectionSort(arr){
  var minNum = arr[0];

  for(var i = 0; i < arr.length; i++){
    let temp;
    let indexMin = findMin(arr.slice(i))+i;
    temp = arr[i];
    arr[i]=arr[indexMin]
    arr[indexMin] = temp;
  }
  return arr;
}

function findMin(arr){
  let min = arr[0];
  let indexMin = 0;
  for (var i = 0; i < arr.length; i++){
    if(arr[i]<min){
      min = arr[i];
      indexMin = i;
    }
  }
  return indexMin;
}

// Solution 2 ----------------------------------------------------------------------------------------
function selectionSort(arr){
  var minNum = arr[0];

  for(var i = 0; i < arr.length; i++){
    let indexMin = arr.indexOf(arr.slice(i).reduce((current, value, index) => (value<current)?value:current));
    let temp = arr.splice(i,1,arr[indexMin]);
    arr.splice(indexMin,1,temp[0]);
  }
  return arr;
}

console.log(selectionSort([33,2,52,106,73]))

console.log(selectionSort([33,2,52,106,54]))
