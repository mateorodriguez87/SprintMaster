
document.addEventListener("DOMContentLoaded", () => {
    const preguntas = document.querySelectorAll(".faq-pregunta");

    preguntas.forEach((pregunta) => {
        pregunta.addEventListener("click", () => {
            const itemActual = pregunta.closest(".faq-item");
            const estabaAbierto = itemActual.classList.contains("activo");

            // Cerrar todos los paneles abiertos
            document.querySelectorAll(".faq-item.activo").forEach((item) => {
                item.classList.remove("activo");

                const boton = item.querySelector(".faq-pregunta");
                const icono = item.querySelector(".faq-icono");

                boton.setAttribute("aria-expanded", "false");
                icono.textContent = "+";
            });

            // Abrir el seleccionado si antes estaba cerrado
            if (!estabaAbierto) {
                itemActual.classList.add("activo");

                pregunta.setAttribute("aria-expanded", "true");
                itemActual.querySelector(".faq-icono").textContent = "−";
            }
        });
    });

    // Menú hamburguesa visual
    const menuBoton = document.getElementById("faqMenuBoton");

    if (menuBoton) {
        menuBoton.addEventListener("click", () => {
            const abierto = menuBoton.classList.toggle("activo");

            menuBoton.setAttribute("aria-expanded", String(abierto));
            menuBoton.setAttribute(
                "aria-label",
                abierto ? "Cerrar menú" : "Abrir menú"
            );
        });
    }
});
// =========================================
// CONTROL DEL MENÚ LATERAL
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const botonMenu = document.getElementById("faqMenuBoton");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    if (!botonMenu || !sidebar || !overlay) return;

    function toggleMenu() {

        botonMenu.classList.toggle("activo");
        sidebar.classList.toggle("abierto");
        overlay.classList.toggle("activo");

        const menuAbierto = sidebar.classList.contains("abierto");

        botonMenu.setAttribute("aria-expanded", menuAbierto);

        botonMenu.setAttribute(
            "aria-label",
            menuAbierto ? "Cerrar menú" : "Abrir menú"
        );
    }

    botonMenu.addEventListener("click", toggleMenu);

    overlay.addEventListener("click", toggleMenu);

});