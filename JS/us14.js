document.addEventListener("DOMContentLoaded", () => {

    // Seleccionar los elementos del menú
    const botonMenu = document.getElementById("botonMenu");
    const menuLateral = document.getElementById("menuLateral");
    const fondoMenu = document.getElementById("fondoMenu");

    // Comprobar que los elementos existan
    if (!botonMenu || !menuLateral || !fondoMenu) {
        console.error("No se encontraron los elementos del menú.");
        return;
    }

    // Función para abrir el menú
    function abrirMenu() {

        menuLateral.classList.add("abierto");
        fondoMenu.classList.add("visible");
        botonMenu.classList.add("activo");

        botonMenu.setAttribute("aria-expanded", "true");
        botonMenu.setAttribute("aria-label", "Cerrar menú");

        menuLateral.setAttribute("aria-hidden", "false");
    }

    // Función para cerrar el menú
    function cerrarMenu() {

        menuLateral.classList.remove("abierto");
        fondoMenu.classList.remove("visible");
        botonMenu.classList.remove("activo");

        botonMenu.setAttribute("aria-expanded", "false");
        botonMenu.setAttribute("aria-label", "Abrir menú");

        menuLateral.setAttribute("aria-hidden", "true");
    }

    // Abrir o cerrar al hacer clic en el botón
    botonMenu.addEventListener("click", () => {

        if (menuLateral.classList.contains("abierto")) {
            cerrarMenu();
        } else {
            abrirMenu();
        }

    });

    // Cerrar al hacer clic sobre el fondo oscuro
    fondoMenu.addEventListener("click", () => {
        cerrarMenu();
    });

    // Cerrar al seleccionar una opción del menú
    menuLateral.querySelectorAll("a").forEach((enlace) => {

        enlace.addEventListener("click", () => {
            cerrarMenu();
        });

    });

    // Cerrar el menú al presionar Escape
    document.addEventListener("keydown", (evento) => {

        if (evento.key === "Escape") {
            cerrarMenu();
        }

    });

});
document.addEventListener("DOMContentLoaded", () => {

    // =========================================
    // ELEMENTOS DEL MENÚ LATERAL
    // =========================================

    const botonMenu = document.getElementById("faqMenuBoton");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    // Comprobar que existan los elementos
    if (!botonMenu || !sidebar || !overlay) {
        console.error("No se encontraron los elementos del menú lateral.");
        return;
    }

    // =========================================
    // ABRIR Y CERRAR MENÚ
    // =========================================

    function abrirMenu() {

        sidebar.classList.add("abierto");
        overlay.classList.add("activo");
        botonMenu.classList.add("activo");

        botonMenu.setAttribute("aria-expanded", "true");
        botonMenu.setAttribute("aria-label", "Cerrar menú");

        sidebar.setAttribute("aria-hidden", "false");
    }

    function cerrarMenu() {

        sidebar.classList.remove("abierto");
        overlay.classList.remove("activo");
        botonMenu.classList.remove("activo");

        botonMenu.setAttribute("aria-expanded", "false");
        botonMenu.setAttribute("aria-label", "Abrir menú");

        sidebar.setAttribute("aria-hidden", "true");
    }

    // =========================================
    // EVENTO DEL BOTÓN HAMBURGUESA
    // =========================================

    botonMenu.addEventListener("click", () => {

        if (sidebar.classList.contains("abierto")) {
            cerrarMenu();
        } else {
            abrirMenu();
        }

    });

    // =========================================
    // CERRAR AL HACER CLIC FUERA DEL MENÚ
    // =========================================

    overlay.addEventListener("click", cerrarMenu);

    // =========================================
    // CERRAR AL SELECCIONAR UN ENLACE
    // =========================================

    sidebar.querySelectorAll("a").forEach((enlace) => {

        enlace.addEventListener("click", cerrarMenu);

    });

    // =========================================
    // CERRAR CON LA TECLA ESCAPE
    // =========================================

    document.addEventListener("keydown", (evento) => {

        if (evento.key === "Escape") {
            cerrarMenu();
        }

    });

});