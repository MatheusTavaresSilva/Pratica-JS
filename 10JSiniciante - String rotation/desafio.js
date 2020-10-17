

function rotationString(A, B){
    var A = A
    var B = B
    if (A.length !== B.length){return false}

    for (var i=0; i<=A.length; i++){
        if (A[i] !== B[B.length - 1 - i]){return false}
    }

    return true
}

console.log(rotationString("marcelo", "olecram"))