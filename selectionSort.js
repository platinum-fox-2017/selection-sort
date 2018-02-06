function selectionSort(arr){
    var temp;
    var min;

    for (i = 0; i < arr.length-1; i++){
        min = i;
        for (j = i+1; j < arr.length; j++){
            if (arr[min] > arr[j]){
                min = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr
}

// TEST CASE
console.log(selectionSort([33,2,52,106,73]))
console.log(selectionSort([13,5,22,99,11]))

