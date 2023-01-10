let categoria = document.getElementById('categoria');
let boxCategorias = document.getElementById('contenedorCategorias');

let categoria1 = document.getElementById('categoria1');
let boxCategorias1 = document.getElementById('contenedorCategorias1');

let categoria2 = document.getElementById('categoria2');
let boxCategorias2 = document.getElementById('contenedorCategorias2');

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
