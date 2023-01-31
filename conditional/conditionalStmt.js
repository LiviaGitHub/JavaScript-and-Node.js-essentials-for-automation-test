/**
 * Conditional statements use cases:
 * 1. if
 * 2. if (!)
 * 3. if and else
 * 
 */

// Use case 1: If... else
let avocado = 'fruit';
if(avocado === 'fruit'){
    console.log('Yes, It is a fruit'); 
} else (avocado === "letuce");{
    console.log('No, It is not a fruit'); 
};

// Use case 2: If... else
let age = 18;
if(age >= 18){
    console.log('Yes, Can getting in'); 
} else {
    console.log('No, Cannot getting in'); 
};

// Use case 3: If... else
let error = "DataValidation";
if(error === "Error"){
    console.log(`>>> Retry...`); 
} else if (error === "Fail 01"){
    console.log(`>>> Fail test ...`)
} else if (error === "Fail 02"){
    console.log(`>>> Fail again test ...`)
} else {
    console.log(`>>> Print error message ...`)
};
