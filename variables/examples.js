// how to use variables

let count = 0
if(true){
    // block scoping
    let count = 10
    console.log('here will print what is inside of the block scoping [10]' + count);
}
console.log('here will print what is outside of the block scoping [0]' + count);

const fruit = 18;
let newFruit;

if (fruit) {
    newFruit = 'limon';
} else if (fruit) {
    newFruit = 'strawberry';
} else {
    newFruit = 'pear';
}
console.log('here will print the new fruit' + newFruit);
