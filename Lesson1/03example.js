const prices = [10, 20, 30, 50];

const pricesWithVAT = prices.map(function(price){
    return price*0.2 + price
})

console.log(pricesWithVAT)