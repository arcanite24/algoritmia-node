const invertedHalfPyramidStar = n => {
	if(n < 1) return;
	let temp = '';
	for(let i = 0; i < n; i++) {
		temp += '*';
	}
	console.log(temp);
	invertedHalfPyramidStar(n - 1);
}

invertedHalfPyramidStar(10)
