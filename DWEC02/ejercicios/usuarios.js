'use strict'

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,  
  output: process.stdout 
});

class Usuario {
    constructor (nombre, edad, email){
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
    }
    mostrarInfo(){
        return 'Nombre: ' + this.nombre + '\nEdad: ' + this.edad + 'años\nEmail: ' + this.email +'\n'
    }
}

var listaUsuarios = [];
var Usuario1 = new Usuario('Xabi', 54, 'xabilasa@xabilasa.com');
listaUsuarios.push(Usuario1);

console.log (' Gestión de usuarios.\n Utiliza las siguientes instrucciones:\n"I" para mostrar información de un usuario \n"C" para cerar un nuevo usuario.\n"X" para salir');
function gestiona (){
    rl.question('¿Qué quieres hacer ahora?: ', (tecla) => {
    let letra = tecla.toLowerCase();
    switch (letra){
        case 'i':
            console.log('Elige usuario por su número:\n');
            let num = 1;
            listaUsuarios.forEach(Usuario => {
                console.log(num + ". " + Usuario.nombre);
                num++
            })
            rl.question('Introduce el número: ', (numero) => {
            let number = numero;
            console.log(listaUsuarios[number - 1].mostrarInfo());
            gestiona();});
            break;
        case 'c':
            console.log('Crear nuevo usuario\n');
            rl.question('Introduce el nombre del nuevo usuario: ', (nombre) => {
                rl.question('Introduce la edad del nuevo usuario: ', (edad) => {
                    rl.question('Introduce el email del nuevo usuario: ', (email) => {
                        let nuevo = new  Usuario(nombre, edad, email);
                        listaUsuarios.push(nuevo);
                        console.log('Usuario ' + nombre + ' añadido con éxito.\n');
                        gestiona();
                    });
                });
            });
            gestiona();
            break; 
        case 'x':
            process.exit();
        default:
            console.log (letra + ' no es una instrucción válida.\n "I" para mostrar información de un usuario \n "C" para cerar un nuevo usuario.\n"X" para salir');
            gestiona();
        }
    });
}

gestiona();