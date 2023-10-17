function addonlyNums(...arr){
    var total = 0
    for(var i = 0 ;  i < arr.length ; i++){

        if(isNaN(arr[i])){
            
        }
        else{
            
            total = total + arr[i];
        }
    }
    return total;
}

document.write(addonlyNums(1,'cat',3,4))