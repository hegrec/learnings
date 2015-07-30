/**
 * Insertion sort
 * March up the array and swap back as long as array[j] is smaller than array[j - 1]
 * O(n^2)
 * @param array
 * @returns array
 */
module.exports = function(array) {
    var j;
    for (j = 1; j < array.length; j++) {
        var key = array[j],
            i = j - 1;

        while (i >= 0 && array[i] > key) {
            array[i + 1] = array[i];
            i = i - 1;
        }

        array[i + 1] = key;
    }

    return array;
};
