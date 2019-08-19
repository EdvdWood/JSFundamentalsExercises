const repeatString = function(string, repeats) {
    if (repeats < 0) {
        return "ERROR"
    } else {
        output = ""
        for (let i = 0; i < repeats; i++) {
            output += string
        }
        return output
    }
}
module.exports = repeatString
