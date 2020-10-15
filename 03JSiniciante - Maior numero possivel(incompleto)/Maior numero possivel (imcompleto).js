

function time(A){
    var tempo = A

    var segundo = tempo%1

    var minutos = segundo%60

    var horas = tempo/(60*60)


    console.log(segundo)
    console.log(minutos)
    console.log("h:" + horas)
}

time(86400)