'use strict'

let selection_sort = (input) => {
    let array =[];
    while(input.length !== 0){
        let min = Math.min(...input);
        array.push(min);
        input.splice(input.indexOf(min),1);
    }
    return array;
}

let inputA = [33,2,52,106,73];
let inputB = [13,5,22,99,11]; 
console.log(selection_sort(inputA));
console.log(selection_sort(inputB));

