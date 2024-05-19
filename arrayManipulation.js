
 
function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}

// Function to format an array of strings based on the processed numbers
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        return numbers[index] % 2 === 0 ? str.toUpperCase() : str;
    });
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
console.log(processedNumbers); // Output: [3, 4, 9, 16, 15]

const strings = ["apple", "banana", "cherry", "date", "elderberry"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings); // Output: ["apple", "BANANA", "cherry", "DATE", "elderberry"]
