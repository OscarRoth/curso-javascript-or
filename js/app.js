//quiero que el carrito se muestren productos de tipos de piezas de cerámica, 
//elegir categoría y luego sumar cantidad de esa categoría
//me base en ejemplos vistos en clase y los del booklets nº3 y nº4
//y lo que no me salió es almacenar un valor de una variable y luego pasarla a otra función
//quiero decir usando ciclos no me salió


//const objeto1 = { id: 2, producto: "zanahoria" };
//const array = [objeto1, { id: 5, producto: "choclo" }]
//array.push({ id: 7, producto: "batata" });
//console.log(array);

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






//if (entrada = entrada) {
 //   console.log("Usted eligió el producto " + entrada);
//} else {
//    console.log("Usted no eligió producto.");
//}
