
document.addEventListener("DOMContentLoaded", () => {

    // =========================================
    // ELEMENTOS DEL FORMULARIO
    // =========================================

    const formulario = document.getElementById("formularioContacto");
    const campoNombre = document.getElementById("nombre");
    const campoEmail = document.getElementById("email");
    const campoMensaje = document.getElementById("mensaje");

    const contador = document.getElementById("contactoContador");
    const estado = document.getElementById("contactoEstado");
    const botonEnviar = document.getElementById("contactoBotonEnviar");

    // =========================================
    // CONTADOR DE CARACTERES
    // =========================================

    function actualizarContador() {
        contador.textContent = campoMensaje.value.length;
    }

    campoMensaje.addEventListener("input", actualizarContador);

    // =========================================
    // VALIDACIÓN DE NOMBRE
    // =========================================

    campoNombre.addEventListener("input", () => {
        campoNombre.setCustomValidity("");

        if (campoNombre.value.trim().length < 2) {
            campoNombre.setCustomValidity(
                "El nombre debe contener al menos 2 caracteres."
            );
        }
    });

    // =========================================
    // VALIDACIÓN DEL EMAIL
    // =========================================

    campoEmail.addEventListener("input", () => {
        campoEmail.setCustomValidity("");
    });

    // =========================================
    // MENSAJES DE ESTADO
    // =========================================

    function mostrarEstado(mensaje, tipo) {
        estado.textContent = mensaje;
        estado.className = "contacto-estado " + tipo;
        estado.hidden = false;
    }
// =========================================
// ENVÍO DEL FORMULARIO
// =========================================

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    campoNombre.value = campoNombre.value.trim();
    campoEmail.value = campoEmail.value.trim();
    campoMensaje.value = campoMensaje.value.trim();

    actualizarContador();

    // Comprobar los campos obligatorios
    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    // Validar el nombre
    if (campoNombre.value.length < 2) {
        campoNombre.setCustomValidity(
            "El nombre debe contener al menos 2 caracteres."
        );

        campoNombre.reportValidity();
        campoNombre.focus();
        return;
    }

    campoNombre.setCustomValidity("");

    // Validar el mensaje
    if (campoMensaje.value.length < 10) {
        campoMensaje.setCustomValidity(
            "El mensaje debe contener al menos 10 caracteres."
        );

        campoMensaje.reportValidity();
        campoMensaje.focus();
        return;
    }

    campoMensaje.setCustomValidity("");

    // Mostrar cartel verde
    mostrarEstado("✓ Enviado", "exito");

    estado.focus();

    // Limpiar los campos después de mostrar la confirmación
    formulario.reset();
    actualizarContador();
});
// =========================================
// MENÚ LATERAL ESTÁNDAR
// =========================================

const botonMenu = document.getElementById("faqMenuBoton");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function abrirMenu() {

    botonMenu.classList.add("activo");
    sidebar.classList.add("abierto");
    overlay.classList.add("activo");

    sidebar.inert = false;

    botonMenu.setAttribute("aria-expanded", "true");
    botonMenu.setAttribute("aria-label", "Cerrar menú");

    sidebar.setAttribute("aria-hidden", "false");

}

function cerrarMenu() {

    botonMenu.classList.remove("activo");
    sidebar.classList.remove("abierto");
    overlay.classList.remove("activo");

    sidebar.inert = true;

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

// Estado inicial

cerrarMenu();
});
