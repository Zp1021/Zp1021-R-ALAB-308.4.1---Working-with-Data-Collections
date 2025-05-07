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
	console.log(char)

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

console.log(table)


// Code from this point onward is created in attempts to solve Parts 3 & 4 of the same lab
