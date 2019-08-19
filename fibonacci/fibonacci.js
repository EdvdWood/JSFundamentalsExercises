const fibonacci = function(n) {
    if (n == 1 || n == 2) {
        return 1;
    } else if (n < 0) {
        return "OOPS";
    } 
    else {
        let array = [1,1];
        for (let i = 3; i <= n; i++) {
            array.push(array[array.length-2]+array[array.length-1])
        }
        return array[array.length-1]
    }

}

module.exports = fibonacci
