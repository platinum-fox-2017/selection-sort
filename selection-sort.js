function selectSort(input){
  var temp = []
  var minIndex = ""

  for(var i=0; i<input.length; i++){
    minIndex = i
    for(var j=i+1; j<input.length; j++){
      if(input[j] < input[minIndex]){
        minIndex = j
      }
    }
    temp = input[i]
    input[i] = input[minIndex]
    input[minIndex] = temp
  }
  return input
}
console.log(selectSort([33,22,52,106,73]));
console.log(selectSort([13,5,22,99,11]));
