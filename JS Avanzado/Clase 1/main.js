// Ejercicio 1

let body = document.getElementsByTagName('body')[0];
let ul = document.createElement('ul');
let fragment = document.createDocumentFragment();

for (let i = 0; i < 10; i++) {
    let li = document.createElement('li');
    li.innerHTML = 'item ' + i;
    fragment.appendChild(li)
}

ul.appendChild(fragment);
body.appendChild(ul);

// Ejercicio 2

const { innerWidth } = window;
if (innerWidth > 500 ) {
    const article = document.getElementById('movil').style.display = 'none';
}

// Ejercicio 3

let newFragment = document.createDocumentFragment();

for (let i = 0; i < 10; i++) {
    let li = document.createElement('li');
    li.innerHTML = 'item ' + (10 + i);
    newFragment.appendChild(li)
}

ul.appendChild(newFragment);

// Ejercicio 4

let googleLink = document.getElementById('google');
let educacionitLink = document.getElementById('educacionit');

googleLink.href = 'http://educacionit.com';
educacionitLink.href = 'http://google.com';

// Eejercicio 5

let header = document.getElementsByTagName('header')[0];
header.style.backgroundColor = 'blue';

let h1 = document.getElementsByTagName('h1')[0];
h1.style.color = 'white';