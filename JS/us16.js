/* =====================================================
   SISTEMAS DE GESTIÓN DE CALIDAD
   JAVASCRIPT - SOBRE NOSOTROS
===================================================== */


/* =====================================================
   1. ELEMENTOS DEL MENÚ
===================================================== */

const botonMenu = document.getElementById("botonMenu");
const menuLateral = document.getElementById("menuLateral");
const superposicion = document.getElementById("superposicion");

/* =====================================================
   1. CONTROL DEL MENÚ LATERAL
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const botonMenu = document.getElementById("faqMenuBoton");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    if (!botonMenu || !sidebar || !overlay) {
        console.error("No se encontraron los elementos del menú lateral.");
        return;
    }

    function abrirMenu() {

        botonMenu.classList.add("activo");
        sidebar.classList.add("abierto");
        overlay.classList.add("activo");

        botonMenu.setAttribute("aria-expanded", "true");
        botonMenu.setAttribute("aria-label", "Cerrar menú");

        sidebar.setAttribute("aria-hidden", "false");

    }

    function cerrarMenu() {

        botonMenu.classList.remove("activo");
        sidebar.classList.remove("abierto");
        overlay.classList.remove("activo");

        botonMenu.setAttribute("aria-expanded", "false");
        botonMenu.setAttribute("aria-label", "Abrir menú");

        sidebar.setAttribute("aria-hidden", "true");

    }

    botonMenu.addEventListener("click", () => {

        if (sidebar.classList.contains("abierto")) {
            cerrarMenu();
        } else {
            abrirMenu();
        }

    });

    overlay.addEventListener("click", cerrarMenu);

    sidebar.querySelectorAll(".enlace-menu").forEach((enlace) => {

        enlace.addEventListener("click", cerrarMenu);

    });

    document.addEventListener("keydown", (evento) => {

        if (evento.key === "Escape") {
            cerrarMenu();
        }

    });

});


/* =====================================================
   3. EVENTO DEL BOTÓN HAMBURGUESA
===================================================== */

botonMenu.addEventListener("click", () => {

    const estaAbierto =
        menuLateral.classList.contains("abierto");

    cambiarMenu(!estaAbierto);

});


/* =====================================================
   4. CERRAR EL MENÚ AL HACER CLIC EN EL FONDO
===================================================== */

superposicion.addEventListener("click", () => {

    cambiarMenu(false);

});


/* =====================================================
   5. CERRAR EL MENÚ AL SELECCIONAR UN ENLACE
===================================================== */

menuLateral.querySelectorAll("a").forEach((enlace) => {

    enlace.addEventListener("click", () => {

        cambiarMenu(false);

    });

});


/* =====================================================
   6. CERRAR EL MENÚ CON LA TECLA ESCAPE
===================================================== */

document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape") {

        cambiarMenu(false);

    }

});

/* =====================================================
   EXPANSIÓN DE TARJETAS AL HACER CLIC
   ===================================================== */

const tarjetas = document.querySelectorAll(".tarjetas .tarjeta");

let tarjetaAmpliada = null;

function cerrarTarjetaAmpliada() {
    if (!tarjetaAmpliada) return;

    tarjetaAmpliada.remove();
    tarjetaAmpliada = null;

    document.body.style.overflow = "";
}

function ampliarTarjeta(tarjeta) {
    // Evita abrir varias tarjetas simultáneamente.
    if (tarjetaAmpliada) return;

    // Crear el fondo oscuro.
    const overlay = document.createElement("div");
    overlay.className = "expansion-tarjeta-overlay";

    // Copiar la tarjeta seleccionada.
    const copia = tarjeta.cloneNode(true);
    copia.classList.add("tarjeta-ampliada");
    copia.removeAttribute("id");

    // Evitar identificadores duplicados.
    copia.querySelectorAll("[id]").forEach((elemento) => {
        elemento.removeAttribute("id");
    });

    // Botón para cerrar.
    const botonCerrar = document.createElement("button");
    botonCerrar.className = "cerrar-tarjeta-ampliada";
    botonCerrar.type = "button";
    botonCerrar.textContent = "×";
    botonCerrar.setAttribute("aria-label", "Cerrar tarjeta");

    copia.prepend(botonCerrar);
    overlay.appendChild(copia);
    document.body.appendChild(overlay);

    tarjetaAmpliada = overlay;
    document.body.style.overflow = "hidden";

    // Cerrar con el botón X.
    botonCerrar.addEventListener("click", (evento) => {
        evento.stopPropagation();
        cerrarTarjetaAmpliada();
    });

    // Cerrar haciendo clic en el fondo oscuro.
    overlay.addEventListener("click", (evento) => {
        if (evento.target === overlay) {
            cerrarTarjetaAmpliada();
        }
    });
}

// Abrir cada tarjeta únicamente al hacer clic.
tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener("click", () => {
        ampliarTarjeta(tarjeta);
    });
});

// Cerrar al presionar Escape.
document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
        cerrarTarjetaAmpliada();
    }   
});
