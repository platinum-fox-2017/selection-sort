function selectionSort(arr) {
  var result = [];

  var index = 0;

  while(arr.length > 0) {

  	var min = {number: arr[0], position: 0};

  	for (var i = 0; i < arr.length; i++) {
  		if (arr[i] < min.number) {
  			min.number = arr[i];
  			min.position = i;
  		}
  	}

  	result.push(min.number);

  	arr.splice(min.position, 1);
  	
  	if (index < arr.length - 1) index++;
  	else index = 0;
  }

  return result;
}

console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));