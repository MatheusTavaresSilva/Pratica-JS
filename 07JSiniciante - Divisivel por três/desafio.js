function DivisivelPorTres(min, max){
    var array = []

    var i = min


    while(i<=max){

        if(i % 3 == 0){array.push(i + " div3")
            } else {
                array.push(i)
            }
        
        i++
    }

    return array
}

console.log(DivisivelPorTres(1,9))