const halfPyramidStar = n => {
	for(let i = 0; i < n + 1; i++) {
		let temp = '';
		for(let j = 0; j < i; j++) {
			temp += '*';
		}
		console.log(temp);
	}
}

halfPyramidStar(10)
