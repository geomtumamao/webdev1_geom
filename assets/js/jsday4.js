var userInput ='500';
var multiplier = 5;

console.log(parseInt(userInput) * multiplier);

console.log(multiplier);
console.log(multiplier.toString());

var pi = 3.141516;
var currencyConverted = userInput * pi;
console.log(currencyConverted);
console.log(currencyConverted.toFixed(2));  // Converts to string and fixes 2 decimal values
console.log(currencyConverted.toFixed(0));

var firstName = 'Jericho';
// var nameInput = prompt('What is your name?');

// if (nameInput.toLowerCase() == firstName.toLowerCase() ) {
//     // String comparison is case-sensitive
//     alert('The same! ' + nameInput);    // Case change is not persistent
// } else {
//     alert('Not the same')
// }

var fruits = ['apple', 'orange', 'mango'];

if (fruits.includes('apple')) {
    console.log('Apple is present');
} else {
    console.log('Apple is not present');
}
// Further reading: maps

// OBJECT
var person = {
    firstName: 'Maria',
    lastName: 'Clara',
    gender: 'F',
    age: 7,
};
console.log(person);
console.log('the age is', person.age);
// Changing
person.gender = 'M';
person.age = 21;
console.log(person);

// Array of Objects
var phoneBook  = [
    {
        name: 'Hu Tao',
        number: 904583,
    },
    {
        name: 'Chongyun',
        number: 492213,
    },
    {
        name: 'Kaeya',
        number: 149513,
    },
    {
        name: 'Zhongli',
        number: 259931,
    },
    {
        name: 'Venti',
        number: 843133,
    },
];

console.log(phoneBook);

phoneBook[1].name = 'Brook James';  // Already changed in console prior to this line?
phoneBook[1].number = 782351;

console.log(phoneBook);

console.log(phoneBook[2].name);
console.log(phoneBook[1]);

// Using JS with HTML
console.log(document.getElementById('companyName'));    // displays null

document.getElementById('companyName').innerHTML = 'The Coding School';
// This displays an uncaught typeerror if script is called before html elements
// Fix: move <script> tag after <body> closing tag

var contentElement = document.getElementById('contentDiv');
contentElement.innerHTML = 'Coding for the future';

console.log(document.getElementsByClassName('listItem')[0].innerHTML);

var listItems = document.getElementsByClassName('listItem');

for(var count = 0; count < listItems.length; count++) {
    console.log(listItems[count].innerHTML);
    listItems[count].innerHTML = listItems[count].innerHTML + ' is my friend.';
}

console.log(document.getElementById('nameForm').value);

/*
 * FUNCTIONS:
 * console.log()
 * alert()
 * prompt()
 * confirm()
 * document.getElementById
 * document.getElementByClassName()
 * 
 */

function displayValue() {
    // any block of code
    console.log('hello');
};

displayValue();

function add(x,y) {
    return x + y;
};

console.log(add(5,4));

var sum = add(7, 11);
console.log(add(sum, 5));
console.log(sum);

function displayInput() {
    var inputValue = document.getElementById('nameForm').value;

    console.log('Hello there', inputValue);
    alert('Welcome ' + inputValue);
};

