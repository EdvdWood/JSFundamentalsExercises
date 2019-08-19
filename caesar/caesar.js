const caesar = function(string, displacement) {
    function setCharAt(str,index,chr) {
        if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
    }
    let helper = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let capsHelper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let newString = string;
    for (let i = 0; i < string.length; i++) {
        if (helper.includes(string[i])) {
            let ind = helper.indexOf(string[i]);
            ind = ((ind + displacement)%26+26)%26;
            newString = setCharAt(newString,i,helper[ind]);
        } else if (capsHelper.includes(string[i])) {
            let ind = capsHelper.indexOf(string[i]);
            ind = ((ind + displacement)%26+26)%26;
            newString = setCharAt(newString,i,capsHelper[ind]);
        } else {
            continue;
        }
    }
    return newString;

}

module.exports = caesar
