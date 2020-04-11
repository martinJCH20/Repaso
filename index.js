//console.log('Hola');

let date = new Date();

document.body.innerHTML = "<h1 class='date'> today's date is " + date + '</h1>';
//console.log("Today's date is", d);

let p = document.createElement('P');
let t = document.createTextNode('Paragraph text.');
p.classList.add('text');
p.appendChild(t);

document.body.appendChild(p);

//alert("today's date is " + date);

//console.log('date: ',date);


