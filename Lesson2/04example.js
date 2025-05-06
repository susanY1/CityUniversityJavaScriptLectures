// global variable​
var employees = [];

// generic logStuff function that prints to console​
function printEmployeeData (userData) {
    if ( typeof userData === "string")
    {
        console.log(userData);
    }
    else if ( typeof userData === "object")
    {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }
    }
}

// A function that takes two parameters, the last one a callback function​
function getInput (options, callback) {
    employees.push (options);
    callback (options);
}

// When we call the getInput function, we pass logStuff as a parameter.​
// So printEmployeeData will be the function that will called back (or executed) inside the getInput function​
getInput ({name:"Aris", jobTitle:"Developer"}, printEmployeeData);