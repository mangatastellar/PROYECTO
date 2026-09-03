function buscarProducto() {
  let busqueda = document
    .getElementById("buscar")
    .value
    .toLowerCase();

  let productos = document.querySelectorAll(".card");

  productos.forEach(function (producto) {
    let texto = producto.innerText.toLowerCase();

    if (texto.includes(busqueda)) {
      producto.style.display = "block";
    } else {
      producto.style.display = "none";
    }
  });
}

// LÓGICA DEL MENÚ LATERAL
const botonMenu = document.getElementById("botonMenu");
const menuLateral = document.getElementById("menuLateral");
const btnCerrar = document.getElementById("btnCerrar"); // 1. Capturamos la X

// Abre / Cierra desde el botón del header
botonMenu.addEventListener("click", function () {
  menuLateral.classList.toggle("activo");
});

// 2. Cierra el menú al hacer clic en la X
btnCerrar.addEventListener("click", function () {
  menuLateral.classList.remove("activo");
});

// OTRAS FUNCIONES DE TU PÁGINA
function ingresar() {
  alert("Ir a inicio de sesión");
}

function abrirCarrito() {
  alert("Tu carrito está vacío");
}

function verProducto(nombre) {
  alert("Producto seleccionado: " + nombre);
}

const categorias = document.querySelectorAll(".categorias a");

categorias.forEach(function (categoria) {
  categoria.addEventListener("click", function () {
    categorias.forEach(function (c) {
      c.classList.remove("activo");
    });

    categoria.classList.add("activo");
  });
});