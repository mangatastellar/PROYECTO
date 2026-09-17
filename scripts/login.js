async function iniciarSesion() {
    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("clave").value;

    const respuesta = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ usuario, clave })
    });

    const datos = await respuesta.json();

    if (datos.exito) {
        alert("Bienvenido");
        window.location.href = "index.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
$(document).ready(function () {
    $('#mostrar_contrasena').click(function () {
        if ($('#mostrar_contrasena').is(':checked')) {
            $('#contrasena').attr('type', 'text');
        } else {
            $('#contrasena').attr('type', 'password');
        }
    });
});