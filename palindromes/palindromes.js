const palindromes = function(string) {
    let newstring = [];
    string = string.toLowerCase()
    for (let i = 0; i < string.length; i++) {
        newstring.unshift(string[i])
    }
    return (newstring.toString().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\040]/g,"")) == string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\040]/g,"") ? true : false
}

module.exports = palindromes
