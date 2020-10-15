
function SeteDaSorte(A){
    var array = A 
    var length = array.length
    var i = 0

    if (length<3){return false}

    while(i<length){
        var soma = array[i] + array[i+1] + array[i+2]

        if (soma === 7) {return true}

        i++
        
    }

    return false
}

console.log(SeteDaSorte([1]))//tem que retornar false
console.log(SeteDaSorte([1,3,3]))//tem que retornar true
console.log(SeteDaSorte([5,1,1]))//tem que retornar true
console.log(SeteDaSorte([1,2,3,4,5,6,7,8,9]))//tem que retornar false

