document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  if (header) {
    header.innerHTML = `
      <div class="top">
        <div class="menu" id="botonMenu">
          ☰
        </div>

        <div class="logo">
          <img src="imagenes/logo.jpeg">
        </div>

        <div class="buscador">
          <input
            type="text"
            id="buscar"
            placeholder="Buscar productos..."
            onkeyup="buscarProducto()"
          >
          <button onclick="buscarProducto()">
            <img src="imagenes/lupa.png">
          </button>
        </div>

        <div class="iconos" onclick="abrirCarrito()">
          <img src="imagenes/carrito.png">
        </div>

        <a href="login.html">
          <button class="ingresar">ingresar</button>
        </a>
      </div>

      <div class="categorias">
        <a href="#oferta">Oferta</a>
        <a href="almacen.html">Almacen</a>
        <a href="verduleria.html">Verduleria</a>
        <a href="congelados.html">Congelados</a>
        <a href="bebidas.html">Bebidas</a>
        <a href="limpieza.html">Limpieza</a>
      </div>
    `;

    // Conectamos el botón para abrir el menú lateral
    const botonMenu = document.getElementById("botonMenu");
    const menuLateral = document.getElementById("menuLateral");

    if (botonMenu && menuLateral) {
      botonMenu.addEventListener("click", function () {
        menuLateral.classList.toggle("activo");
      });
    }
  }
});