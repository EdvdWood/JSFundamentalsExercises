let getTheTitles = function(list) {
    let titles = [];
    for (let i = 0; i < list.length; i++) {
        let title = list[i]["title"];
        console.log(title);
        titles.push(title);
    };
    return titles;
}

module.exports = getTheTitles;
