console.log("Starting");

// Add function
function add(n1, n2) {
    console.log(`Addition: ${n1} + ${n2} = ${n1 + n2}`); 
    return n1 + n2;  
}

// Minus function
function minus(n1, n2) {
    console.log(`Subtraction: ${n1} - ${n2} = ${n1 - n2}`);  
    return n1 - n2; 
}

// Multiplication function
function multiplication(n1, n2) {
    console.log(`Multiplication: ${n1} * ${n2} = ${n1 * n2}`); 
    return n1 * n2;  
}

// Division function
function division(n1, n2) {
    if (n2 === 0) {
        console.log("Division by zero is not allowed."); 
        return NaN;  
    }
    console.log(`Division: ${n1} / ${n2} = ${n1 / n2}`);  
    return n1 / n2;  
}

// Export all functions
module.exports = {
    add,
    minus,
    multiplication,
    division
};