// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (reqType, presetsIndex, newPresetArray) => {

	let returnArray = [];

	// check for valid index
	if (presetsIndex < 0 || presetsIndex > 15) {
		returnArray[0] = 404;
		return returnArray;
	}

	switch (reqType) {
		case 'GET':
			returnArray[0] = 200;
			returnArray[1] = presets[presetsIndex];
			return returnArray;
		case 'PUT':
			returnArray[0] = 200;
			returnArray[1] = newPresetArray;
			presets[presetsIndex] = newPresetArray;
			return returnArray;
		default:
			returnArray[0] = 400;
			return returnArray;
	}
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
