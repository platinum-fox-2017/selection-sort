function selectionSort(arr) {
    var cekLength = arr.length;
    var sortedArray = [];
    while (sortedArray.length < cekLength) {
      var min   = 9999;
      var indeks = 0;
      for(var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
          min = arr[i];
          indeks = i;
        }      
      }
      sortedArray.push(min);
      arr.splice(indeks,1);
    }
    arr = sortedArray;
    return arr
}

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

console.log(selectionSort(testArrayGenap));
console.log(selectionSort(testArrayGanjil));