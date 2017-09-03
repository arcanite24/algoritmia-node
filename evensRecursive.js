const evens = n => {
	if(n < 1) return
	if(n % 2 == 0) console.log(n)
	evens(n - 1)
}

evens(20)
