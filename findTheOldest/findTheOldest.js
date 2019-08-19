
let findTheOldest = function(people) {
    let ageArray = [];
    for (let i = 0; i < people.length; i++) {
        if (people[i]["yearOfDeath"] == undefined) {
            ageArray.push(2019 - (people[i]["yearOfBirth"]));
        } else {
        ageArray.push((people[i]["yearOfDeath"]) - (people[i]["yearOfBirth"]));
        }
    };
    let age = ageArray.reduce(function(a, b) {
        return Math.max(a, b);
    });
    return people[ageArray.indexOf(age)];

}

module.exports = findTheOldest

