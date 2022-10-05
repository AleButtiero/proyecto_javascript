


//DECLARACIONES DE VARIABLES DONDE TRAEMOS ELEMENTOS DEL DOM DESDE SUS IDS
const contenedorProductos = document.getElementById('contenedor-discos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')




//CREAAMOS ARRAY CARRITO VACIO
let carrito = []







//COLOCAMOS EN EL HTML LOS PRODUCTOS DEL STOCK.JS Y LE AGREGAMOS LA CLASE PRODUCTO (los recorremos para poder imprimirlos y creamos un div por cada elemento)
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "portada disco">
    <h3>${producto.nombre}</h3>
    <p>${producto.artista}</p>
    <p>Año: ${producto.año}</p>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar a mi carrito <i></i></button>
    `
    //UTILIZAMOS APPEND CHILD PARA INSERTARLO EN EL HTML (EN UN DIV)
    contenedorProductos.appendChild(div)

    //DECLARAMOS LA VARIABLE BOTON Y LA TRAEMOS POR EL ID // es un botón que sirve para añadir al carrito con funcion click
    const boton = document.getElementById(`agregar${producto.id}`)
    

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
        
    })
})


//HACEMOS UNA VARIABLE PARA AGREGAR PRODUCTO AL CARRITO
const agregarAlCarrito = (prodId) => {

    //CREAMOS UNA VARIABLE PARA AUMENTAR LA CANTIDAD Y QUE NO SE REPITA
    const existe = carrito.some (prod => prod.id === prodId) //nos trae aquel producto cuyo id coincida con el prod id

    if (existe){ //SI YA ESTÁ EN EL CARRITO, ACTUALIZAMOS LA CANTIDAD
        const prod = carrito.map (prod => { 
            //  ACÁ LE SUMA LA CANTIDAD SI SE REPITE
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { //EN CASO DE QUE NO ESTÉ, AGREGAMOS EL DISCO AL CARRITO
        const item = stockProductos.find((prod) => prod.id === prodId)
        //LE HACEMOS PUSH AL CARRITO LOS DISCOS
        carrito.push(item)
    }

    //AGREGAMOS TOASTIFY POPUP PARA NOTIFICAR EL ARTICULO AÑADIDO
    Toastify({
        text: `Disco añadido al carrito`,
        duration: 3000,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    
    
 
    actualizarCarrito() 
}



const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) //BUSCA EL ELEMENTO Y DEVUELVE EL INDICE

    carrito.splice(indice, 1) //Le pasamos el indice de mi elemento ITEM y borramos un elemento 
    actualizarCarrito() //LLAMAMOS A LA FUNCION ACTUALIZARCARRITO QUE CREAMOS CADA VEZ QUE SE MODIFICA EL CARRITO
    console.log(carrito)

    //agregamos también un toastify para avisar que el articulo fue borrado del carrito
    Toastify({
        text: `Disco borrado del carrito`,
        duration: 3000,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #9b0000, #e44545)",
        },
        onClick: function(){} // Callback after click
      }).showToast();

}



const actualizarCarrito = () => {

    //ACA SE VAN A IR ACUMULANDO 
    contenedorCarrito.innerHTML = "" 
    
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar">Eliminar disco<i class="eliminar-disco"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })

    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    // EN CADA PRODUCTO RECORRIDO LE SUMAMOS EL PRECIO 

}



document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

 botonVaciar.addEventListener('click', () => {

    //AGREGAMOS SWEET ALERT PARA AVISAR QUE EL CARRITO SE HA VACIADO
    swal("El carrito ha sido vaciado exitosamente", {
                 icon: "success",
                 });

   carrito.length = 0
   
   actualizarCarrito()
 })



