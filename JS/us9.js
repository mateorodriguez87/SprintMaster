
/* =========================================
   US9 - METODOLOGÍAS ÁGILES
========================================= */

const us9Metodologias = {
    scrum: {
        titulo: "Ciclo Sprint",
        ayudaImagen: "Colocá aquí el diagrama del ciclo Sprint.",

        parrafos: [
            {
                etiqueta: "",
                texto: "Es un marco de trabajo enfocado en la entrega iterativa e incremental de productos. El trabajo se organiza en ciclos de tiempo fijos y cortos denominados Sprints, habitualmente de 1 a 4 semanas."
            },
            {
                etiqueta: "Planificación (Sprint Planning): ",
                texto: "El equipo selecciona del Product Backlog los elementos con mayor prioridad que se compromete a entregar al finalizar el ciclo."
            },
            {
                etiqueta: "Ejecución y Seguimiento Diario (Daily Scrum): ",
                texto: "Durante el Sprint, el equipo realiza reuniones breves para sincronizar avances, coordinar actividades y detectar posibles bloqueos."
            },
            {
                etiqueta: "Revisiones y Mejora (Review & Retrospective): ",
                texto: "Al terminar la iteración, se presenta un incremento de software funcional para su revisión con las partes interesadas. Después, el equipo analiza su dinámica de trabajo para aplicar mejoras continuas en la siguiente iteración."
            }
        ]
    },

    kanban: {
        titulo: "Flujo Kanban",
        ayudaImagen: "Colocá aquí la imagen del tablero Kanban.",

        parrafos: [
            {
                etiqueta: "",
                texto: "Es un método de gestión visual del trabajo orientado a optimizar el flujo continuo y evitar la sobrecarga de tareas en el equipo. A diferencia de Scrum, no se basa necesariamente en ciclos de tiempo fijos, sino en la entrega constante de valor."
            },
            {
                etiqueta: "Tablero Visual: ",
                texto: "Utiliza columnas que representan las distintas etapas por las que pasa una tarea, por ejemplo: Pendiente, En Curso y Hecho. Esto permite observar el estado del trabajo."
            },
            {
                etiqueta: "Gestión del Trabajo en Proceso (WIP): ",
                texto: "Limita la cantidad de tareas que se pueden realizar simultáneamente en cada columna. Esto ayuda a identificar cuellos de botella y reducir el tiempo necesario para completar una tarea desde que se inicia hasta que se entrega."
            },
            {
                etiqueta: "Flujo continuo: ",
                texto: "Las tareas avanzan por las etapas del tablero a medida que el equipo tiene capacidad para realizarlas, facilitando la identificación de demoras y la mejora del proceso."
            }
        ]
    },

    xp: {
        titulo: "Programación Extrema (XP)",
        ayudaImagen: "Colocá aquí la imagen o el diagrama de XP.",

        parrafos: [
            {
                etiqueta: "",
                texto: "Extreme Programming (XP) es una metodología ágil diseñada para optimizar la calidad del software y responder rápidamente a los cambios en los requisitos mediante prácticas de ingeniería sólidas y comunicación continua."
            },
            {
                etiqueta: "Desarrollo Guiado por Pruebas (TDD): ",
                texto: "Se escriben las pruebas automatizadas antes que el código de la funcionalidad. De esta manera, se comprueba el comportamiento esperado y se detectan errores durante el desarrollo."
            },
            {
                etiqueta: "Programación en Pareja (Pair Programming): ",
                texto: "Dos desarrolladores trabajan juntos en la misma estación de trabajo. Uno escribe el código mientras el otro revisa la lógica, lo que mejora la calidad y distribuye el conocimiento dentro del equipo."
            },
            {
                etiqueta: "Integración Continua y Refactorización: ",
                texto: "El código desarrollado se integra y prueba frecuentemente para detectar conflictos de forma temprana y mantener una estructura limpia y mantenible."
            }
        ]
    }
};

/* ELEMENTOS HTML */

const us9Titulo = document.getElementById("us9Titulo");
const us9Texto = document.getElementById("us9Texto");
const us9AyudaImagen = document.getElementById("us9ImagenAyuda");
const us9Placeholder = document.getElementById("us9ImagenPlaceholder");

const us9Panel = document.getElementById("us9Panel");
const us9Cerrar = document.getElementById("us9Cerrar");

const us9BotonesSelector = document.querySelectorAll(
    ".us9-selector-boton"
);

const us9MenuBoton = document.getElementById("us9MenuBoton");
const us9Menu = document.getElementById("us9Menu");

let us9MetodologiaActual = "scrum";

/* MOSTRAR UNA METODOLOGÍA */

function us9MostrarMetodologia(nombre) {
    const datos = us9Metodologias[nombre];

    if (!datos) {
        return;
    }

    us9MetodologiaActual = nombre;

    // Actualizar el título.
    us9Titulo.textContent = datos.titulo;

    // Actualizar la explicación.
    us9Texto.innerHTML = datos.parrafos.map(parrafo => `
        <p>
            ${parrafo.etiqueta
                ? `<strong>${parrafo.etiqueta}</strong>`
                : ""}
            ${parrafo.texto}
        </p>
    `).join("");

    // Actualizar el texto de ayuda del espacio para imágenes.
    us9AyudaImagen.textContent = datos.ayudaImagen;

    // Marcar el botón seleccionado.
    us9BotonesSelector.forEach(boton => {
        const seleccionado =
            boton.dataset.metodologia === nombre;

        boton.classList.toggle("activo", seleccionado);
        boton.setAttribute(
            "aria-pressed",
            String(seleccionado)
        );
    });

    // Mantener visible el espacio para colocar imágenes.
    us9Placeholder.hidden = false;
}

/* BOTONES DE SELECCIÓN */

us9BotonesSelector.forEach(boton => {
    boton.addEventListener("click", () => {
        us9MostrarMetodologia(boton.dataset.metodologia);
    });
});

/* BOTÓN CERRAR */

us9Cerrar.addEventListener("click", () => {
    // El botón oculta el panel y permite volver a abrirlo.
    const estaOculto = us9Panel.hidden;

    us9Panel.hidden = !estaOculto;
    us9Cerrar.setAttribute(
        "aria-label",
        estaOculto ? "Cerrar detalle" : "Mostrar detalle"
    );
});

/* MENÚ DESPLEGABLE */

us9MenuBoton.addEventListener("click", () => {
    const abrir = us9Menu.hidden;

    us9Menu.hidden = !abrir;
    us9MenuBoton.classList.toggle("activo", abrir);

    us9MenuBoton.setAttribute(
        "aria-expanded",
        String(abrir)
    );

    us9MenuBoton.setAttribute(
        "aria-label",
        abrir ? "Cerrar menú" : "Abrir menú"
    );
});

/* OPCIONES DEL MENÚ */

us9Menu.querySelectorAll("[data-metodologia]").forEach(enlace => {
    enlace.addEventListener("click", evento => {
        evento.preventDefault();

        const nombre = enlace.dataset.metodologia;

        us9MostrarMetodologia(nombre);

        // Si el panel estaba oculto, volver a mostrarlo.
        us9Panel.hidden = false;

        // Cerrar el menú.
        us9Menu.hidden = true;
        us9MenuBoton.classList.remove("activo");
        us9MenuBoton.setAttribute("aria-expanded", "false");
        us9MenuBoton.setAttribute("aria-label", "Abrir menú");

        // Actualizar la vista.
        document.querySelector(".us9-contenedor").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

/* CERRAR EL MENÚ AL HACER CLIC AFUERA */

document.addEventListener("click", evento => {
    if (
        !us9Menu.hidden &&
        !us9Menu.contains(evento.target) &&
        !us9MenuBoton.contains(evento.target)
    ) {
        us9Menu.hidden = true;
        us9MenuBoton.classList.remove("activo");
        us9MenuBoton.setAttribute("aria-expanded", "false");
        us9MenuBoton.setAttribute("aria-label", "Abrir menú");
    }
});

/* INICIALIZAR */

us9MostrarMetodologia(us9MetodologiaActual);
