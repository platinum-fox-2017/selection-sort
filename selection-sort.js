function selectSort(arr){
  var sortedArr = [];
  while(arr.length > 0 && arr[0] !== undefined){
    var smallestIdx = findMin(arr);
    var smallest = arr[smallestIdx];
    sortedArr.push(smallest);
    arr.splice(smallestIdx, 1);
  }
  return sortedArr;
}

function findMin(arr){
  if(arr.length === 1){
    return 0;
  } else {
      var smallest = arr[0]; // find smallest
      var index = 0;
      for (var i = 1; i < arr.length; i++) {
        if (smallest > arr[i]){
          smallest = arr[i];
          index = i;
        }
      }
      return index;
    }
}

var toBeSorted = [8,5,7,1,9,3];
console.log(selectSort(toBeSorted));
