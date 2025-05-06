// Ideal Scenario
// console.log("Hello1");
// console.log("Hello2");
// console.log("Hello3");

// But this is what happens

console.log("Hello1");

setTimeout(() => {
    console.log("Hello2");
},
1000)

console.log("Hello3");