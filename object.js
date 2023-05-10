// Definition of various properties including a nested object. It then accesses properties of the object using 
// dot notation

const person = {
	name: "John",
	age: 30,
	hobbies: ["reading", "cooking", "hiking"],
	address: {
		street:"123 Main St",
		city: "Anytown",
		state: "CA",
		zip: "12345"
	}
};

console.log(person.name); // Outputs John
console.log(person.hobbies[1]); // Outputs: cooking
console.log(person.address.city); // Outputs: Anytown
