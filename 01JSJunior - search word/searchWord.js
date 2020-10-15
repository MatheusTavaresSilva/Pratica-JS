
function SearchWord(A, B){
    var string = A

    var Search = B

    var result = string.indexOf(Search)

   return result
}

console.log(SearchWord("teste de codigo com o intuito de achar certa palavra" , "palavra"))
console.log(SearchWord("teste numeo dois pra ver se ta funcionando" , "ver"))
console.log(SearchWord("doente de amor, procurei remedio na vida noturna" , "amor"))
console.log(SearchWord("teste de escrita" , "de"))