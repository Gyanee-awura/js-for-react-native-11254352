

// Function to process an array of numbers
function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}

// Function to format an array of strings based on the processed numbers
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        return numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}

// Function to create user profiles from original and modified names
function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
console.log(processedNumbers); // Output: [3, 4, 9, 16, 15]

const originalNames = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const modifiedNames = formatArrayStrings(originalNames, processedNumbers);
console.log(modifiedNames); // Output: ["apple", "BANANA", "cherry", "DATE", "elderberry"]

const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
// Output:
// [
//   { id: 1, originalName: "Apple", modifiedName: "apple" },
//   { id: 2, originalName: "Banana", modifiedName: "BANANA" },
//   { id: 3, originalName: "Cherry", modifiedName: "cherry" },
//   { id: 4, originalName: "Date", modifiedName: "DATE" },
//   { id: 5, originalName: "Elderberry", modifiedName: "elderberry" }
// ]
