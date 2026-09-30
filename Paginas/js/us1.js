// ================================
// MENÚ HAMBURGUESA
// ================================

const botonMenu = document.getElementById("botonMenu");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");


// Abrir / cerrar menú
botonMenu.addEventListener("click", () => {

    sidebar.classList.toggle("abierto");
    overlay.classList.toggle("activo");
    botonMenu.classList.toggle("activo");

});


// Cerrar haciendo clic fuera del menú
overlay.addEventListener("click", () => {

    cerrarMenu();

});


// Cerrar con la tecla ESC
document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape") {

        cerrarMenu();

    }

});


// Función para cerrar el menú
function cerrarMenu() {

    sidebar.classList.remove("abierto");
    overlay.classList.remove("activo");
    botonMenu.classList.remove("activo");

}