//quiero que el carrito se muestren productos de tipos de piezas de cerámica, 
//elegir categoría y luego sumar cantidad de esa categoría
//me base en ejemplos vistos en clase y los del booklets nº3 y nº4
//ya me salió lo que buscaba hacer,era ingresar dos tipos de valores por prompt y devolver por consola todos los ingresos y
//un mensaje por cada tipo de ingreso.

let entrada = prompt(`Elegir el producto:
1.Plato artesanal
2.Taza de engobe
3.Vaso para submarino
4.Fuente de ensalada`);

switch (entrada) {
    case "1":
        console.log("Plato artesanal");
        break;
    case "2":
        console.log("Taza de engobe");
        break;
    case "3":
        console.log("Vaso para submarino");
        break;
    case "4":
        console.log("Fuente de ensalada");
        break;
    default:
        console.log("No elegiste producto.");
        break;
}

console.log("Elegiste el producto: " + entrada);

let entradaCant = prompt(`Elegir cantidad:
1
2
3
4
5`);



if (entradaCant === 1) {
    console.log("Elegiste" + entradaCant);
} else if (entradaCant === 2) {
    console.log("Elegiste" + entradaCant);
} else if (entradaCant === 3) {
    console.log("Elegiste" + entradaCant);
} else if (entradaCant === 4) {
    console.log("Elegiste" + entradaCant);
} else if (entradaCant === 5) {
    console.log("Elegiste" + entradaCant);
} else if (entradaCant.length === 0) {
    console.log("Elige cantidad por favor.");
};


console.log("Elegiste: " + entradaCant + " unidades.");



/* Array  clase 6 */

//const objeto1 = { id: 2, producto: "Vaso de Engobe" };
//const array = [objeto1, { id: 5, producto: "Plato artesanal" }]
//array.push({ id: 7, producto: "" });
//console.log(array);

/* AFunciones de orden superior  clase 7 */
