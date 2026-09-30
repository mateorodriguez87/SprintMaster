/* =========================================
   MENÚ HAMBURGUESA
========================================= */

const botonMenu = document.getElementById("botonMenu");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");


/* =========================================
   ABRIR / CERRAR MENÚ
========================================= */

botonMenu.addEventListener("click", function () {

    botonMenu.classList.toggle("activo");

    sidebar.classList.toggle("abierto");

    overlay.classList.toggle("activo");

});


/* =========================================
   CERRAR AL HACER CLICK AFUERA
========================================= */

overlay.addEventListener("click", function () {

    botonMenu.classList.remove("activo");

    sidebar.classList.remove("abierto");

    overlay.classList.remove("activo");

});


/* =========================================
   CERRAR CON ESC
========================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        botonMenu.classList.remove("activo");

        sidebar.classList.remove("abierto");

        overlay.classList.remove("activo");

    }

});

/* =========================================
   FLIPS CARDS
========================================= */

const cards = document.querySelectorAll(".flip-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("girada");

    });

});

/* =========================================
   PANTALLA EMERGENTE
========================================= */
/* =====================================================
   TÉCNICAS DE DISEÑO DE PRUEBAS
   JAVASCRIPT AISLADO
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const qaTechContainer =
        document.getElementById("qaTechContainer");

    const qaTechBtnOpen =
        document.getElementById("qaTechBtnOpen");

    const qaTechBtnClose =
        document.getElementById("qaTechBtnClose");


    /* =================================================
       ABRIR PANTALLA COMPLETA
    ================================================= */

    if (qaTechBtnOpen) {

        qaTechBtnOpen.addEventListener("click", function () {

            if (qaTechContainer) {

                qaTechContainer.classList.add(
                    "qa-tech-fullscreen"
                );

            }

        });

    }


    /* =================================================
       CERRAR PANTALLA COMPLETA
    ================================================= */

    if (qaTechBtnClose) {

        qaTechBtnClose.addEventListener("click", function () {

            if (qaTechContainer) {

                qaTechContainer.classList.remove(
                    "qa-tech-fullscreen"
                );

            }

        });

    }


    /* =================================================
       CERRAR CON LA TECLA ESC
    ================================================= */

    document.addEventListener("keydown", function (evento) {

        if (
            evento.key === "Escape" &&
            qaTechContainer &&
            qaTechContainer.classList.contains(
                "qa-tech-fullscreen"
            )
        ) {

            qaTechContainer.classList.remove(
                "qa-tech-fullscreen"
            );

        }

    });

});