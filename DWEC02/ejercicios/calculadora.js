const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,  
  output: process.stdout 
});

var num1
var num2
var operador
var resultado

rl.question('Escribe el primer número de la operación: ', (datonum1) => {
    console.log("El primer número de la operación es: " + datonum1); 
    var num1 = datonum1
	rl.question('Escribe el segundo número de la operación: ', (datonum2) => {
    	console.log("El segundo número de la operación es: " + datonum2); 
    	var num2 = datonum2
		rl.question('Escribe el operador de la operación que quieres realizar: ', (datoOpera) => {
    		var operador = datoOpera
			switch(operador) {
				case "+":
					resultado = num1 + num2
					console.log("El resultado de la suma es: " + resultado); 
					break;
				case  "-":
					resultado = num1 - num2
					console.log("El resultado de la resta es: " + resultado); 
					break;
				case "*":
					resultado = num1 * num2
					console.log("El resultado de la división es: " + resultado); 
					break;
				case "/":
					resultado = num1 / num2
					console.log("El resultado de la división es: " + resultado); 
					break;
				}
			rl.close();
		});
	});
});