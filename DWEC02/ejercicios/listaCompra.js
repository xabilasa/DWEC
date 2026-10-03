'use strict'
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,  
  output: process.stdout 
});

var letra
var listaCompra = new Array();
console.log (' Lista de la Compra.\n Utiliza las siguientes instrucciones:\n "A" para introducir un producto \n "D" para eliminar el último producto de la lista \n "Salir" para salir');
function Compras (){
    rl.question('¿Qué quieres hacer ahora?: ', (tecla) => {
    letra = tecla.toLowerCase();
    switch (letra){
        case 'a':
            rl.question('introduce nombre del producto: ', (producto) => {
            listaCompra.push(producto);
            Compras();});
            break;
        case 'd':
            let eliminado = listaCompra.pop();
            console.log(eliminado + ' ha sido eliminado de la lista.');
            Compras();
            break;
        case 'salir':
            rl.close();
            console.log('\nLista de la Compra:')
            for (let i=0; i<listaCompra.length; i++){
                console.log(listaCompra[i]);
            }
            console.log('\n');
            process.exit();
            default:
                console.log (letra + ' no es una instrucción válida.\n "A" para introducir un producto \n "D" para eliminar el último producto de la lista \n "Salir" para salir');
                Compras();
        }
    });
}

Compras();