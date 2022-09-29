function computeMedian(array){
	array.sort(function(a,b){
  	return a-b;
  });
let median = Math.floor(array.length / 2);
  
  if (array.length % 2)
  	return array[median];
  else
  	return (array[median - 1] + array[median]) / 2;
}

console.log(computeMedian([1,2,3,1]));
console.log(computeMedian([1,2,3,4,5]));
