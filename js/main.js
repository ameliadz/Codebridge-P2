var input = [];

function avg() {
	let a = document.getElementById('display').value;
	input = a.split(' + ');
	b = input.splice(input.length, input.length);
	b.push(eval(a) / input.length)
	Calc.display.value = b;
}

function allclear() {
	input = [];
	Calc.display.value = input;
}

function posneg() {
	let a = document.getElementById('display').value;
	a = -a;
	Calc.display.value = a;
}