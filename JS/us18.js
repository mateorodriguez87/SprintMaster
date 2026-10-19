
/**
 * US-18: Comparador Interactivo de Metodologías
 * Selecciona dos o más metodologías para comparar sus características.
 */

const metodologias = {
  Scrum: {
    "Enfoque de Proceso": "Iterativo / incremental",
    "Planificación": "Sprints",
    "Roles y Responsabilidades":
      "Definidos (Scrum Master, Product Owner y equipo de desarrollo)",
    "Flexibilidad": "Alta",
    "Calidad y Mejora": "Revisión y mejora continua",
    "Entregables Clave": "Incremento potencialmente entregable",
    "Métricas Principales": "Velocidad",
    "Tiempo de Entrega": "Corto (por Sprint)"
  },

  Kanban: {
    "Enfoque de Proceso": "Flujo continuo",
    "Planificación": "Flujo continuo; sin Sprints obligatorios",
    "Roles y Responsabilidades": "Conserva los roles existentes",
    "Flexibilidad": "Alta",
    "Calidad y Mejora": "Mejora continua del flujo",
    "Entregables Clave": "Tareas o funcionalidades terminadas",
    "Métricas Principales": "Tiempo de ciclo y rendimiento del flujo",
    "Tiempo de Entrega": "Continuo, según el flujo"
  },

  CMMI: {
    "Enfoque de Proceso": "Proceso definido y optimizado",
    "Planificación": "Procesos y niveles de madurez",
    "Roles y Responsabilidades": "Roles y responsabilidades estructurados",
    "Flexibilidad": "Más formal y controlada",
    "Calidad y Mejora": "Evaluación y mejora de procesos",
    "Entregables Clave": "Procesos documentados y evidencias",
    "Métricas Principales": "Niveles de capacidad y desempeño",
    "Tiempo de Entrega": "Depende del proceso y su planificación"
  },

  Cascada: {
    "Enfoque de Proceso": "Secuencial por etapas",
    "Planificación": "Plan inicial dividido en fases",
    "Roles y Responsabilidades": "Responsabilidades definidas por fase",
    "Flexibilidad": "Baja ante cambios tardíos",
    "Calidad y Mejora": "Pruebas y revisiones planificadas",
    "Entregables Clave": "Documentación y sistema terminado",
    "Métricas Principales": "Avance, costos y cumplimiento del plan",
    "Tiempo de Entrega": "Generalmente al final del proyecto"
  },

  Incremental: {
    "Enfoque de Proceso": "Desarrollo en incrementos",
    "Planificación": "Entregas planificadas por partes",
    "Roles y Responsabilidades": "Según la organización del equipo",
    "Flexibilidad": "Media/alta entre incrementos",
    "Calidad y Mejora": "Pruebas y ajustes en cada incremento",
    "Entregables Clave": "Versiones funcionales progresivas",
    "Métricas Principales": "Funcionalidades completadas y avance",
    "Tiempo de Entrega": "Por entregas sucesivas"
  },

  "Modelo en V": {
    "Enfoque de Proceso":
      "Desarrollo con verificación y validación asociadas",
    "Planificación": "Fases y pruebas planificadas",
    "Roles y Responsabilidades":
      "Responsabilidades definidas por fase y prueba",
    "Flexibilidad": "Baja/media ante cambios de requisitos",
    "Calidad y Mejora": "Pruebas vinculadas a cada etapa",
    "Entregables Clave":
      "Documentación, resultados de pruebas y sistema validado",
    "Métricas Principales": "Defectos y cumplimiento de requisitos",
    "Tiempo de Entrega": "Según fases y validaciones"
  },

  XP: {
    "Enfoque de Proceso":
      "Ágil, iterativo y orientado a la colaboración",
    "Planificación": "Iteraciones y entregas pequeñas",
    "Roles y Responsabilidades":
      "Colaboración entre cliente y equipo técnico",
    "Flexibilidad": "Alta",
    "Calidad y Mejora": "Pruebas frecuentes e integración continua",
    "Entregables Clave": "Versiones pequeñas y funcionales",
    "Métricas Principales":
      "Pruebas, defectos y avance de iteraciones",
    "Tiempo de Entrega": "Corto y frecuente"
  }
};

const caracteristicas = [
  "Enfoque de Proceso",
  "Planificación",
  "Roles y Responsabilidades",
  "Flexibilidad",
  "Calidad y Mejora",
  "Entregables Clave",
  "Métricas Principales",
  "Tiempo de Entrega"
];

// Elementos del HTML
const listaMetodologias =
  document.getElementById("listaMetodologias");

const tabla =
  document.getElementById("tablaComparativa");

const mensajeSeleccion =
  document.getElementById("mensajeSeleccion");

// Selecciones iniciales
const seleccionadas = new Set([
  "Scrum",
  "Kanban",
  "CMMI"
]);

// Generar las casillas de selección
function renderizarCheckboxes() {
  listaMetodologias.innerHTML = Object.keys(metodologias)
    .map(nombre => `
      <label class="opcion-metodologia">
        <input
          type="checkbox"
          value="${nombre}"
          ${seleccionadas.has(nombre) ? "checked" : ""}
        >

        <span
          class="checkbox-personalizado"
          aria-hidden="true">
        </span>

        <span class="nombre-metodologia">
          ${nombre}
        </span>
      </label>
    `)
    .join("");

  listaMetodologias
    .querySelectorAll('input[type="checkbox"]')
    .forEach(input => {
      input.addEventListener("change", () => {
        if (input.checked) {
          seleccionadas.add(input.value);
        } else {
          seleccionadas.delete(input.value);
        }

        renderizarTabla();
      });
    });
}

// Actualizar la tabla según las metodologías seleccionadas
function renderizarTabla() {
  const nombres = Object.keys(metodologias).filter(
    nombre => seleccionadas.has(nombre)
  );

  // Se necesitan al menos dos metodologías
  if (nombres.length < 2) {
    tabla.querySelector("thead").innerHTML = "";

    tabla.querySelector("tbody").innerHTML = `
      <tr>
        <td class="mensaje-tabla" colspan="2">
          Selecciona al menos dos metodologías para compararlas.
        </td>
      </tr>
    `;

    mensajeSeleccion.textContent =
      "Selecciona al menos dos metodologías.";

    return;
  }

  mensajeSeleccion.textContent =
    `${nombres.length} metodologías seleccionadas.`;

  // Encabezado de las columnas
  tabla.querySelector("thead").innerHTML = `
    <tr>
      <th scope="col">Característica Clave</th>

      ${nombres.map(nombre => `
        <th scope="col">${nombre}</th>
      `).join("")}
    </tr>
  `;

  // Contenido de las filas
  tabla.querySelector("tbody").innerHTML =
    caracteristicas.map(caracteristica => `
      <tr>
        <th scope="row">${caracteristica}</th>

        ${nombres.map(nombre => `
          <td>
            ${metodologias[nombre][caracteristica]}
          </td>
        `).join("")}
      </tr>
    `).join("");
}

// Inicializar el comparador
renderizarCheckboxes();
renderizarTabla();

// Animación del botón de menú
const botonMenu = document.querySelector(".boton-menu");

if (botonMenu) {
  botonMenu.addEventListener("click", () => {
    const abierto = botonMenu.classList.toggle("activo");

    botonMenu.setAttribute(
      "aria-expanded",
      String(abierto)
    );

    botonMenu.setAttribute(
      "aria-label",
      abierto ? "Cerrar menú" : "Abrir menú"
    );
  });
}
