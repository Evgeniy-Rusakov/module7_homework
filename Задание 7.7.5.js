function getUniqueSortedNumbers(arr) {
    const uniqueNumbers = [... new Set(arr)];
    uniqueNumbers.sort((a, b) => a - b);
    return uniqueNumbers;

}

const numbers = [3, 1, 2, 5, 0, 9, 4, 11 ];
const getUniqueSortedNumbers = getUniqueSortedNumbers(numbers);

console.log(uniqueSortedNumbers);
