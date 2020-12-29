var string = "string to test"

var eachWord = reverseFunction(string, "")

function reverseFunction(string, separater){
    return string.split(separater).reverse().join(separater)
}

console.log(eachWord)