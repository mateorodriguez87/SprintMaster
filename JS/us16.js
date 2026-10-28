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
   2. ABRIR Y CERRAR EL MENÚ LATERAL
===================================================== */

function cambiarMenu(abrir) {

    botonMenu.classList.toggle("activo", abrir);

    menuLateral.classList.toggle("abierto", abrir);

    superposicion.classList.toggle("visible", abrir);

    document.body.classList.toggle("menu-abierto", abrir);

    botonMenu.setAttribute(
        "aria-expanded",
        String(abrir)
    );

    botonMenu.setAttribute(
        "aria-label",
        abrir ? "Cerrar menú" : "Abrir menú"
    );

    menuLateral.setAttribute(
        "aria-hidden",
        String(!abrir)
    );

}


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