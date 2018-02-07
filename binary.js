function selectionSort(input) {
  var arr=[];
  var temp=0;

  for(var j=0;j<input.length;j++){
        temp=j;

        for(var i=j+1;i<input.length;i++)
          {
              if(input[i]<input[temp]){
                  temp=i;
              }
          }

        arr=input[j];
        input[j]=input[temp];
        input[temp]=arr;
  }

  return input;
}

console.log(selectionSort([33,2,52,106,73]));
console.log(selectionSort([13,5,22,99,11]));
