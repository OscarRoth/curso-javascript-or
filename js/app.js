

const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonVaciarCarrito = document.getElementById('vaciar-carrito');

const precioTotal = document.getElementById('precioTotal')

//btn de sweet alert
// const btnAlert = document.querySelector('#btn-alert');

// btnAlert.addEventListener('click', () => {
//     Swal.fire({
//         title: 'Error!',
//         text: 'Do you want to continue',
//         icon: 'error',
//         confirmButtonText: 'Cool'
//     })
// })


// setTimeout(() => {
//     console.log('aqui estoy')
// }, 3000)

// const prodictos = [
//     { id: 1, nombre: 'carapalida', precio: 300 }
// ]


// const findID = (id) => {
//     const prodi = prodictos.find((item) => item.id === id)
//     return new Promise((resolve, reject) => {
//         if (prodi) {
//             resolve(prodi)
//         } else {
//             reject('no esta')
//         }
//     })
// }

// findID(1)
//     .then((prodi) => (console.log(prodi)))
//     .catch((err) => (console.log(err)))

// console.log(fetch('http://koraiken.ar/js/stock.js'))



let carrito = []

//utilizar el local storage para guardar la informacion acumulada, o sea que efectuo la compra y por mas que refresque la pagina el valor acumulado permanece

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        //se guarda en storage cuando se ejecuta la funcion de actualizacion del carrito
        actualizarCarrito()
    }
})


//funcion para vaciar el carrito mediante un evento, y se ejecuta cuando se actualiza el carrito
botonVaciarCarrito.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
});


// se inyectan elementos de DOM para armar la estructura del html para visualizar la lista de productos en el carrito

const contenedorProductos = document.getElementById('contenedor-productos');

fetch('./js/stock.json')
    .then((res) => res.json())
    .then((stockProductos) => {

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
                //console.log('mensajito')
                Swal.fire({
                    title: `Agregaste <strong>${producto.nombre}</strong> al carrito`,
                    text: 'Clickea el boton ok para seguir comprando.',
                    icon: 'success',
                    //confirmButtonText: 'Cool'
                })

            })


        })
    })



// esta funcion es para agregar items al carrito
const agregarAlCarrito = (prodId) => {

    const existe = carrito.some(prod => prod.id === prodId)
    if (existe) {
        const prod = carrito.map(prod => {
            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    } else {
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)

    }

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
        localStorage.setItem('carrito', JSON.stringify(carrito))
        //console.log(div)
    })

    contadorCarrito.innerText = carrito.length
    precioTotal.innerHTML = carrito.reduce((acc, prod) => acc + prod.precio, 0)
    //console.log(carrito)

}