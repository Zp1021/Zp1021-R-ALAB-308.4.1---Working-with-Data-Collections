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

    let obj = {
        id : table[i][0],
        name : table[i][1],
        occupation : table[i][2],
        age : table[i][3]
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
    id: '48',
    name: 'Barry',
    occupation: 'Runner',
    age: '25'
};

// Inserting new person object into the new table array at index 1
newTable.splice(1, 0, new_person);

// Creating another person object
let another_person = {
    id: '7',
    name: 'Bilbo',
    occupation: 'none',
    age: '111'
}

// Adding another person object to the end of the new table array
newTable.push(another_person)

