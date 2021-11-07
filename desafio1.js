const arrayAlphanumeric = ["a", 10, "b", "hola", 122, 15]; 

function arrayWords(array) {
    return array.filter(element => typeof element === "string");
}

function arrayNumbers(array) {
    return array.filter(element => typeof element === "number");
}

function bigNumber(array) {
    return array.filter(element => typeof element === "number").sort((a,b) => b-a)[0];
}

function completeAlgorithm(array) {
    return {
        arrayWords: arrayWords(array),
        arrayNumbers: arrayNumbers(array),
        bigNumber: bigNumber(array)
    }
}
console.log(completeAlgorithm(arrayAlphanumeric));



