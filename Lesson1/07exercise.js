var vat = 5; 

function CalculateTotalPrice(price) {
    vat = 10;

    return price*vat/100; 
}

let total = calculateVAT(100);

// Which VAT will it be used here?
let price = 200*vat/100;


console.log(total);

// in this code we want the vat in the funtion to only be used by the function.
// How can we make it so it doesnt 