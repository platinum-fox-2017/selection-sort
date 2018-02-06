function sortingSelection(arrRandom) {
  var arrSorting = []

  while(arrRandom != 0) {
    var min = arrRandom[0]
    var iMin = 0
    //Cari min
    for(var i = 0; i < arrRandom.length; i++) {
      if(arrRandom[i] < min) {
        min = arrRandom[i]
        iMin = i
      }
    }
    //ilangin arrRandom
    arrSorting.push(min)
    arrRandom.splice(iMin, 1)
  }
  return arrSorting
}

console.log(sortingSelection([33,2,52,106,73])); //[2,33,52,74,106]
console.log(sortingSelection([13,5,22,99,11])); //[5,11,13,22,99]
