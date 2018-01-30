// Drum Arrays
let kicks = Array(16);
let snares = Array(16);
let hiHats = Array(16);
let rideCymbals = Array(16);

kicks.fill(false);
snares.fill(false);
hiHats.fill(false);
rideCymbals.fill(false);


// Function to get drum type and index and then change boolean value
const toggleDrum = (drumType, drumIndex) => {
	
	if (drumIndex < 0 || drumIndex > 15){
		return;
	}
	
	switch (drumType) {

		case 'kicks':
			kicks[drumIndex] ? kicks[drumIndex] = false : kicks[drumIndex] = true;
			break;
		case 'snares':
			snares[drumIndex] ? snares[drumIndex] = false : snares[drumIndex] = true;
			break;
		case 'hiHats':
			hiHats[drumIndex] ? hiHats[drumIndex] = false : hiHats[drumIndex] = true;
			break;
		case 'rideCymbals':
			rideCymbals[drumIndex] ? rideCymbals[drumIndex] = false : rideCymbals[drumIndex] = true;
			break;
		default:
			return;
	} // end drumType switch
} // end toggleDrum


// Function to restore drum array to all false values
const clear = (drumType) => {

	switch (drumType) {

		case 'kicks':
			kicks.fill(false);
			break;
		case 'snares':
			snares.fill(false);
			break;
		case 'hiHats':
			hiHats.fill(false);
			break;
		case 'rideCymbals':
			rideCymbals.fill(false);
			break;
		default:
			return;
	} // end drumType switch
}// end clear


// Function to flip all boolean values in the given array
const invert = (drumType) => {
	let currentIndex = 0;

	switch (drumType) {
		
		case 'kicks':
			kicks.forEach(function(drumIndex){
				drumIndex ? kicks[currentIndex] = false : kicks[currentIndex] = true;
				currentIndex++;
			});
			break;
		case 'snares':
			snares.forEach(function(drumIndex){
				drumIndex ? snares[currentIndex] = false : snares[currentIndex] = true;
				currentIndex++;
			});
			break;
		case 'hiHats':
			hiHats.forEach(function(drumIndex){
				drumIndex ? hiHats[currentIndex] = false : hiHats[currentIndex] = true;
				currentIndex++;
			});
			break;
		case 'rideCymbals':
			rideCymbals.forEach(function(drumIndex){
				drumIndex ? rideCymbals[currentIndex] = false : rideCymbals[currentIndex] = true;
				currentIndex++;
			});
			break;
		default:
			return;
	} // end drumType switch
}// end invert

