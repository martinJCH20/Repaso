//Ejercicio 1
let typeString = String(1);
let typeNumber = 2;
let typeBool = true;

console.log("Ejercicio 1 (string  a número): ", Number(typeString));
console.log("Ejercicio 1 (número a string): ", typeNumber.toString());
console.log("Ejercicio 1 (string  a booleano): ", Boolean(typeBool));
console.log("Ejercicio 1 (booleano a string ): ", typeBool.toString());

//Ejercicio 2

let value = String(10);

console.log('Ejercicio 2 Tipo de dato: ', typeof value, ', String: ', value.toString(), ', Number: ', Number(value), ', Booleano: ', Boolean(value) );

//Ejercicio 3
const texto1 = "Retomando el curso";
const texto2 = "después de la cuarentena";

const newTexto1 = texto1.split(' ');

const newTexto2 = texto2.replace(/después de/gi, 'durante');
const texto2Split = newTexto2.split(' ');

console.log("Ejercicio 3:",  newTexto1[0]+' '+newTexto1[2]+' '+texto2Split[0]+' '+newTexto2.slice(8,21));

//Ejercicio 4
let datos = [
    "Hola", 90, "780", true, "true", undefined, null
]
const display = datos.map((item, index) => {
    if(item != undefined && item != null)
        console.log('Valor: ', item,'Longitud: ', item.length, 'Tipo de dato: ', typeof item);
})