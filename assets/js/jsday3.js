var arr = [4, 6, 15, 16, 23, 42];       // Initialization and declaration  
console.log(arr);
console.log(arr[2]);
console.log('The value in 3rd index is', arr[3]);

var myName = 'Carlos';  // Strings can be accessed as arrays
console.log(myName[4]);
console.log(myName[10]);    // Outside range; undefined

var cars = ['Honda', 'Toyota', 'Chevrolet', 'Isuzu'];
var cars2 = ['Lambo', 'Porsche', 'BMW'];

console.log(cars);
console.log('Using at:', cars.at(2));   // Another way of accessing index
cars[3] = 'Mercedes Benz';
// Concatenation
console.log(cars);
console.log('concat:', cars.concat(cars2)); // Does not persist
console.log(cars);
cars = cars.concat(cars2);
console.log(cars);
// Array length
console.log('Length of cars: ', cars.length);
console.log('Length of cars2: ', cars2.length);
// Sorting
console.log('during sort: ', cars.sort()); // sort ascending
console.log('after sort: ', cars);  // therefore persistent
console.log('reverse: ', cars.reverse()); // descending
/*
// Sorting for numbers
cars.sort(function(a, b){return a-b}); // sorts in ascending order
console.log(cars);
cars.sort(function(a, b){return b-a}); // sorts in descending order
console.log(cars);
*/

// Push and pop
console.log('before push', cars2);
cars2.push('Ferrari');
console.log('after push', cars2);
var removedCar = cars2.pop();
console.log(cars2);
console.log(removedCar);
// Deleting specific element in array
console.log(cars.splice(3,1));
console.log('after remove', cars);
// Add elements at beginning of array
cars.unshift('Kia');
console.log(cars);