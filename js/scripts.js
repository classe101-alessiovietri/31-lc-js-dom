const h1 = document.querySelector('h1');

console.log('h1', h1, typeof h1, h1.innerHTML);

const myDiv = document.getElementById('my-div');
const myDivAltroSelettore = document.querySelector('#my-div');

console.log('myDiv', myDiv, typeof myDiv, myDiv.innerHTML);
// console.log('myDiv content length', myDiv.innerHTML.length);
console.log('myDivAltroSelettore', myDivAltroSelettore, typeof myDivAltroSelettore, myDivAltroSelettore.innerHTML);

const firstP = document.querySelector('p:first-of-type');
const firstPAltroSelettore = document.querySelector('.lightcoral');

console.log('firstP', firstP, typeof firstP, firstP.innerHTML);
console.log('firstPAltroSelettore', firstPAltroSelettore, typeof firstPAltroSelettore, firstPAltroSelettore.innerHTML);

console.log('firstP.classList', firstP.classList);
console.log('firstP.className');
console.log(firstP.className);

// CONCATENO, quindi aggiungo classe
firstP.className += ' ciccio';
// EQUIVALE A
// firstP.className = firstP.className + 'ciccio';

// SOVRASCRIVO, quindi tolgo tutte le classi preesistenti
// firstP.className = 'ciccio';

const span = document.querySelector('span');

span.classList.add('ciccio');
span.classList.remove('lightcoral');

if (span.classList.contains('cicciotto')) {
    alert('Siccellà');
}

span.style.display = 'block';
span.style.color = 'white';
span.style.backgroundColor = '#0000ff';
span.style.display = 'inline-block';

span.append('. In realtà non è vero, ne ha solo una alla fine');
const newI = '<i>CIAO</i>';
span.append(newI);
span.innerHTML += newI;

document.querySelector('.altro-div').prepend(span);

const myButton = document.getElementById('click-button');

myButton.addEventListener('click', 
    function() {
        const kmInput = document.querySelector('[name="km"]');
        const ageInput = document.querySelector('[name="age"]');

        h1.innerHTML = 'KM da percorrere: ' + kmInput.value;
        h1.innerHTML += ' | Età dell utente: ' + ageInput.value;
    }
);
