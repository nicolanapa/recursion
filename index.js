// WARMUP, ASSIGNMENT 1

function fibs(num) {
	let array = [];
	array.push(0);
	array.push(1);
	for (let i = 2; i < num; i++) {
		array.push(i - 1 + i - 2);
	}

	console.log(array);
}

fibs(8);

function fibsRec(num) {
	if (num < 2) {
		return num;
	} else {
		return fibsRec(num - 1) + fibsRec(num - 2);
	}
}

let array = [];

for (let i = 0; i < 8; i++) {
	array.push(fibsRec(i));
}

console.log(array);


// PROJECT MERGE SORT

function mergeSort(array) {
	if (array.length <= 1) {
		return array;
	}

	let media = Math.floor(array.length / 2);
	let left = [];
	let right = [];
	for (let i = 0; i < media; i++) {
		left.push(array[i]);
	}

	for (let i = media; i < array.length; i++) {
		right.push(array[i]);
	}
	console.log(left, right);

	return sorting(mergeSort(left), mergeSort(right));
}

function sorting(left, right) {
	if (left === undefined && right === undefined) {
		return console.error("Undefined");
	}

	console.log("To sort:", left, right);
	let array = [];
	let iLeft = 0;
	let iRight = 0;

	while (iLeft < left.length && iRight < right.length) {
		if (left[iLeft] < right[iRight]) {
			array.push(left[iLeft]);
			iLeft += 1;
		} else {
			array.push(right[iRight]);
			iRight += 1;
		}
	}

	while (iLeft < left.length) {
		array.push(left[iLeft]);
		iLeft++;
	}

	while (iRight < right.length) {
		array.push(right[iRight]);
		iRight++;
	}

	return array;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log("ANOTHER MERGE SORT");
console.log(mergeSort([105, 79, 100, 110]));