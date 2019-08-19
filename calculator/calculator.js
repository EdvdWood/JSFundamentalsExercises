function add (n1, n2) {
	return n1 + n2;
}

function subtract (n1, n2) {
	return n1 - n2;
}

function sum (array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}

function multiply (array) {
	let total = 1;
	for (let i = 0; i < array.length; i++) {
		total *= array[i];
	}
	return total;
}

function power(n1, n2) {
	return n1 ** n2;	
}

function factorial(n) {
	if (n == 0) {
		return 1;
	} else {
		let number = 1;
		for (let i = n; i > 0; i--) {
			number *= i;
		}
		return number
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}