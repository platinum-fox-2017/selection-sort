function selectionSort(arrNum) {

    for (let i = 0; i < arrNum.length; i++) {
        let min = i;
        for (let j = i + 1; j < arrNum.length; j++) {
            if (arrNum[j] < arrNum[min]) {
                min = j
            }
        }
        let temp = arrNum[i];
        arrNum[i] = arrNum[min]
        arrNum[min] = temp
    }

    return arrNum

}

console.log(selectionSort([33, 2, 52, 106, 73]))
console.log(selectionSort([13, 5, 22, 99, 11]))