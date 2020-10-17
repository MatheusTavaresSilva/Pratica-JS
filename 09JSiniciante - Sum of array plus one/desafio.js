

function sumArrayplusone(A){
    var array = A 
    var length = array.length
    var resultado = 0;

    for (var i = 0; array[i]<=length; i++){
        resultado += array[i] + 1 
    }

    return resultado
}

console.log(sumArrayplusone([1,2,3,4,5,6,7,8,9,10]))