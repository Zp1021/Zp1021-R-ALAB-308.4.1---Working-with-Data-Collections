/*
R-ALAB 308.4.1 - Working with Data Collections
Due: Wednesday 5/5 2025
Part 3: Transforming Data
*/

// Code below is provided solving Parts 1 & 2 of the same lab
let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26'

let cell = ''
let table = []
let row = []

for (let i = 0; i < csv.length; i++) {
	let char = csv[i] 

	if (char !== ',' && char !== '\n') {
		cell = cell + char
	} 

	if (char === ',') {
		row.push(cell)
		cell = ''
	} 

	if (char === '\n' || i === csv.length - 1) {
		row.push(cell)
		cell = ''
		table.push(row)
		row = []
	}
}

// Code from this point onward is created in attempts to solve Parts 3 & 4 of the same lab

// Create an empty array with name newTable
let newTable = [];

// Loop to populate array with objects listed 
for (let i = 1; i< table.length; i++) {

    // Creating an empty object to house key value pairs
    let obj = {}

    // Nested loop to create key value pairs for each idividual array
    for(let j = 0; j < table[0].length; j++) {
        let key = table[0][j];
        obj[key] = table[i][j];
    }
    newTable.push(obj);
}

// Log untransformed array to console
console.log(table);

// Log transformed array to console
console.log(newTable);

// Remove last entry from transformed array
newTable.pop();

// New person object created
let new_person = {
    Id: '48',
    Name: 'Barry',
    Occupation: 'Runner',
    Age: '25'
};

// Inserting new person object into the new table array at index 1
newTable.splice(1, 0, new_person);

// Creating another person object
let another_person = {
    Id: '7',
    Name: 'Bilbo',
    Occupation: 'none',
    Age: '111'
};

// Adding another person object to the end of the new table array
newTable.push(another_person);

//Declaring and initializing Ages variable with value of 0
let ages = 0;

//Loop to add all ages together
for (i = 0; i < newTable.length; i++) {
    /* 
    adding every value of age in the new table array
    to the ages variable every iteration
    */ 
    ages += Number(newTable[i].Age);

    // Logging a visual of what occurs within the loop
    console.log(ages);
}

// Take the sum of all ages and divide them by the # of ages in the array
let avgAge = (ages/newTable.length);

// Logs the average age to the console
console.log(avgAge);