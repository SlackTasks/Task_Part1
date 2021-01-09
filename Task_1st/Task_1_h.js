let arr = [1, 2, 3, 4, 4, 2];
let max = arr[0];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log("Max is: " + max);
for(let j = 0 ;j<arr.length; j++){
	if(arr[j]==max){
		count++
  } 
}
console.log(count)