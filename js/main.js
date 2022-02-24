let head = document.getElementById('header');
let help = document.getElementById('helper');
let nextButton = document.getElementById('nextButton');
let navButton = document.getElementById('navButton');
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '~'];

let view = 0;

// create function to loop through symbols to create 99 possible results
const generateSymbol = function () {
	// randomize the array selection
	let randomSymbol = Math.floor(Math.random() * symbols.length);
	let result = 
	for (let i = 0; i <= 99; i++) {
		if (i % 9 === 0) {
		
	}
	return result;
};

// create function to update state
const updateState = function () {
	view++;
	updateView();
};

// create function to reset view
const resetView = function () {
	if (view === 0) {
		view++;
	} else {
		view = 0;
	}
	updateView();
};

// create function to update view
const updateView = function () {
	switch (view) {
		case 0:
			head.innerText = 'I can read your mind';
			help.style.display = 'none';
			nextButton.style.display = 'none';
			navButton.innerText = 'Go';
			break;

		case 1:
			head.innerText = 'Pick a number from 01 - 99';
			help.innerText = 'when you have your number click next';
			nextButton.style.display = 'block';
			nextButton.innerText = 'NEXT';
			navButton.innerText = 'R';
			break;

		case 2:
			head.innerText = 'Add both digits together to get a new number';
			help.innerText = 'Ex: 14 is 1 + 4 = 5';
			nextButton.innerText = 'NEXT';
			navButton.innerText = 'R';
			break;

		case 3:
			head.innerText = 'Subtract your new number from the original number';
			help.innerText = 'Ex: 14 - 5 = 9 click next to proceed';
			nextButton.innerText = 'NEXT';
			navButton.innerText = 'R';
			break;

		case 4:
			head.innerText = generateSymbol();
			help.innerText =
				'Find your new number. Note the symbol beside the number';
			nextButton.innerText = 'REVEAL';
			navButton.innerText = 'R';
			break;

		case 5:
			head.innerText = result;
			help.innerText = result;
			nextButton.style.display = 'none';
			navButton.innerText = 'R';
	}
};

navButton.addEventListener('click', resetView);
nextButton.addEventListener('click', updateState);

const init = function () {
	updateView();
};
