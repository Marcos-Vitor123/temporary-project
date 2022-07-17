// Array descrevendo todos os itens da lista
let cars = ["bmw", "volvo", "honda"];
document.getElementById("demo").innerHTML = cars;

// Array acessando o item 1 da lista
let bmw = cars[0];
document.getElementById("demo").innerHTML = bmw;

// Array dizendo a quantidade total de itens da lista
let len = cars.length;
document.getElementById("demo").innerHTML = len;

// Array informando o último item da lista
let last = cars[cars.length -1];
document.getElementById("demo").innerHTML = last;

// Exibe no console os itens juntamente com o seu id
cars.forEach((item, index, Array) => {console.log(item, index);});

// Altera a lista para string
document.getElementById("demo").innerHTML = cars.toString();

//