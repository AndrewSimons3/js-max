const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

while (randomNumber > 0.7) {
	alert('greater!');
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i <= numbers.length; i++) {
	console.log(numbers[i]);
}

for (let number of numbers) {
	console.log(number);
}

for (let i = numbers.length - 1; i >= 0; i--) {
	console.log(i);
}

const ranomNumber2 = Math.random();

if (
	(randomNumber > 0.7 && randomNumber2 > 0.7) ||
	randomNumber <= 0.2 ||
	randomNumber2 <= 0.2
) {
	alert('Both are greater or one of these is less than 2');
}
