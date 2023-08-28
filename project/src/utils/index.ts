export const addThousandSeparator = (num: number) => {
	if (num < 0) return 'invalid number';
	let numStr = num.toString();
	let result = '';

	while (numStr.length > 3) {
		result = ',' + numStr.slice(-3) + result;
		numStr = numStr.slice(0, numStr.length - 3);
	}

	if (numStr.length > 0) {
		result = numStr + result;
	}

	return result;
};
