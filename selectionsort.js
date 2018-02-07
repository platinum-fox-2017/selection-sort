function selectionSort(arr) {
    //start your code here
    // console.log(arr[0]); // 33

    var hasilSort = [];

    while (arr.length != 0) {
        var angkaMin = arr[0];    
        var indexMin = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < angkaMin) {
                angkaMin = arr[i];
                indexMin = i;
            }
        }
        hasilSort.push(angkaMin);
        // console.log(angkaMin); // 2
        // console.log(indexMin); // 1

        arr.splice(indexMin, 1);
        // console.log(arr); // 2 udah ilang // 4
        // return hasilSort; // 2
    }
    return hasilSort;




}



console.log(selectionSort([33,2,42,106,73])) // [2,33,52,73,106]
console.log(selectionSort([13,5,22,99,11])) // [5,11,13,22,99]