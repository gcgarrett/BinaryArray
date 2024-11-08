# BinaryArray
Sorted number array implementation that uses binary search.

## Motivation
I read "grokking algorithms" earlier this year and wanted to implement a binary search algorithm. I decided the best way to do that was to create a purpose built array class that would keep the number values sorted and then use the binary search algorithm to find a value. I also recently had a coding challenge for a job application where I needed to search for a value in a very large array in under O(n) time. I knew that a binary search algorithm would complete the search in O(log(n)) time.

## Usage
```js
import { BinaryArray } from 'binaryarray';

// declares new BinaryArray with the initial numbers which it then sorts
const binaryArray = new BinaryArray(14, 2, 47, 28, 15, 9, 100);
// adds the number to the array in the sorted position
binaryArray.add(55);
// returns the number at the given index
binaryArray.at(2);
// returns the first number that matches the provided function or `undefined`
// if there were no matches
binaryArray.find((n) => {
    if ((n >= 1.25) && (n < 2.25)) {
        return 0;
    }
    else if (n < 1.25) {
        return 1;
    }
    else {
        return -1;
    }
});
// returns the index of the first number that matches the provided function or
// `-1` if there were no matches
binaryArray.findIndex((n) => {
    if ((n >= 1.25) && (n < 2.25)) {
        return 0;
    }
    else if (n < 1.25) {
        return 1;
    }
    else {
        return -1;
    }
});
// returns `true` if the given number is present in the array or `false` if not
binaryArray.includes(53);
// returns the index of the given number if it is present in the array or `-1`
// if not
binaryArray.indexOf(53);
// returns a string representation of the array with the numbers separated by
// the provided optional separator string
binaryArray.join(', ');
// returns a string representation of the array using the `join` function with
// ',' as the separator
binaryArray.toString();
```
