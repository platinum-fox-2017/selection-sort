function selectSort(arr){
  for(var i=1; i<arr.length; i++){
    for(var j=0; j<=i-1; j++){
      var belakang = arr[i];
      var depan = arr[j];
      if(arr[i]<arr[j]){
        arr[j]=belakang;
        arr[i]=depan;
      }
    }
  }
  return arr;
}

console.log(selectSort([33,2,52,106,73]));
console.log(selectSort([13,5,22,99,11]));
