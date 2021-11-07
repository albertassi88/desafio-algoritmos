const arrayNumbers = [80, 30, 20, 10, 5, 1]; 

const mathOperations = {
    addition: (array) => array.reduce((cc, value) => cc + value), 
    subtraction: (array) => array.reduce((cc, value) => cc - value), 
    multiplication: (array) => array.reduce((cc, value) => cc * value), 
    division: ((number1, number2) => number1 !== 0 && number2 !== 0 ? number1 / number2 : "False"), 
}

function operationsAlgorithm(math, array) {
    return {
        addition: math.addition(array),
        subtraction: math.subtraction(array),
        multiplication: math.multiplication(array),
        division: math.division(4, 2),
    }
}
console.log(operationsAlgorithm(mathOperations, arrayNumbers))