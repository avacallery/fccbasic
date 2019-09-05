  //Return the factorial of the provided integer
//If the integer is represented with the letter n, 
  //a factorial is the product of all positive integers less than or equal to n
//Factorials are often represented with the shorthand notation n! 
  //example: 5! = 1 * 2 * 3 * 4 * 5 = 120
  
function factorialize(num) {
  var factorial = 1; 
  //We set this to 1 because 0 * 0 
  for (var i = 1; i <= num; i++) {
    factorial *= i; 
    //Multiplies by the current iteration 
  }
  return factorial;  

}

console.log(factorialize(9)); 

