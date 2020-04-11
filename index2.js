let date = new Date();

//console.log('date: ',date);

const greeting = "hello"; // no se modifica nunca
let greeting2 = "Hello2"; //Solo en el bloque de codigo
var greetings = "hello all"; //Globales

let food;
food = [
   {
       id: 1,
       name: 'Fruits',
       description: 'Some fruits'
   },
   {
        id: 2,
        name: 'Soup',
        description: 'Some soup'
    },
    {
        id: 3,
        name: 'drinks',
        description: 'Some drinks'
    },
    {
        id: 4,
        name: 'ice cream',
        description: 'Some ice cream'
    }
]

const stringPrimitive = 'a new string'; //No podemos cambiar su tipo de dato
const stringObject = new String('A new string'); //Si podemos cambiar el tipo de dato, por ejemplo: de string a numero

//console.log('food: ',food);

const text = 'Howareyou?';
const text2 = 'How are you?';

console.log(text[5]); //Se puede extraer un elemento de un string
console.log(text.charAt(0)); //Se puede extraer un elemento de un string
console.log(text.lastIndexOf('o')); //Busca posición de caracter
console.log(text.indexOf('are'));//Busca posición de caracter
console.log(text.slice(6,9)); //Parte el elmento
console.log(text.length); //longitud de cadena
console.log(text.toUpperCase()); //todo mayúscula
console.log(text.toLowerCase()); //todo minúscula
console.log(text2.split(' ')); //separa contenido mediante un valor asignado

const textSplit = text2.split(' ');
console.log('Text split', textSplit[1]);

const tooMuchwhitespace = '                 How are you?           ';
const trimed = tooMuchwhitespace.trim();
console.log(trimed);

const newstring = text2.replace('How', 'where');
console.log(newstring);

const originalString="javascript is a programming language. I'am learning javascript";
const newstring2 = originalString.replace(/javascript/gi, 'Javascript');
console.log(newstring2);

let TrueValue = String(true);
let StringCount = String(49);
let count = 49;

console.log(typeof StringCount);
console.log(count);

//Esto no cambia el tipo de dato solo lo cambia en ese momento
console.log(count.toString()); //convierte de string a número
console.log(Number(StringCount)); //convierte de número a string

console.log(Boolean(''));