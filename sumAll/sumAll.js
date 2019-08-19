const sumAll = function(n1, n2) {
    if (n1+n2 == n1/1+n2/1 && n1 > 0 && n2 > 0) {
        let sum = 0;
        if (n1>n2) {
        for (let i = n2; i <= n1; i++) {
            sum += i;
        }   
        return sum;
    }   else if (n2>n1) {
        for (let i = n1; i <= n2; i++) {
            sum += i;
        }   
        return sum;
    }
    

    } else {
        return "ERROR"
    }

}

module.exports = sumAll
