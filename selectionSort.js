const selectionSort = arr =>{
    for (let i = 0; i<arr.length; i++){
        let min = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }
        let temp = arr[min]
        arr[min] = arr[i]
        arr[i] = temp
    }
    return arr
}

let arr_s = [1,5,3,8,6,2]
let arr_a = [7,10,32,12,67]

console.log(selectionSort(arr_s))
console.log(selectionSort(arr_a))
