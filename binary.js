'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]


function ownSort(arr) {
  
  let arrayNumb = arr

  for(let i = 0;i < arrayNumb.length; i++){
    let nilaiMinimum = arrayNumb[i]
    let nilaiMinimumIndex = i
    let count = 0
    for(let j = i+1;j < arrayNumb.length;j++){
      
       if(arrayNumb[j] < nilaiMinimum){
        nilaiMinimum = arrayNumb[j]
        nilaiMinimumIndex = j
        count++
       } 
    }

    if(count > 0){
      let tmp = arrayNumb[i]
      arrayNumb[i] = arrayNumb[nilaiMinimumIndex]
      arrayNumb[nilaiMinimumIndex] = tmp
    }
  }

  return arrayNumb
}

console.log(ownSort(testArrayGenap))
console.log(ownSort(testArrayGanjil))