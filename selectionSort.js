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


console.log(selectionSort([33,2,52,106,73]))

console.log(selectionSort([40, 18, 22, 32, 90, 10, 10, 22, 8]))
