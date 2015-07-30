/**
 * Selection sort
 * March up the array and swap the smallest found number for array[i]
 * O(n^2)
 * @param array
 * @returns array
 */
module.exports = function(array) {
    for (var i = 0; i < array.length; i++) {
        var key = array[i],
            smallestIndex = i;

        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[smallestIndex]) {
                smallestIndex = j;
            }
        }

        if (smallestIndex != i) {
            array[i] = array[smallestIndex];
            array[smallestIndex] = key;
        }
    }

    return array;
};
