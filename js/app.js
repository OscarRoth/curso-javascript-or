//quiero que el carrito se muestren productos de tipos de piezas de cerámica, 
//elegir categoría y luego sumar cantidad de esa categoría


let entrada = prompt(`Elegir un producto:
1. Plato artesanal
2. Taza de engobe
3. Vaso para submarino
4. Fuente de ensalada`);
let productoIngresado = '';
while (entrada != 'Voldemort') {
    productoIngresado += entrada + "\n";
    entrada = prompt("Ingresar nombre de producto");
}
console.log(productoIngresado);

