

function suma(...arr){
    var total = 0
    for(var i = 0 ;  i < arr.length ; i++){
        total = total + arr[i];
    }
    return total;
}

document.write(suma(1,2,3,4,5,6,7,8))