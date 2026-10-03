'use strict'

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,  
    output: process.stdout 
});

var jsonUsuarios = `[
    {
        "nombre": "Juan",
        "edad": 30,
        "email": "juan@example.com"
    },
    {
        "nombre": "María",
        "edad": 25,
        "email": "maria@example.com"
    },
    {
        "nombre": "Carlos",
        "edad": 28,
        "email": "carlos@example.com"
    }
]`;

var listaUsuarios = JSON.parse(jsonUsuarios);
console.log ('Añadir Usuario al JSON\n');

iniciaForm();

function iniciaForm(){
    let dato;
    rl.question('Elige tarea:\n"A" - Añadir nuevo usuario\n"B" - Buscar usuario\n"X" Salir\n', (dato) =>{
        dato = dato.toLowerCase();
        switch(dato){
            case "a":
                anadeUser();
                break;
            case "b":
                buscaUser();
                break;
            case "x":
                console.log('\nCiao Pescao');
                process.exit();
                break;
            default: console.log (dato + 'no es una instrucción válida.\n');
                iniciaForm();
        }
    });
}

function anadeUser(){
    rl.question('Escribe el nombre del nuevo usuario: ', (nombre) => {
        rl.question('Introduce su edad: ', (edad) => {
            rl.question('Introduce su email: ', (email) => {
                let nuevoUsuario = {
                    "nombre": nombre,
                    "edad": edad,
                    "email": email
                };
                listaUsuarios.push(nuevoUsuario);
                console.log('Usuario añadido con éxito\n');               
                iniciaForm();
            });
        });
    });
}

function buscaUser(){
    rl.question('Escribe el nombre del usuario que quieres buscar: ', (nombreBuscar) => {
        nombreBuscar = nombreBuscar.toLowerCase();
        let i = -1;
        let usuarioEncontrado = listaUsuarios.find((usuario, index) => {
            if (usuario.nombre.toLowerCase() === nombreBuscar) {
                i = index;
                return true;
            }
            return false;
        });
        if (usuarioEncontrado) {
            console.log('\n--- Usuario Encontrado ---');
            console.log('Nombre: ' + listaUsuarios[i].nombre);
            console.log('Edad: ' + listaUsuarios[i].edad);
            console.log('Email: ' + listaUsuarios[i].email + '\n');
        } else {
            console.log('Usuario no encontrado\n');
        }
        iniciaForm();
    });
}