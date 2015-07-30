var selectionSort = require('./index'),
    utilities = require('../utilities'),
    input = utilities.generateArray(100000),
    result = selectionSort(input);

for (var i = 1; i < result.length; i++) {
    if (result[i-1] > result[i]) {
        console.log("fail");
        process.exit();
    }
}

console.log("sorted array of length " + result.length);
