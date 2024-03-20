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

function mergeSort(array, toMerge) {
	console.log();
	console.log("TRUE, TO MERGE:", array);
	let resorted = false;
	let media = array.length / 2;
	if (media >= 1 && toMerge) {
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

		if (media2 >= 1) {
			// save a temporary left / right array (with push) before another division
			// save also original array

			// or create an array and push the sorted values in it, example:
			// when left finishes create a leftArray which sorts the array and viceversa
			// and a final array which merges left and right sorted values
			return mergeSort(left, true).concat(mergeSort(right, true));
			/*	
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
			*/
		} else {
			if (left.length === 1 && right.length === 1) {
				/*for (let i = 0; i < left.length; i++) {
					if (left[i] >= left[i + 1]) {
						let temp = left[i + 1];
						left[i + 1] = left[i];
						left[i] = temp;
					}}*/
				if (left >= right) {
					let temp = left;
					left = right;
					right = temp;
				}
				// No Else needed === Already sorted

				console.log("Left sorted:", left, "Right sorted:", right);
				return mergeSort(left.concat(right), false) /*, resorted = true*/;

				/*
				let part = [];
				for (let i = 0; i < left.length + right.length; i++) {
					// blocked here
				}*/
			}
			/*if (right.length === 1) {
				for (let i = 0; i < right.length; i++) {
					if (right[i] >= right[i + 1]) {
						let temp = right[i + 1];
						right[i + 1] = right[i];
						right[i] = temp;
					}
					// Else === Already sorted
				}
				console.log("Right sorted: " + right);
			}*/
		}
	} else if (!toMerge) {
		console.log();
		console.log("FALSE, ALREADY MERGED:", array);
		return array;
	}
	/*if (resorted) {
		let bigger = false;
		let mergedArray = [];
		for (let i = 0; i < left.length + right.length; i++) {
				for (let i2 = 0; i < left.length + right.length; i++) {
					if (left[i] === right[i]) {
						i2 = left.length + right.length;
						mergedArray.push(left[i]);
					} else if (left[i] > right[i]) {
						i2 = i;
						mergedArray.push(right[i]);
					} else if (left[i] < right[i]) {
						i2 = left.length + right.length;
						mergedArray.push(left[i]);
					}
				}
		}
		console.log("merged");
		console.log(left, right);
		console.log(mergedArray);
		resorted = false;
		return mergedArray;
	}*/
}

console.log(sortArray(mergeSort([3, 2, 1, 13, 8, 5, 0, 1], true)));
/*console.log("ANOTHER MERGE SORT");
console.log(sortArray(mergeSort([105, 79, 100, 110])));*/

function sortArray(array) {
	console.log();
	console.log();
	console.log("TO BE SORTED:", array);

	if (array.length / 2 >= 2) {
		let media;
		if (array.length / 2 / 2 >= 2) {
			media = array.length / 2 / 2;
		} else {
			media = array.length / 2;
		}
		// LEFT
		let leftArray = [];
		let rightArray = [];

		for (let i = 0; i < media; i++) {
			if (array[i] > array[i + media]) {
				leftArray.push(array[i + media]);
				for (let i2 = i; i2 < media; i2++) {
					if (array[i] > array[i + media + 1]) {
						leftArray.push(array[i + media]);
					} else {
						leftArray.push(array[i2]);

						i2 = media;
					}
				}
			} else if (array[i] < array[i + media]) {
				leftArray.push(array[i]);
			} else if (array[i] === array[i + media]) {
				leftArray.push(array[i]);
				leftArray.push(array[i]);
			}

			if (i + 1 === media) {
				for (let i3 = 0; i3 < media; i3++) {
					if (!leftArray.includes(array[i3], 0)) {
						leftArray.push(array[i3]);
					} else if (!leftArray.includes(array[i3 + media], 0)) {
						leftArray.push(array[i3 + media]);
					}
				}
			}
		}

		//for (let i = 0; i < media; i++) {
		/*if (array[i] > array[i + media]) {
				let temp = array[i];

				leftArray.push(array[i + media]);

				for (let i2 = 0; i2 < media; i2++) {
					if (temp < array[i2 + media]) {
						leftArray.push(temp);

						i2 = media;
					}
				}
			} else if (array[i] < array[i + media]) {
				leftArray.push(array[i]);

				let temp = array[i + media];

				for (let i2 = media; i2 < media + i; i2++) {
					if (temp < array[i2 - media]) {
						leftArray.push(array[i2 - media]);

						i2 = media + i;
					}
				}
			} else if (array[i] === array[i + media]) {
				leftArray.push(array[i]);
				leftArray.push(array[i + media]);
			}

			if (leftArray.length + 1 === array.length / 2) {
				leftArray.push(array[i + media]);

				i = media;
			}*/
		//}

		console.log(leftArray);

		// RIGHT
		for (let i = array.length / 2; i < array.length - media; i++) {
			if (array[i] > array[i + media]) {
				rightArray.push(array[i + media]);
				for (let i2 = i; i2 < media; i2++) {
					if (array[i] > array[i + media + 1]) {
						rightArray.push(array[i + media]);
					} else {
						rightArray.push(array[i2]);

						i2 = media;
					}
				}
			} else if (array[i] < array[i + media]) {
				rightArray.push(array[i]);
			} else if (array[i] === array[i + media]) {
				rightArray.push(array[i]);
				rightArray.push(array[i]);
			}

			if (i + 1 === array.length - media) {
				for (let i3 = array.length / 2; i3 < array.length - media; i3++) {
					if (!rightArray.includes(array[i3], array.length / 2)) {
						rightArray.push(array[i3]);
					} else if (!rightArray.includes(array[i3 + media], array.length / 2)) {
						rightArray.push(array[i3 + media]);
					}
				}
			}
		}
		/*for (let i = array.length / 2; i < array.length; i++) {
			if (array[i] > array[i + media]) {
				let temp = array[i];

				rightArray.push(array[i + media]);

				for (let i2 = 0; i2 < media; i2++) {
					if (temp < array[i2 + media]) {
						rightArray.push(temp);

						i2 = media;
					}
				}
			} else if (array[i] < array[i + media]) {
				rightArray.push(array[i]);

				let temp = array[i + media];

				for (let i2 = media; i2 < media + i; i2++) {
					if (temp < array[i2 - media]) {
						rightArray.push(array[i2 - media]);

						i2 = media + i;
					}
				}
			} else if (array[i] === array[i + media]) {
				rightArray.push(array[i]);
				rightArray.push(array[i + media]);
			}

			if (rightArray.length + 1 === array.length / 2) {
				rightArray.push(array[i + media]);

				i = media;
			}
		}*/

		console.log(rightArray);
	}
}
