export function median(numbers: number[]) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null; // todo
  }

  // Sort the array
  const sortedNumbers = numbers.slice().sort((a, b) => a - b);
  const midIndex = Math.floor(sortedNumbers.length / 2);

  // Calculate median
  if (sortedNumbers.length % 2 === 0) {
    // Even number of elements
    return (sortedNumbers[midIndex - 1] + sortedNumbers[midIndex]) / 2;
  } else {
    // Odd number of elements
    return sortedNumbers[midIndex];
  }
}