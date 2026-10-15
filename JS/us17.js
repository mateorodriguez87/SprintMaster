
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
    // MENÚ HAMBURGUESA
    // =========================================

    const botonMenu = document.getElementById("contactoMenuBoton");
    const sidebar = document.getElementById("contactoSidebar");
    const overlay = document.getElementById("contactoOverlay");
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
        if (sidebar.classList.contains("abierto")) {
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

    // Estado inicial
    cerrarMenu();
    actualizarContador();

});