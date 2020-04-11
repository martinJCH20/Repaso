//Ejercicio 1
const objeto = [ "Apps"];
objeto.push("FrondEnd", "BackEnd");

//console.log(objeto);
let div = document.querySelector('.seleccionador');
let selection = document.createElement('select');

div.appendChild(selection);


var element = document.querySelector('.seleccionador');
let i = 0;
element.textContent = objeto[i];


document.addEventListener('keydown', (event) => {
//longitud de array 
list = objeto.length;

    element.textContent = objeto[i];
    var a  = "ArrowUp";
    var d  = "ArrowDown";

    switch(event.code){
        case a:
            i = i + 1;
            if(i<list){
                element.textContent = objeto[i];
            }else{
                i = i - 1;
                element.textContent = objeto[i];
                alert("No hay mas objetos en la lista");
            }
            break;
        case d:
            i = i - 1;
            if(i<0){
                i = i + 1;
                element.textContent = objeto[i];
            }
            else{                
                element.textContent = objeto[i];
            }
            break;
    }
});

const button = document.querySelector('button');

const addCurso = () => {
    var addElement = document.getElementById("addElem").value;
    objeto.push(addElement);
    alert("Se agregó el curso a lista "+ addElement);
}
button.onclick = addCurso;