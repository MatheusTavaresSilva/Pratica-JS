
function checkIntegridade (A){

    var alvo = A 

    var checadorA = alvo.lastIndexOf("a")
    var checadorB = alvo.indexOf("b")

    if (checadorA < checadorB && checadorA != -1) {return true} else {return false}
    
    
}

console.log(checkIntegridade("aaabbb")) //tem que retornar verdadeiro
console.log(checkIntegridade("b")) //tem que retornar falso
console.log(checkIntegridade("abba")) //tem que retornar falso
console.log(checkIntegridade("bbaa")) //tem que retornar falso
console.log(checkIntegridade("ab")) //tem que retornar verdadeiro