const frontBack = (n, h) => {
	for(let i = 0; i < h; i++) {
		let temp =  '';
		if(i % 2 === 0) {
			let j = n;
			while(j > 0)  { temp += j + ' '; j--; }
		} else {
			for(let j = 1; j < n + 1; j++) { temp += j + ' ' }
		}
		console.log(temp)
	}
}

frontBack(5, 20)
