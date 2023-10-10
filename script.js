function threeSum(arr, target) {
	let min = Number.MAX_VALUE;
	for(let i=0;i<arr.length-3;i++){
		let sum = arr[i] + arr[i+1] + arr[i+2];
		if((sum-target) < Math.floor(min)){
			min = sum;
		}
	}
	return Math.floor(min);
  //your code here
}

module.exports = threeSum;
