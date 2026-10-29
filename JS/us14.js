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