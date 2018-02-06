function selectionSort(arrNum){
    if(arrNum > 1){
        return arrNum;
    } else {
        var newArray = [];
        var minNum = arrNum[0];
        for(var i=0; i<arrNum.length; i++){
            if(arrNum[i] < minNum){
                minNum = arrNum[i];
            }
        }
        // delete and push
        for(var d=0; d<arrNum.length; d++){
            if(arrNum[d] === minNum){
                newArray.push(arrNum[d]);
                arrNum.splice(d, 1);
            }
        }
        // console.log(arrNum);
        return newArray.concat(selectionSort(arrNum));
    }

}

console.log(selectionSort([33,2,52,106,73])); // 2,33,52,73,106
console.log(selectionSort([13,5,22,99,11])); // 5,11,13,22,29