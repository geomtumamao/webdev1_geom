// Fruits Array (Steps 1-8)
var fruits = [];
var numFruits = prompt('How many fruits would you like? (min: 3, max: 10)');
for (var x = 0; x < numFruits; x++) {
    ithFruit = x + 1;
    fruits[x] = prompt('Fruit # ' + ithFruit + ':');
}

console.log('fruit', fruits);
console.log('1st fruit: ', fruits[0]);
console.log('last fruit: ', fruits.at(numFruits-1));

console.log('reversed', fruits.reverse());
console.log('2nd fruit: ', fruits[1]);
console.log('delete 3rd', fruits.splice(2,1));
console.log('delete 1st', fruits.splice(0,1));
console.log('after delete', fruits);

// Vegetables Array (Step 9)
var vegetables = [];
var numVeg = prompt('How many vegetables would you like? (min: 3, max: 10');
for (var y = 0; y < numVeg; y++) {
    ithVeg = y + 1;
    vegetables[y] = prompt('Vegetable # ' + ithVeg + ':');
}

console.log('vegetable', vegetables);
console.log('1st veggie: ', vegetables[0]);
console.log('last veggie: ', vegetables.at(numVeg-1));

console.log('reversed', vegetables.reverse());
console.log('2nd veggie: ', vegetables[1]);
console.log('delete 3rd', vegetables.splice(2,1));
console.log('delete 1st', vegetables.splice(0,1));
console.log('after delete', vegetables);

// Step 10
var food = fruits.concat(vegetables);
console.log('food array', food);

// Step 11
for (var z = 0; z < food.length; z++) {
    var isEven;
    if (z % 2 == 0) {
        isEven = 'even';
    } else {
        isEven = 'odd';
    }
    var currFood = food[z].split('');   // Split into array
    var revFood = currFood.reverse().join('');  // Reverse and join into string

    console.log(
        'Index ' + z + ' is ' + isEven + 
        ' and the food inside it is called ' + food[z] + '. ' +
        'The word ' + food[z] + ' has ' + food[z].length +
        ' letters and the second letter is ' + food[z].charAt(1) + '. ' +
        'If you reverse it, it becomes ' + revFood + '.' 
    );
}

// Step 12
var check = prompt('What food would you like to find?');
console.log(check);
var foodIndex = food.indexOf(check);
console.log(foodIndex);
if (foodIndex != -1) {
    alert('Food is found at index # ' + foodIndex);
} else {
    alert('Food not found.');
}

// Step 13
food[0] = 'START';
food.pop();
food.push('END');
for (var x = 0; x < food.length; x++) {
    food[x] = food[x].toUpperCase();
}
console.log('food', food);