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

