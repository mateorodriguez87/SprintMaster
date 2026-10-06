document.addEventListener("DOMContentLoaded", () => {

    const filtroPrincipal = document.getElementById("filtroPrincipal");
    const filtroMenu = document.getElementById("filtroMenu");
    const textoFiltro = document.getElementById("textoFiltro");

    const opcionesFiltro = document.querySelectorAll(".opcion-filtro");
    const herramientas = document.querySelectorAll(".herramienta-card");

    const tituloCategoria = document.getElementById("tituloCategoria");
    const descripcionCategoria = document.getElementById("descripcionCategoria");


    /* =========================================
       ABRIR / CERRAR MINI MENÚ
    ========================================= */

    filtroPrincipal.addEventListener("click", () => {

        filtroMenu.classList.toggle("activo");

    });


    /* =========================================
       FILTRAR HERRAMIENTAS
    ========================================= */

    opcionesFiltro.forEach(opcion => {

        opcion.addEventListener("click", () => {

            const categoria = opcion.dataset.categoria;
            const nombreCategoria = opcion.textContent.trim();


            /* Cambiar el texto del botón */

            textoFiltro.textContent = nombreCategoria;


            /* Cambiar título */

            tituloCategoria.textContent = nombreCategoria;


            /* Cambiar descripción */

            if (categoria === "test-management") {

                descripcionCategoria.textContent =
                    "Herramientas para planificar, ejecutar y gestionar procesos de prueba de software.";

            }

            else if (categoria === "linters") {

                descripcionCategoria.textContent =
                    "Herramientas de análisis estático de código, prevención de errores y formateo.";

            }

            else if (categoria === "bug-trackers") {

                descripcionCategoria.textContent =
                    "Herramientas para registrar, controlar y realizar seguimiento de errores y defectos.";

            }


            /* Mostrar solamente la categoría seleccionada */

            herramientas.forEach(herramienta => {

                if (herramienta.dataset.categoria === categoria) {

                    herramienta.classList.remove("oculta");

                } else {

                    herramienta.classList.add("oculta");

                }

            });


            /* Cerrar el menú */

            filtroMenu.classList.remove("activo");

        });

    });


    /* =========================================
       CERRAR MENÚ AL HACER CLICK AFUERA
    ========================================= */

    document.addEventListener("click", (evento) => {

        if (
            !filtroPrincipal.contains(evento.target) &&
            !filtroMenu.contains(evento.target)
        ) {

            filtroMenu.classList.remove("activo");

        }

    });

});