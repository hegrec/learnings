/**
 * Merge sort
 * Split up the array recursively to sort the simplest sub problem
 * O(n log n)
 * @param array
 * @returns array
 */

/**
 * Split the array into a left and right side, and run a head pointer up each side, adding their values in sorted order
 * to the resulting array
 * @param array
 * @param q
 * @param p
 * @param r
 */
function merge(array, q, p, r) {
    var n1 =  q - p + 1,
        n2 = r - q,
        left = [],
        right = [];

    // Build the left side
    for (var i = 0; i < n1; i++) {
        left[i] = array[i];
    }

    // Build the right side
    for (var j = 0; j < n2; j++) {
        right[j] = array[j + q - 1];
    }

    //Sentinel value to ensure algorithm is correct
    left.push(Number.POSITIVE_INFINITY);
    right.push(Number.POSITIVE_INFINITY);

    i = 0;
    j = 0;

    // March up the array and pick values from left or right based on which would result in sorted order
    for (var k = p; k <= r; k++) {
        if (left[i] <= right[j]) {
            array[k] = left[i];
            i = i + 1;
        } else {
            array[k] = right[j];
            j = j + 1;
        }
    }
}

/**
 * Bottom out the initial array into the base cases and merge back towards the top
 * @param array
 * @param p
 * @param r
 */
function merge_sort(array, p, r) {
    if (p < r) {
        var q = Math.floor((p+r)/2);
        merge_sort(array, p, q);
        merge_sort(array, q + 1, r);
        merge(array, p, q, r);
    }
}


module.exports = function(array) {
    merge_sort(array, 0, array.length - 1);

    return array;
};
