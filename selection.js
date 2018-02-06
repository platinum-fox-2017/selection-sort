'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

const selectionSort = array =>{
    for(let i =0;i<array.length;i++){
        let minimum = i
        for(let j =i+1;j<array.length;j++){
            if(array[j] < array[minimum]){
                minimum = j
            }
        }
        let swapPos = array[minimum]
        array[minimum] = array[i]
        array[i] = swapPos   
    }
    return array
}

console.log(selectionSort(testArrayGenap))
console.log(selectionSort(testArrayGanjil))
console.log(selectionSort(['a','h','g','b','o','i']))