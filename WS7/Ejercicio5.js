function sumEveryOther(...arr){

    var total = 0

    for(var i = 0 ;  i < arr.length ; i++){

        if((i%2) == 0){
            total = total + arr[i];
        }
    }
    return total;

}

document.write(sumEveryOther(1,2,3,4,7,6))