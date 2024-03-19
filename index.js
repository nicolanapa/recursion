/*	WARMUP, ASSIGNMENT 1
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
*/

// PROJECT MERGE SORT

function mergeSort(array) {
	console.log(array);
	let media = array.length / 2;
	if (media >= 2) {
		let left = [];
		let right = [];
		for (let i = 0; i < media; i++) {
			left.push(array[i]);
		}
		for (let i = media; i < array.length; i++) {
			right.push(array[i]);
		}
		console.log(left, right);

		let media2 = media / 2;

		if (media2 >= 2) {
			let leftLeftPart = media2; // Left
			let leftRightPart = media2 * 2; // Left
			let leftLeftPartArray = [];
			let leftRightPartArray = [];
			for (let i = 0; i < leftLeftPart; i++) {
				leftLeftPartArray.push(array[i]);
			}
			for (let i = leftLeftPart; i < leftRightPart; i++) {
				leftRightPartArray.push(array[i]);
			}
			console.log(leftLeftPartArray, leftRightPartArray);

			if (leftLeftPart >= 2 && leftRightPart >= 2) {
				return mergeSort(leftLeftPartArray), mergeSort(leftRightPart);
			}
		}
	}
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
//console.log(mergeSort([105, 79, 100, 110]));
