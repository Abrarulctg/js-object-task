// Loop through an object and print the key-value pairs with their types
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}
const objectPr = Object.keys(myObject).length;
// console.log(objectPr)
const test = typeof (myObject.isStudent)
// console.log(test)
// const objectType = typeof (object);

for (const info in myObject) {
    console.log(`${info}: ${myObject[info]} | type: ${typeof (myObject[info])}`)
}