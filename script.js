   function buscarProducto() {

            let busqueda = document
                .getElementById("buscar")
                .value
                .toLowerCase();

            let productos =
                document.querySelectorAll(".card");

            productos.forEach(function (producto) {

                let texto =
                    producto.innerText.toLowerCase();

                if (texto.includes(busqueda)) {

                    producto.style.display = "block";

                } else {

                    producto.style.display = "none";

                }

            });

        }

        // MENÚ
        const botonMenu =
            document.getElementById("botonMenu");

        const menuLateral =
            document.getElementById("menuLateral");

        botonMenu.addEventListener("click", function () {

            menuLateral.classList.toggle("activo");

        });

        // INGRESAR
        function ingresar() {

            alert("Ir a inicio de sesión");

        }

        // CARRITO
        function abrirCarrito() {

            alert("Tu carrito está vacío");

        }

        // PRODUCTOS
        function verProducto(nombre) {

            alert("Producto seleccionado: " + nombre);

        }

        // CATEGORÍAS ACTIVAS
        const categorias =
            document.querySelectorAll(".categorias a");

        categorias.forEach(function (categoria) {

            categoria.addEventListener("click", function () {

                categorias.forEach(function (c) {

                    c.classList.remove("activo");

                });

                categoria.classList.add("activo");

            });

        });