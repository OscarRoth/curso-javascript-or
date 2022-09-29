const contenedorProductos = document.getElementById('contenedor-productos');

const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonVaciarCarrito = document.getElementById('vaciar-carrito');


let carrito = []

botonVaciarCarrito.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
});

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt="">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p>${producto.talle}</p>
    <p class="precioProdcuto">Precio $ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div);


    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)

    })


})


// esta funcion es para agregar items al carrito
const agregarAlCarrito = (prodId) => {
    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
    //eliminarDelCarrito()
}

// funcion para eliminar cada uno de los items agergados al carrito, cuando ya estan agregados al carrito

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}


//se necesita esta funcion para ir actualizando el contenido del carrito, inyecta elementos de dom al html
const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: ${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar">Eliminar</button>
        `
        contenedorCarrito.appendChild(div)
        console.log(div)
    })
}