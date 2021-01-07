var arr = [1, 2, 3, 4, 4, 2];
var max = arr[0];
var count = 0;

for (var k = 0; k < arr.length; k++) {
  if (arr[k] > max) {
    max = arr[k];
  }
}
console.log("Max is: " + max);
for(var j = 0 ;j<arr.length; j++){
	if(arr[j]==max){
		count++
	}
}
console.log(count)