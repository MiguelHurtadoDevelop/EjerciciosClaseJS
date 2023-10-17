arr = [1,2,3,4,9,6,7,8,];

function Mayor(arr){
    let mayor = 0;
    arr.forEach(numero => {
    
        

        if(numero > mayor){

            mayor = numero;
        }

       
        
    });
    return mayor;
}

console.log(Mayor(arr))

arr = ["aaa","bbbbbbbbb","ccsdfasdfasfdasdccccc","hhhhhhh"];

function StringLargo(arr){
    let longitud = 0;
    let longitudMax = 0;
    let strLargo = " ";

    arr.forEach(item =>{

        longitud = item.length;
        if(longitud > longitudMax){
            longitudMax = longitud;
            strLargo =  item;
        }
        

    })
    return strLargo;
}

console.log(StringLargo(arr));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log("Even numbers:", evenNumbers);

const oddNumbers = numbers.filter(number => number % 2 !== 0);

console.log("odd numbers:", oddNumbers)


isword= ["isidoro", "ispaña", "juan"]

const Wordis = isword.filter(word => word.includes('is'));

console.log(Wordis);
const numbers1 = [ 3, 6, 2, 12];
const NumbersDiv = numbers1.filter(number => number % 3 !== 0);

if(NumbersDiv == 0){
    console.log("Numbers divisible by three:");
}



 arr1 = ["a", "b", "c", "d"]
 arr2 = ["a", "b", "c", "d"]

 const array3 = arr1.concat(arr2);
 console.log(array3);

 array3.sort();
console.log(array3);
array3.shift()
console.log(array3);
array3.unshift("hola");
console.log(array3);


