({ module1, module2 } = require('./module1.js'))

const testFunction = () => {
    console.log('Im the main function')
    module1()
    module2()
}

testFunction()