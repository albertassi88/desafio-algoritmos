const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";

function AlgorithmRandom(alphanumeric) {
    let id = "";    
    for (let index = 0; index < 16; index ++) {
        id += alphanumeric.charAt(Math.floor(Math.random() * alphanumeric.length));      
    }
    return id.replace(/(\w{4})(\w{4})(\w{4})(\w{4})/, "$1-$2-$3-$4");    
}
console.log(AlgorithmRandom(alphanumeric));
  
