//CREO MI STOCK DE DISCOS DISPONIBLES DE LA TIENDA EN UN ARRAY DE OBJETOS 


let stockProductos = [
    {id: 1, nombre: "Vulnicura", artista: "Bjôrk", cantidad: 1, año: 2015,  precio: 3300, img: './images/disco1.jpg'},
    {id: 2, nombre: "Kick i", artista: "Arca", cantidad: 1, año: 2019, precio: 2500, img: './images/disco2.jpg'},
    {id: 3, nombre: "All Mirrors", artista: "Angel Olsen", cantidad: 1, año: 2019 , precio: 1800,  img:'./images/disco3.jpg'},
    {id: 4, nombre: "Magdalene", artista: "FKA Twigs", cantidad: 1, año: 2019 , precio: 3500, img: './images/disco4.jpg'},
    {id: 5, nombre: "Titanic Rising", artista: "Weyes Blood", cantidad: 1, año: 2019 , precio: 3200, img: './images/disco5.jpg'},
    {id: 6, nombre: "Halo", artista: "Juana Molina", cantidad: 1, año: 2017, precio: 1500,  img: './images/disco6.jpg'},
    
];


// EJEMPLO DESTRUCTURING CON OBJETO LITERAL

let disco1 = {
    nombre: "Vulnicura",
    artista: "Bjôrk"
}

let disco2 = {
    nombre: "kick i",
    artista: "Arca"
}

//USAMOS DESTRUCTURING Y TAMBIÉN AGREGAMOS PROPIEDAD AL OBJETO
//no solo extraigo las propiedades sino que también le agrego una nueva, todo en una línea.

let {nombre, artista, genero = "experimental"} = disco1;
let {nombre2, artista2, genero2 = "experimental"} = disco2;

//Utilizamos estas nuevas variables para mostrar los datos del objeto por consola (tmb evitamos el uso del objeto.propiedad)
console.log(`el disco ${nombre} del/la artista ${artista} pertenece al género ${genero}`);
console.log(`el disco ${nombre2} del/la artista ${artista2} pertenece al género ${genero2}`);


//PODEMOS TAMBIÉN USAR SPREAD OPERATOR PARA GENERAR UNA COPIA DEL ARREGLO 

let stockProductosCopiados = [...stockProductos]


//Y TAMBIÉN PODEMOS USAR EL SPREAD OPERATOR PARA CONCATENAR OBJETOS

let discosConcatenados = {...disco1, ...disco2}
console.log(discosConcatenados);



//EJEMPLO OPERADOR TERNARIO DANDO BIENVENIDA AL SITIO Y PIDIENDO INGRESAR DATOS POR PROMPT

// function saludar(nombreUsuario){
//     (nombreUsuario != "" && nombreUsuario != "@") ? swal (`Bienvenido al sitio ${nombreUsuario} que disfrutes de la tienda`) : swal ("Nombre Inválido")
// }
// let nombreUsuario = prompt("Ingresa tu nombre")
// saludar(nombreUsuario);



// swal("Escribe tu nombre para ingresar al sitio:", {
//    content: "input",
//  })
//  .then((value) => {
//     swal(`Bienvenidx al sitio ${value}, ¡qué disfrutes la tienda!`);
//   });





