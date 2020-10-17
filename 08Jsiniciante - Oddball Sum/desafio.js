

function oddBallSum (A){
    var array = A 
    var length = array.length
    var resultado = 0

    for (var i=0; array[i]<length; i++){
        if (array[i] % 2 == 0){resultado += array[i]}
    }

    return resultado
}


console.log(oddBallSum([1,2,3,4,5]))