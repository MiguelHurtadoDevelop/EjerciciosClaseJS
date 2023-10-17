function factorialRecursivo (n) { 
	if (n == 0){ 
		return 1; 
	}
	return n * factorialRecursivo (n-1); 
}

console.log("1. "+ factorialRecursivo(1))
console.log("2. "+ factorialRecursivo(2))
console.log("3. "+ factorialRecursivo(3))
console.log("4. "+ factorialRecursivo(4))
console.log("5. "+ factorialRecursivo(5))
console.log("6. "+ factorialRecursivo(6))
console.log("7. "+ factorialRecursivo(7))
console.log("8. "+ factorialRecursivo(8))