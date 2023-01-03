export const flattenObj = (ob: {}) => {

	// The object which contains the
	// final result
	let result = {};

	// loop through the object "ob"
	for (const i in ob) {

		// We check the type of the i using
		// typeof() function and recursively
		// call the function again
		if ((typeof ob[i as keyof typeof ob]) === 'object' && !Array.isArray(ob[i as keyof typeof ob])) {
			const temp = flattenObj(ob[i as keyof typeof ob]);
			for (const j in temp) {

				// Store temp in result
				result[i + '.' + j as keyof typeof ob] = temp[j as keyof typeof temp];
			}
		}

		// Else store ob[i] in result directly
		else {
			result[i as keyof typeof result] = ob[i as keyof typeof ob];
		}
	}
	return result;
};