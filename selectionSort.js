function selectionSort(arr){
    for(var i=1; i<arr.length; i++){
        for(var j=0; j<i; j++){
            var asal = arr[i];
            var pembanding = arr[j];
            if(arr[j]>arr[i]){
                arr[j] = asal;
                arr[i] = pembanding;
            }
        }
    }
    return arr;
}

console.log(selectionSort([8, 5, 7, 1, 9, 3]));
console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));