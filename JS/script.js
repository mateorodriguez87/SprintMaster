
/* =====================================
   MENÚ HAMBURGUESA
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const botonMenu = document.getElementById("botonMenu");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");


    // Comprobar que existan los elementos

    if (!botonMenu || !sidebar || !overlay) {
        console.error("No se encontraron los elementos del menú.");
        return;
    }


    // =====================================
    // ABRIR MENÚ
    // =====================================

    function abrirMenu() {

        sidebar.classList.add("abierto");
        overlay.classList.add("activo");
        botonMenu.classList.add("activo");

        botonMenu.setAttribute("aria-expanded", "true");
        botonMenu.setAttribute("aria-label", "Cerrar menú");

        sidebar.removeAttribute("inert");

        document.body.style.overflow = "hidden";

    }


    // =====================================
    // CERRAR MENÚ
    // =====================================

    function cerrarMenu() {

        sidebar.classList.remove("abierto");
        overlay.classList.remove("activo");
        botonMenu.classList.remove("activo");

        botonMenu.setAttribute("aria-expanded", "false");
        botonMenu.setAttribute("aria-label", "Abrir menú");

        sidebar.setAttribute("inert", "");

        document.body.style.overflow = "";

    }


    // =====================================
    // CLICK EN HAMBURGUESA
    // =====================================

    botonMenu.addEventListener("click", function () {

        if (sidebar.classList.contains("abierto")) {
            cerrarMenu();
        } else {
            abrirMenu();
        }

    });


    // =====================================
    // CLICK FUERA DEL MENÚ
    // =====================================

    overlay.addEventListener("click", function () {

        cerrarMenu();

    });


    // =====================================
    // CERRAR CON ESCAPE
    // =====================================

    document.addEventListener("keydown", function (evento) {

        if (evento.key === "Escape") {
            cerrarMenu();
        }

    });


    // =====================================
    // CERRAR AL SELECCIONAR UN ENLACE
    // =====================================

    const enlaces = sidebar.querySelectorAll(".enlace-menu");

    enlaces.forEach(function (enlace) {

        enlace.addEventListener("click", function () {
            cerrarMenu();
        });

    });

});


/* =====================================
   LOGO SPRINT MÁSTER
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const logoContenedor = document.getElementById("logoContenedor");
    const logoImagen = document.getElementById("logoImagen");


    // Comprobar que exista el logo

    if (!logoContenedor || !logoImagen) {
        return;
    }


    // Animación de entrada

    setTimeout(function () {

        logoContenedor.classList.add("logo-visible");

    }, 150);


    // Animación al hacer click

    logoImagen.addEventListener("click", function () {

        logoImagen.classList.remove("logo-click");

        void logoImagen.offsetWidth;

        logoImagen.classList.add("logo-click");

    });

});
