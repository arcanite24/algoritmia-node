const squareStars = (w, h) => {
	for(let i = 0; i < h; i++) {
		let temp = '';
		for(let j = 0; j < w; j++) {
			if(i == 0 || i == h - 1) {
				temp += '*';
			} else {
				j == 0 || j == w - 1 ? temp += '*' : temp += ' ';
			}
		}
		console.log(temp);
	}
}

squareStars(5, 5)
console.log('\n');
squareStars(10, 5)
