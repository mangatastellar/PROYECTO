// Esperamos a que cargue toda la página para evitar errores
document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos los elementos usando los ID exactos
    const btnAbrirModal = document.getElementById('btnAbrirModal');
    const modal = document.getElementById('miModal');
    const btnCerrarModal = document.getElementById('btnCerrarModal');

    // 1. CUANDO HACEN CLIC EN EL BOTÓN DEL MENÚ, MOSTRAMOS EL MODAL
    if (btnAbrirModal) {
        btnAbrirModal.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
    }

    // 2. CUANDO HACEN CLIC EN LA "X", CERRAMOS EL MODAL
    if (btnCerrarModal) {
        btnCerrarModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // 3. SI HACEN CLIC FUERA DE LA CAJA BLANCA, TAMBIÉN SE CIERRA
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});