// alert('hello world');

var x = 5, y = 6; // Number data type
var z, a = 100;
var b = '5';    // String data type
var firstName = 'Geom';
var lastName = 'Tumamao';

var sum = x + y;
var test = x + b;
var fullName = firstName + ' ' + lastName;

var isTrue = true;

console.log(x, y);
console.log(z);
console.log(a);
console.log(firstName);
console.log('Tumamao');
console.log(sum);
console.log(x + b); // adding number and string data type
console.log(typeof test);
console.log(fullName); // same as:
console.log(firstName, lastName);

if (x == 5 && y == 6) {
    console.log('our condition is true');
}

if (firstName == 'geom' || lastName == 'tumamao') {
    console.log('coach is in');
}

if (!isTrue) {
    console.log('isTrue is ', isTrue);
} else {
    console.log('istrue\'s value is ', isTrue);
}

