// =====================================
// MENÚ HAMBURGUESA
// =====================================

const botonMenu = document.getElementById("botonMenu");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");


// =====================================
// ABRIR / CERRAR MENÚ
// =====================================

botonMenu.addEventListener("click", function () {

    sidebar.classList.toggle("abierto");

    overlay.classList.toggle("activo");

    botonMenu.classList.toggle("activo");

});


// =====================================
// CERRAR AL HACER CLICK AFUERA
// =====================================

overlay.addEventListener("click", function () {

    cerrarMenu();

});


// =====================================
// CERRAR CON ESC
// =====================================

document.addEventListener("keydown", function (evento) {

    if (evento.key === "Escape") {

        cerrarMenu();

    }

});


// =====================================
// FUNCIÓN CERRAR MENÚ
// =====================================

function cerrarMenu() {

    sidebar.classList.remove("abierto");

    overlay.classList.remove("activo");

    botonMenu.classList.remove("activo");

}
/* =========================================
   LOGO SPRINT MÁSTER
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const logoContenedor = document.getElementById("logoContenedor");
    const logoImagen = document.getElementById("logoImagen");


    /* Animación de entrada */

    setTimeout(() => {
        logoContenedor.classList.add("logo-visible");
    }, 150);


    /* Animación al hacer click */

    logoImagen.addEventListener("click", () => {

        logoImagen.classList.remove("logo-click");

        void logoImagen.offsetWidth;

        logoImagen.classList.add("logo-click");
    });

});