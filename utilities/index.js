function arrayGenerator(length) {
    var output = [];
    for (var i = 0; i < length; i++) {
        output.push(Math.random()*1000);
    }

    return output;
}


module.exports = {
    generateArray: arrayGenerator
};
