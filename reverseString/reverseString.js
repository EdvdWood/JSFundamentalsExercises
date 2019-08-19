const reverseString = function(string) {
    let newstring = "";
    for (let i = string.length-1; i >= 0; i--) {
        newstring += string[i];
    }
    return newstring;
}

module.exports = reverseString
