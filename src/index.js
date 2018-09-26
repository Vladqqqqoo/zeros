module.exports = function getZerosCount(number) {
	// your implementation
	var zeroCount = 0;
  
	for(var j=1;number/Math.pow(5,j)>=1;j++){
		zeroCount+=Math.floor(number/Math.pow(5,j));
	}
	
return zeroCount;

}
