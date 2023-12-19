"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.median = void 0;
function median(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return null;
    }
    // Sort the array
    var sortedNumbers = numbers.slice().sort(function (a, b) { return a - b; });
    var midIndex = Math.floor(sortedNumbers.length / 2);
    // Calculate median
    if (sortedNumbers.length % 2 === 0) {
        // Even number of elements
        return (sortedNumbers[midIndex - 1] + sortedNumbers[midIndex]) / 2;
    }
    else {
        // Odd number of elements
        return sortedNumbers[midIndex];
    }
}
exports.median = median;
