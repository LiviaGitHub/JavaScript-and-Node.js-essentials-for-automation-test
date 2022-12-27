let age = Math.random() * (50 - 1) + 1;

if (age >= 18) {
    // block scoping
    console.log('customer can get in ' + age);
} else (age <= 17); {
    // block scoping
    console.log('customer cannot get in ' + age);
}