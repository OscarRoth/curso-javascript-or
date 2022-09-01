//quiero que el carrito se muestren productos de tipos de piezas de cerámica, 
//elegir categoría y luego sumar cantidad de esa categoría
//me base en ejemplos vistos en clase y los del booklets nº3 y nº4
//y lo que no me salió es almacenar un valor de una variable y luego pasarla a otra función

let entrada = prompt(`Elegir un producto:
1. Plato artesanal
2. Taza de engobe
3. Vaso para submarino
4. Fuente de ensalada`);


let entradaCantidad = prompt(`
uno
dos
tres
cuatro
cienco
    `);
console.log("Usted eligió el producto " + entrada + " con " + entradaCantidad + " unidades.");