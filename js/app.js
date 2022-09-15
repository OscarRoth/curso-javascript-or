//Quiero que el carrito se muestren productos de tipos de piezas de cerámica, 
//elegir el producto y luego sumar cantidad del producto


/* simulador interactivo*/



//while (x <= 5) {
//    valor = parseInt(prompt('Ingrese valor:'));
//   suma = suma;
//    x = x + 1;
//}
//console.log('La suma de los valores es ' + suma);


let plato = 100;
let vaso = 200;
let taza = 300;
let suma = 0;
let datoIngresado;

do {
    datoIngresado = parseInt(prompt("¿Qué producto quiere comprar?: 1.Plato, 2.Vaso, 3.Taza, 4.salir de la compra"));
    switch (datoIngresado) {
        case 1:
            // alert("elegiste 1")
            suma = suma + plato
            datoIngresado = parseInt(prompt("Ingresar un producto: 1.Plato, 2.Vaso, 3.Taza, 4.saliste"));
            break;
        case 2:
            suma = suma + vaso
            datoIngresado = parseInt(prompt("Ingresar un producto: 1.Plato, 2.Vaso, 3.Taza, 4.saliste"));
            //alert("elegiste 2")
            break;
        case 3:
            suma = suma + taza
            datoIngresado = parseInt(prompt("Ingresar un producto: 1.Plato, 2.Vaso, 3.Taza, 4.saliste"));
            //alert("elegiste 3")
            break;
        default:
            alert("El numero ingresado no es correcto");
            break;

    }

} while (datoIngresado != 4);

alert("Compraste por un total de: " + suma);



/* clase 5, 6, 7 */

const productos = [{
    id: 1,
    name: 'Plato artesanal',
    price: 10,

},

{
    id: 2,
    name: 'Taza de engobe',
    price: 15,

},

{
    id: 3,
    name: 'Vaso para submarino',
    price: 20,

},

{
    id: 4,
    name: 'Fuente de ensalada',
    price: 10,

},


]

const product = (cantidad) => {

    const arrayProducto = [];


    for (let i = 0; i < productos.length; i++) {

        arrayProducto.push({
            id: productos[i].id,
            nombre: productos[i].name,
            'Precio Unitario': productos[i].price,
            Cantidad: cantidad,
            'Precio Total': productos[i].price * cantidad
        })
    };

    return arrayProducto
}


const platoArtesanal = product(2)[0]
console.log('Plato Artesanal :', platoArtesanal);

const tazaDeEngobe = product(4)[1]
console.log('Taza de Engobe :', tazaDeEngobe);

const vasoSubmarino = product(4)[2]
console.log('Vaso para submarino :', vasoSubmarino);

const fuenteEnsalada = product(4)[3]
console.log('Fuente de ensalada :', fuenteEnsalada);


/* clase 8 DOM */
const li = document.createElement("li")
const ul = document.getElementById("ul").appendChild(li).innerHTML = platoArtesanal.nombre


// .innerHTML = '<li>Primer Producto</li>'
// ul.appendChild(renderizado)

// console.log(renderizado);

// let agregado = document.createElement("h5");
// console.log(agregado);
// agregado.innerHTML = "<h5>Parrado de demostracion</h5>";
// document.body.appendChild(agregado);