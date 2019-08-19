function translateString(string) {
	let pigString = ""
	let array = string.split(" ");
		for (let j = 0; j < array.length; j++) {
			for (let i = 0; i < array[j].length; i++) {
				if ((array[j][i] == "a" ||array[j][i] == "e" ||array[j][i] == "o" ||array[j][i] == "i" ||array[j][i] == "u") && (array[j][i-1]+array[j][i] != "qu")) {
					let helper = array[j].slice(0,i);
					let pigWord = array[j].slice(i);
					pigWord = pigWord.concat(helper, "ay");
					pigString += pigWord + " "
					break;
				}	else {
					continue;
				};
			};
	}
	return pigString.trim();
}


module.exports = {
	translateString
}

