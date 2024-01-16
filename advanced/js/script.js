// Create an empty user object.
// Add a name property with the value Jonas.
// Add a surname property with the value The Great.
// Change the value of name to Helene.
// Remove the name property from the object.

let user = {}

user.name = "Jonas";
user.surname = "The Great";
user.name = "Helene";

delete user.name;
console.log(user);

// Q.2

// Create a function isEmpty(obj)
// that returns true if the object
// has no properties and false if
// there is at least one property.


function isEmpty(obj){
    for(let key in obj){
        return false
    }
    return true;
}


const isMyObjectEmpty = isEmpty(user);
console.log("isMyObjectEmpty: ",isMyObjectEmpty)


// Q3

// Given an array of numbers: [1,2,31,24,-67,5,3,555,79,-4,21,33,89,-90].
// 1) Find the maximum and minimum value of the array.
// 2) Write all positive and even numbers into another array.
// Display the results on the screen.