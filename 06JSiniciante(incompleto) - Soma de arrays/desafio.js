//Sem reduce e usando while


function LoopDosArrays(){
    
    //loop do conjunto de arrays
    var Sum = 0

    var array = arguments
    var arrayLenght = array.length
    
    var Counter = 0

    

    while (Counter < arrayLenght){
        var InnerArray = array[Counter]
        var InnerLenght = array[Counter].length

        var InnerCounter = 0

        while(InnerCounter < InnerLenght){
            
            Sum += InnerArray[InnerCounter]


            InnerCounter++
        }

        Counter++
    }

    return Sum
}


console.log(LoopDosArrays([1,2],[3,4]))

//sem reduce e usando for

function LoopDosArrays(){
    var Sum = 0;

    for (var i = 0; i < arguments.length; i++ ){
        for (var j = 0; j < arguments[i].length; j++){
            Sum += arguments[i][j]
        }
    }
    return Sum
} 

console.log(LoopDosArrays([1,2],[3,4]))

