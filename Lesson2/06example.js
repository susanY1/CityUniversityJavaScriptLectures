// First, setup the generic poem creator function; it will be the callback function in the getUserInput function below.​
function genericPoemMaker(name, gender) {
    console.log(name + " is finer than fine wine.");
    console.log("Altruistic and noble for the modern time.");
    console.log("Always admirably adorned with the latest style.");
    console.log("A " + gender + " of unfortunate tragedies who still manages a perpetual smile");
}

// //The callback, which is the last item in the parameter, will be our genericPoemMaker function we defined above.​
function getUserInput(firstName, lastName, gender, callback) {
    var fullName = firstName + " " + lastName;

    // Make sure the callback is a function​
    if (typeof callback === "function") {
        // Execute the callback function and pass the parameters to it​
        callback(fullName, gender);
    }
}

// example 1
 getUserInput("Michael", "Fassbender", "Man", genericPoemMaker);
// // Output​
// /* Michael Fassbender is finer than fine wine.
// Altruistic and noble for the modern time.
// Always admirably adorned with the latest style.
// A Man of unfortunate tragedies who still manages a perpetual smile.
// */


//example 2
// function greetUser(customerName, sex)  {
//    var salutation  = sex && sex === "Man" ? "Mr." : "Ms.";
//   console.log("Hello, " + salutation + " " + customerName);
// }

// // Pass the greetUser function as a callback to getUserInputss
// getUserInput("Bill", "Gates", "Man", greetUser);