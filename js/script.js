'use strict';

// Task #1
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

console.log(user);

// Task #2

const userTwo= {
    name: 'John'
};
userTwo.name = 'Pete';

console.log(userTwo);

// Task #3

let salaries = {
    Ann: 160,
    John: 100,
    Pete: 130
};

console.log(salaries);

const sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum);

// Task #3.1

let sumTwo = 0;

for (let key in salaries){
    sumTwo+= salaries[key]
}

console.log(sumTwo);