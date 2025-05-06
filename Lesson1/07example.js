let vat = 20; 
// Global Scope 
// You can use vat here 

function calculateVAT() {
    let vat = 30; 
    // Function Scope
    // You can use vat here 
    console.log("function console log", vat)
}

calculateVAT();


// What will this print? 
console.log(vat);

console.log("global console log", vat)