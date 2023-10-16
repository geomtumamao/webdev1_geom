var length, width, height = 0;
var width = 10, height = 15, length = 23;

product =  width * height * length;
console.log(product);

// Conditional statements
if (product % 2 != 0) {
    console.log('product is odd number');
} else {
    console.log('product is even number');
}

if (product % 3 == 0) {
    console.log('divisible by 3');
} else {
    console.log('not divisible by 3');
}

// Loops
for (var x = 0; x <= 10; x++) {
    if (x % 2 == 0) {
        console.log(x, 'EVEN');
    } else {
        console.log(x, 'ODD');
    }
}

var y = 0;
while (y <= 10) {
    console.log('while', y);
    y++;
}

// Confirm
if (confirm('Press a button')) {
    console.log('You pressed OK!');
} else {
    console.log('You pressed cancel');
}
console.log('end #1');

var confirmOutput = confirm('Trying out confirm box');
console.log('checking confirmOutput');

if (confirmOutput == true) {
    console.log('it is true');
} else {
    console.log('false');
}

console.log('end #2');

// Prompt Box
var personName = prompt('Please enter your name so I know how to address you');
console.log(typeof personName);

if (personName == 'Juan') {
    alert('Welcome to my site, ' + personName);
    // alert('text',var) doesn't work because only one variable is accepted
} else {
    alert('Only Juan can enter here.');
}