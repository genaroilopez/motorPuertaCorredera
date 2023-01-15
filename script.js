let categoria = document.getElementById('categoria');
let boxCategorias = document.getElementById('contenedorCategorias');

let categoria1 = document.getElementById('categoria1');
let boxCategorias1 = document.getElementById('contenedorCategorias1');

let categoria2 = document.getElementById('categoria2');
let boxCategorias2 = document.getElementById('contenedorCategorias2');


let menu = document.getElementById('menuMovil');
let botonMenu = document.getElementById('menu');
let fondo = document.getElementById('fondo');

let botonPesos = document.getElementById('botonPesos');
let categoriaPesos = document.getElementById('categoriaPesos');
let botonMarcas = document.getElementById('botonMarcas');
let categoriaMarcas = document.getElementById('categoriaMarcas');
let botonKits = document.getElementById('botonKits');
let categoriaKits = document.getElementById('categoriaKits');

fondo.addEventListener('click', function() {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    fondo.classList.remove('active');
    categoriaKits.classList.remove('active')
    categoriaPesos.classList.remove('active')
    categoriaMarcas.classList.remove('active')
  } else {
    menu.classList.add('active');
    fondo.classList.add('active');
  }
});
botonMenu.addEventListener('click', function() {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    fondo.classList.remove('active');
    categoriaKits.classList.remove('active')
    categoriaPesos.classList.remove('active')
    categoriaMarcas.classList.remove('active')
  } else {
    menu.classList.add('active');
    fondo.classList.add('active');
  }
});
botonPesos.addEventListener('click', function(){
  if (categoriaPesos.classList.contains('active')) {
    categoriaPesos.classList.remove('active')
  } else {
    categoriaPesos.classList.add('active')
  }
})
botonMarcas.addEventListener('click', function(){
  if (categoriaMarcas.classList.contains('active')) {
    categoriaMarcas.classList.remove('active')
  } else {
    categoriaMarcas.classList.add('active')
  }
})
botonKits.addEventListener('click', function(){
  if (categoriaKits.classList.contains('active')) {
    categoriaKits.classList.remove('active')
  } else {
    categoriaKits.classList.add('active')
  }
})

categoria.addEventListener('mouseover', function() {
  boxCategorias.classList.add('active');
});
boxCategorias.addEventListener('mouseover', function() {
  boxCategorias.classList.add('active');
});
categoria.addEventListener('mouseout', function() {
  boxCategorias.classList.remove('active');
});
boxCategorias.addEventListener('mouseout', function() {
  boxCategorias.classList.remove('active');
});



categoria1.addEventListener('mouseover', function() {
  boxCategorias1.classList.add('active');
});
boxCategorias1.addEventListener('mouseover', function() {
  boxCategorias1.classList.add('active');
});
categoria1.addEventListener('mouseout', function() {
  boxCategorias1.classList.remove('active');
});
boxCategorias1.addEventListener('mouseout', function() {
  boxCategorias1.classList.remove('active');
});



categoria2.addEventListener('mouseover', function() {
  boxCategorias2.classList.add('active');
});
boxCategorias2.addEventListener('mouseover', function() {
  boxCategorias2.classList.add('active');
});
categoria2.addEventListener('mouseout', function() {
  boxCategorias2.classList.remove('active');
});
boxCategorias2.addEventListener('mouseout', function() {
  boxCategorias2.classList.remove('active');
});
