/* =====================================================
   US9 - METODOLOGÍAS ÁGILES
   JavaScript completo y corregido
===================================================== */


/* ================= DATOS ================= */

const us9Metodologias = {
    scrum: {
        titulo: "Ciclo Sprint",
        imagen: "../imagenes/Ciclo_sprint.jpeg",
        textoImagen: "Diagrama del ciclo Sprint",

        descripcion: [
            {
                etiqueta: "",
                texto: "Es un marco de trabajo enfocado en la entrega iterativa e incremental de productos. El trabajo se organiza en ciclos de tiempo fijos y cortos denominados Sprints, habitualmente de 1 a 4 semanas."
            },
            {
                etiqueta: "Planificación del Sprint: ",
                texto: "El equipo selecciona los elementos de mayor prioridad de la Pila del Producto (Product Backlog) y define el trabajo que se compromete a completar durante el ciclo."
            },
            {
                etiqueta: "Seguimiento diario: ",
                texto: "Durante el Sprint, el equipo realiza reuniones breves para sincronizar los avances, coordinar actividades y detectar posibles bloqueos."
            },
            {
                etiqueta: "Revisión del Sprint: ",
                texto: "Al finalizar el ciclo, se presenta el incremento del producto para revisar el trabajo realizado y obtener retroalimentación."
            },
            {
                etiqueta: "Retrospectiva: ",
                texto: "El equipo analiza su forma de trabajar, identifica oportunidades de mejora y acuerda cambios para el siguiente Sprint."
            }
        ]
    },

    kanban: {
        titulo: "Flujo Kanban",
        imagen: "../Imagenes/Flujo_Kanban.jpeg",
        textoImagen: "Diagrama del flujo Kanban",

        descripcion: [
            {
                etiqueta: "",
                texto: "Kanban es un método de gestión visual del trabajo orientado a optimizar el flujo continuo y evitar la sobrecarga de tareas en el equipo. Permite observar el estado de cada actividad y detectar demoras."
            },
            {
                etiqueta: "Tablero visual: ",
                texto: "Las tareas se representan en tarjetas que avanzan por distintas columnas. Un ejemplo sencillo de organización es Pendiente, En Curso y Hecho."
            },
            {
                etiqueta: "Límite de trabajo en progreso (WIP): ",
                texto: "Se establece una cantidad máxima de tareas que pueden estar en curso simultáneamente. Esto ayuda a reducir la sobrecarga y facilita la identificación de cuellos de botella."
            },
            {
                etiqueta: "Flujo continuo: ",
                texto: "Las tareas se incorporan y avanzan según la capacidad del equipo, sin depender necesariamente de ciclos de tiempo fijos."
            },
            {
                etiqueta: "Mejora del proceso: ",
                texto: "La visualización del trabajo permite identificar problemas en el flujo y aplicar cambios para mejorar la eficiencia de las entregas."
            }
        ]
    },

    xp: {
        titulo: "Programación Extrema (XP Programming)",
        imagen: "../Imagenes/Programacion_extrema.jpeg",
        textoImagen: "Diagrama de Programación Extrema",

        descripcion: [
            {
                etiqueta: "",
                texto: "Extreme Programming (XP) es una metodología ágil diseñada para optimizar la calidad del software y responder rápidamente a los cambios en los requisitos mediante prácticas de ingeniería."
            },
            {
                etiqueta: "Planificación: ",
                texto: "Se identifican las necesidades del cliente y se seleccionan las funcionalidades que se desarrollarán, considerando su prioridad."
            },
            {
                etiqueta: "Programación en parejas: ",
                texto: "Dos desarrolladores colaboran en una misma tarea. Uno escribe el código mientras el otro lo revisa, favoreciendo la detección temprana de errores."
            },
            {
                etiqueta: "Pruebas: ",
                texto: "Se realizan pruebas frecuentes para comprobar que las funcionalidades se comporten como se espera y detectar defectos durante el desarrollo."
            },
            {
                etiqueta: "Integración y mejora: ",
                texto: "El código se integra de forma frecuente y se revisa para mantener su calidad, facilitar los cambios y reducir los problemas de integración."
            }
        ]
    }
};


/* ================= INICIALIZACIÓN ================= */

document.addEventListener("DOMContentLoaded", function () {

    const tarjetas = document.querySelectorAll(
        ".us9-tarjeta-boton"
    );

    const modal = document.getElementById("us9Modal");
    const modalContenido = document.querySelector(
        ".us9-modal-contenido"
    );
    const modalTitulo = document.getElementById("us9ModalTitulo");
    const modalTexto = document.getElementById("us9ModalTexto");
    const modalImagen = document.getElementById("us9ModalImagen");
    const botonCerrar = document.getElementById("us9ModalCerrar");

    const menuBoton = document.getElementById("us9MenuBoton");
    const menu = document.getElementById("us9Menu");

    let elementoAnterior = null;


    /* Comprobar que el modal exista */

    if (
        !modal ||
        !modalContenido ||
        !modalTitulo ||
        !modalTexto ||
        !modalImagen ||
        !botonCerrar
    ) {
        console.error(
            "Error US9: falta uno o más elementos del modal. Revisá los ID del HTML."
        );
        return;
    }


    /* ================= ABRIR MODAL ================= */

    function abrirDetalle(nombre) {

        const metodologia = us9Metodologias[nombre];

        if (!metodologia) {
            console.error(
                "No se encontró la metodología:",
                nombre
            );
            return;
        }

        elementoAnterior = document.activeElement;

        /* Título */

        modalTitulo.textContent = metodologia.titulo;


        /* Descripción */

        modalTexto.replaceChildren();

        metodologia.descripcion.forEach(function (item) {

            const parrafo = document.createElement("p");

            if (item.etiqueta) {
                const negrita = document.createElement("strong");

                negrita.textContent = item.etiqueta;
                parrafo.appendChild(negrita);
            }

            parrafo.appendChild(
                document.createTextNode(item.texto)
            );

            modalTexto.appendChild(parrafo);

        });


        /* Imagen */

        modalImagen.replaceChildren();

        if (metodologia.imagen && metodologia.imagen.trim() !== "") {

            const imagen = document.createElement("img");

            imagen.src = metodologia.imagen;
            imagen.alt = metodologia.textoImagen;

            imagen.addEventListener("error", function () {

                const aviso = document.createElement("p");

                aviso.className = "us9-modal-aviso-imagen";
                aviso.textContent =
                    "No se pudo cargar la imagen. Revisá la ruta del archivo.";

                modalImagen.replaceChildren(aviso);

                console.error(
                    "Error al cargar la imagen:",
                    metodologia.imagen
                );

            }, { once: true });

            modalImagen.appendChild(imagen);

        } else {

            /* Conserva el espacio reservado si aún no hay imagen */

            const espacio = document.createElement("div");

            espacio.setAttribute("aria-hidden", "true");

            modalImagen.appendChild(espacio);
        }


        /* Mostrar ventana */

        modal.hidden = false;
        modal.setAttribute("aria-hidden", "false");

        document.body.classList.add("us9-modal-abierto");

        botonCerrar.focus();

    }


    /* ================= CERRAR MODAL ================= */

    function cerrarDetalle() {

        if (modal.hidden) {
            return;
        }

        modal.hidden = true;
        modal.setAttribute("aria-hidden", "true");

        document.body.classList.remove("us9-modal-abierto");

        if (
            elementoAnterior &&
            document.contains(elementoAnterior)
        ) {
            elementoAnterior.focus();
        }

    }


    /* ================= EVENTOS DE LAS TARJETAS ================= */

    tarjetas.forEach(function (tarjeta) {

        tarjeta.addEventListener("click", function (evento) {

            evento.preventDefault();

            const nombre = tarjeta.getAttribute("data-metodologia");

            console.log("Tarjeta seleccionada:", nombre);

            if (!nombre || !us9Metodologias[nombre]) {
                console.error(
                    "La tarjeta no tiene un valor válido en data-metodologia:",
                    nombre
                );
                return;
            }

            abrirDetalle(nombre);

        });

    });


    /* ================= BOTÓN CERRAR ================= */

    botonCerrar.addEventListener("click", cerrarDetalle);


    /* Cerrar al hacer clic en el fondo oscuro */

    modal.addEventListener("click", function (evento) {

        if (evento.target === modal) {
            cerrarDetalle();
        }

    });


    /* Cerrar con Escape */

    document.addEventListener("keydown", function (evento) {

        if (evento.key === "Escape" && !modal.hidden) {
            cerrarDetalle();
        }

    });


    /* ================= MENÚ HAMBURGUESA ================= */

    if (menuBoton && menu) {

        menuBoton.addEventListener("click", function (evento) {

            evento.stopPropagation();

            const abrir = menu.hidden;

            menu.hidden = !abrir;

            menuBoton.classList.toggle("activo", abrir);

            menuBoton.setAttribute(
                "aria-expanded",
                String(abrir)
            );

            menuBoton.setAttribute(
                "aria-label",
                abrir ? "Cerrar menú" : "Abrir menú"
            );

        });


        /* Cerrar al seleccionar un enlace */

        menu.querySelectorAll("a").forEach(function (enlace) {

            enlace.addEventListener("click", function (evento) {

                if (enlace.hasAttribute("data-us9-sin-navegacion")) {
                    evento.preventDefault();
                }

                menu.hidden = true;
                menuBoton.classList.remove("activo");

                menuBoton.setAttribute("aria-expanded", "false");
                menuBoton.setAttribute("aria-label", "Abrir menú");

            });

        });


        /* Cerrar al hacer clic fuera del menú */

        document.addEventListener("click", function (evento) {

            if (
                !menu.hidden &&
                !menu.contains(evento.target) &&
                !menuBoton.contains(evento.target)
            ) {
                menu.hidden = true;
                menuBoton.classList.remove("activo");

                menuBoton.setAttribute("aria-expanded", "false");
                menuBoton.setAttribute("aria-label", "Abrir menú");
            }

        });

    }


    /* ================= MENSAJE DE INICIALIZACIÓN ================= */

    console.log(
        "US9 cargado correctamente. Tarjetas detectadas:",
        tarjetas.length
    );

});