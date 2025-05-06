
// This function gets as an input a primitive a number
function calculateVAT(price) {
    const total = price * price * 0.02;
    
    return total;
}


// A function can get as an input also a function 

function calculateExchangeRate(amount, exchangeRate) {
    return exchangeRate(amount); 
}

const calculateExchangeInUK = (amount) => {
   return amount* 0.95; 
}

const calculateExchangeInSpain = (amount) => {
    return amount* 0.73; 
 }

const ukRate = calculateExchangeRate(1200, calculateExchangeInUK); 
const spainRate = calculateExchangeRate(1200, calculateExchangeInSpain);

console.log(ukRate);
console.log(spainRate);

