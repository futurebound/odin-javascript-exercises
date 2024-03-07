const removeFromArray = function(arr, ...items) {
	for (let i = 0; i < arr.length; i++) {
		for (const item of items) {
			if (arr[i] === item) {
				arr.splice(i, 1);
				i--;
			}
		}
	}

	return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
