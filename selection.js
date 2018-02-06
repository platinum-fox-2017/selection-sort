function selection(array){
  let temp = array[0]
  let count = 0
  for(let i = 0;i<array.length;i++){
    for(let j = count;j<array.length;j++){
      if(array[j]<array[i]){
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
    count++
  }
  return array
}

console.log(selection([10,9,65,53,25,121,273,0,8,5,4]));
console.log(selection(['banu','bunu','bonu','bann']));
