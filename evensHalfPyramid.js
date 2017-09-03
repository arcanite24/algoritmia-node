const halfPyramidStar = n => {
	for(let i = 0; i < n + 1; i++) {
		let temp = '';
		for(let j = 1; j < i + 1; j++) {
			if(i % 2 == 0) break;
			if(j % 2 == 0) temp += j + ' ';
		}
		console.log(temp);
	}
}

halfPyramidStar(50)
