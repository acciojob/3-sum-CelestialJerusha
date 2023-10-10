function threeSum(arr, target) {
	let min = Number.MAX_VALUE;
	let s = 0;
	for(let i=0;i<arr.length-2;i++){
		let sum = arr[i] + arr[i+1] + arr[i+2];
		if(arr.length == 3){
			return sum;
		}
		if(Math.abs(sum-target) < min){
			min = sum-target;
			s = sum;
		}
	}
	return s;
  //your code here
}

module.exports = threeSum;
