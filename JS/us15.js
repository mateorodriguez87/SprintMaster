
document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // ACORDEÓN DE SOLUCIONES
    // ==========================================

    const tarjetas = document.querySelectorAll(".ej-tarjeta");

    tarjetas.forEach((tarjeta) => {

        const boton = tarjeta.querySelector(".ej-boton-solucion");
        const textoBoton = tarjeta.querySelector(".ej-texto-boton");
        const estado = tarjeta.querySelector(".ej-estado span");

        const solucion = tarjeta.querySelector(".ej-solucion");

        function actualizarEstado(abierta) {
            tarjeta.classList.toggle("abierta", abierta);

            boton.setAttribute("aria-expanded", String(abierta));

            const titulo = tarjeta.querySelector(".ej-tarjeta-titulo");
            const nombreEjercicio = titulo.textContent.trim();

            boton.setAttribute(
                "aria-label",
                `${abierta ? "Ocultar" : "Mostrar"} solución: ${nombreEjercicio}`
            );

            textoBoton.textContent = abierta
                ? "solución"
                : "solución";

            estado.textContent = abierta
                ? "Solución visible"
                : "Solución oculta";

            solucion.setAttribute("aria-hidden", String(!abierta));
        }

        // Sincroniza el estado inicial con el HTML.
        actualizarEstado(tarjeta.classList.contains("abierta"));

        boton.addEventListener("click", () => {
            const estaAbierta = tarjeta.classList.contains("abierta");
            actualizarEstado(!estaAbierta);
        });

    });


    // ==========================================
    // MENÚ HAMBURGUESA
    // ==========================================

    const botonMenu = document.getElementById("ejMenuBoton");
    const sidebar = document.getElementById("ejSidebar");
    const overlay = document.getElementById("ejOverlay");

    const enlacesMenu = sidebar.querySelectorAll("a");

    function abrirMenu() {
        sidebar.classList.add("abierto");
        overlay.classList.add("activo");
        botonMenu.classList.add("activo");

        sidebar.inert = false;

        botonMenu.setAttribute("aria-expanded", "true");
        botonMenu.setAttribute("aria-label", "Cerrar menú");
    }

    function cerrarMenu() {
        sidebar.classList.remove("abierto");
        overlay.classList.remove("activo");
        botonMenu.classList.remove("activo");

        sidebar.inert = true;

        botonMenu.setAttribute("aria-expanded", "false");
        botonMenu.setAttribute("aria-label", "Abrir menú");
    }

    botonMenu.addEventListener("click", () => {
        const abierto = sidebar.classList.contains("abierto");

        if (abierto) {
            cerrarMenu();
        } else {
            abrirMenu();
        }
    });

    overlay.addEventListener("click", cerrarMenu);

    enlacesMenu.forEach((enlace) => {
        enlace.addEventListener("click", cerrarMenu);
    });

    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") {
            cerrarMenu();
        }
    });

    cerrarMenu();

});