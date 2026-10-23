
/* =========================================
   GLOSARIO INTERACTIVO
   Buscador + alfabeto + definiciones
========================================= */

const terminos = [
  {
    termino: "Aceptación (Pruebas de Aceptación)",
    definicion: "Pruebas que permiten comprobar si el sistema cumple los criterios acordados y las necesidades del usuario antes de aceptarlo."
  },
  {
    termino: "Aseguramiento de Calidad (QA)",
    definicion: "Actividades planificadas y sistemáticas que buscan proporcionar confianza en que los procesos y el producto de software cumplen los requisitos de calidad."
  },
  {
    termino: "Análisis de Requisitos",
    definicion: "Proceso de identificar, estudiar y documentar las necesidades y condiciones que debe cumplir el sistema."
  },
  {
    termino: "Automatización de Pruebas",
    definicion: "Uso de herramientas y scripts para ejecutar pruebas de software y comparar los resultados obtenidos con los resultados esperados."
  },
  {
    termino: "Black-box Testing (Pruebas de Caja Negra)",
    definicion: "Técnica de prueba que evalúa el comportamiento del sistema a partir de entradas y salidas, sin examinar su estructura interna."
  },
  {
    termino: "Bug (Defecto)",
    definicion: "Error o imperfección en el software que puede provocar resultados incorrectos o un comportamiento diferente al esperado."
  },
  {
    termino: "Calidad de Software",
    definicion: "Grado en que un producto de software satisface los requisitos establecidos y las necesidades de sus usuarios."
  },
  {
    termino: "Caso de Prueba",
    definicion: "Conjunto de condiciones, entradas, acciones y resultados esperados que se utiliza para verificar una funcionalidad."
  },
  {
    termino: "Ciclo de Vida del Software",
    definicion: "Conjunto de etapas por las que pasa un sistema, desde la definición de necesidades y el diseño hasta las pruebas, la implementación y el mantenimiento."
  },
  {
    termino: "Cobertura de Pruebas",
    definicion: "Medida de cuánto del software, sus requisitos o sus elementos han sido evaluados mediante pruebas."
  },
  {
    termino: "Depuración (Debugging)",
    definicion: "Proceso de localizar, analizar y corregir las causas de errores detectados en un programa."
  },
  {
    termino: "Diseño de Pruebas",
    definicion: "Actividad de definir los casos, datos, condiciones y procedimientos que se utilizarán para verificar el software."
  },
  {
    termino: "Eficiencia",
    definicion: "Capacidad del sistema para ofrecer el rendimiento esperado utilizando adecuadamente los recursos disponibles."
  },
  {
    termino: "Error",
    definicion: "Equivocación humana que puede introducir un resultado incorrecto en los requisitos, el diseño, el código u otra actividad del desarrollo."
  },
  {
    termino: "Escalabilidad",
    definicion: "Capacidad de un sistema para adaptarse al aumento de usuarios, datos o carga de trabajo."
  },
  {
    termino: "Fiabilidad",
    definicion: "Capacidad del sistema para funcionar de forma estable y cumplir su función durante un período determinado bajo condiciones definidas."
  },
  {
    termino: "Gestión de Calidad",
    definicion: "Actividades coordinadas para dirigir y controlar una organización o proyecto en relación con la calidad."
  },
  {
    termino: "Incidencia",
    definicion: "Evento o problema observado durante el uso o la prueba del software que requiere análisis y seguimiento."
  },
  {
    termino: "Integración Continua",
    definicion: "Práctica de incorporar frecuentemente cambios de código en un repositorio compartido y ejecutar comprobaciones automatizadas."
  },
  {
    termino: "Mantenimiento de Software",
    definicion: "Modificación del software después de su entrega para corregir defectos, adaptarlo o mejorar su funcionamiento."
  },
  {
    termino: "Métrica de Software",
    definicion: "Medida cuantitativa utilizada para evaluar características del producto, el proceso o el proyecto."
  },
  {
    termino: "Prueba de Caja Blanca (White-box Testing)",
    definicion: "Técnica de prueba que considera la estructura interna del código, sus caminos, condiciones o instrucciones."
  },
  {
    termino: "Pruebas de Regresión",
    definicion: "Pruebas que se vuelven a ejecutar después de un cambio para comprobar que las funciones existentes continúan comportándose correctamente."
  },
  {
    termino: "Requisito",
    definicion: "Necesidad, capacidad o condición que debe satisfacer un sistema o uno de sus componentes."
  },
  {
    termino: "Rendimiento",
    definicion: "Comportamiento del sistema en relación con tiempos de respuesta, capacidad de procesamiento y uso de recursos."
  },
  {
    termino: "Scrum",
    definicion: "Marco de trabajo ágil que organiza el trabajo en Sprints y promueve la inspección, la adaptación y la entrega frecuente de incrementos de producto."
  },
  {
    termino: "Severidad",
    definicion: "Grado de impacto que un defecto puede tener sobre el funcionamiento del sistema o sobre sus usuarios."
  },
  {
    termino: "Test Case (Caso de Prueba)",
    definicion: "Descripción de las condiciones y pasos necesarios para comprobar un comportamiento específico y su resultado esperado."
  },
  {
    termino: "Usabilidad",
    definicion: "Grado en que usuarios determinados pueden utilizar un sistema para lograr objetivos concretos con eficacia, eficiencia y satisfacción."
  },
  {
    termino: "Validación",
    definicion: "Evaluación destinada a comprobar si el producto desarrollado satisface las necesidades y el uso previsto por los usuarios."
  },
  {
    termino: "Verificación",
    definicion: "Evaluación destinada a comprobar si un producto o resultado cumple los requisitos y especificaciones establecidos."
  },
  {
    termino: "White-box Testing (Pruebas de Caja Blanca)",
    definicion: "Pruebas que examinan la lógica y estructura interna del código para evaluar instrucciones, decisiones o caminos de ejecución."
  }
];

/* ELEMENTOS DEL HTML */

const campoBusqueda = document.getElementById("buscarTermino");
const formularioBusqueda = document.getElementById("formBuscador");
const botonLimpiar = document.getElementById("limpiarBusqueda");

const alfabeto = document.getElementById("alfabeto");
const listaTerminos = document.getElementById("listaTerminos");
const estadoResultados = document.getElementById("estadoResultados");
const sinResultados = document.getElementById("sinResultados");

const modal = document.getElementById("modalDefinicion");
const modalTitulo = document.getElementById("modalTitulo");
const modalTexto = document.getElementById("modalTexto");
const cerrarModal = document.getElementById("cerrarModal");
const botonEntendido = document.getElementById("botonEntendido");

const botonMenu = document.getElementById("botonMenu");
const menuRapido = document.getElementById("menuRapido");

/* ESTADO */

const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZÑ".split("");
let letraActiva = "A";

/* NORMALIZACIÓN PARA BUSCAR SIN IMPORTAR TILDES */

function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es");
}

function obtenerLetra(termino) {
  return termino.trim().charAt(0).toLocaleUpperCase("es");
}

function ordenarTerminos(lista) {
  return [...lista].sort((a, b) =>
    a.termino.localeCompare(b.termino, "es", {
      sensitivity: "base",
      ignorePunctuation: true
    })
  );
}

/* CREAR LOS BOTONES DEL ALFABETO */

function renderizarAlfabeto() {
  const consulta = normalizar(campoBusqueda.value.trim());

  alfabeto.innerHTML = letras.map(letra => {
    const hayTerminos = terminos.some(item => {
      const coincideLetra = obtenerLetra(item.termino) === letra;

      const coincideBusqueda =
        consulta === "" ||
        normalizar(item.termino).includes(consulta) ||
        normalizar(item.definicion).includes(consulta);

      return coincideLetra && coincideBusqueda;
    });

    const activa = letra === letraActiva && consulta === "";

    return `
      <button
        class="letra-boton ${activa ? "activa" : ""}"
        type="button"
        data-letra="${letra}"
        aria-pressed="${activa}"
        ${hayTerminos ? "" : "disabled"}
        aria-label="Mostrar términos con la letra ${letra}">
        ${letra}
      </button>
    `;
  }).join("");

  alfabeto.querySelectorAll(".letra-boton").forEach(boton => {
    boton.addEventListener("click", () => {
      letraActiva = boton.dataset.letra;

      campoBusqueda.value = "";
      botonLimpiar.hidden = true;

      renderizarAlfabeto();
      renderizarTerminos();
    });
  });
}

/* MOSTRAR LOS TÉRMINOS */

function renderizarTerminos() {
  const consulta = normalizar(campoBusqueda.value.trim());

  let filtrados = ordenarTerminos(terminos).filter(item => {
    const coincideBusqueda =
      normalizar(item.termino).includes(consulta) ||
      normalizar(item.definicion).includes(consulta);

    const coincideLetra =
      consulta !== "" ||
      letraActiva === "" ||
      obtenerLetra(item.termino) === letraActiva;

    return coincideBusqueda && coincideLetra;
  });

  // Si el usuario escribe algo, busca en todas las letras.
  if (consulta !== "") {
    filtrados = ordenarTerminos(terminos).filter(item =>
      normalizar(item.termino).includes(consulta) ||
      normalizar(item.definicion).includes(consulta)
    );
  }

  // Agrupar términos por su letra inicial.
  const grupos = {};

  filtrados.forEach(item => {
    const letra = obtenerLetra(item.termino);

    if (!grupos[letra]) {
      grupos[letra] = [];
    }

    grupos[letra].push(item);
  });

  // Generar las secciones y los botones de cada término.
  listaTerminos.innerHTML = Object.keys(grupos).map(letra => `
    <section class="grupo-letra" aria-labelledby="letra-${letra}">
      <h3 id="letra-${letra}">${letra}</h3>

      <div class="terminos-grupo">
        ${grupos[letra].map(item => `
          <button
            class="termino-boton"
            type="button"
            data-termino="${encodeURIComponent(item.termino)}">
            ${item.termino}
          </button>
        `).join("")}
      </div>
    </section>
  `).join("");

  // Actualizar el contador.
  const cantidad = filtrados.length;

  if (consulta !== "") {
    estadoResultados.textContent =
      `${cantidad} ${cantidad === 1
        ? "término encontrado"
        : "términos encontrados"}`;
  } else {
    estadoResultados.textContent =
      `${cantidad} ${cantidad === 1 ? "término" : "términos"} en la letra ${letraActiva}`;
  }

  sinResultados.hidden = cantidad !== 0;

  // Asociar cada término con su definición.
  listaTerminos.querySelectorAll(".termino-boton").forEach(boton => {
    boton.addEventListener("click", () => {
      const nombre = decodeURIComponent(boton.dataset.termino);

      const item = terminos.find(
        termino => termino.termino === nombre
      );

      if (item) {
        mostrarDefinicion(item);
      }
    });
  });
}

/* MOSTRAR DEFINICIÓN */

function mostrarDefinicion(item) {
  modalTitulo.textContent = item.termino;
  modalTexto.textContent = item.definicion;

  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    // Alternativa para navegadores antiguos.
    window.alert(`${item.termino}\n\n${item.definicion}`);
  }
}

function cerrarVentana() {
  if (modal.open) {
    modal.close();
  }
}

/* EVENTOS DEL BUSCADOR */

formularioBusqueda.addEventListener("submit", evento => {
  evento.preventDefault();

  letraActiva = "";
  botonLimpiar.hidden = campoBusqueda.value.trim() === "";

  renderizarAlfabeto();
  renderizarTerminos();
});

campoBusqueda.addEventListener("input", () => {
  letraActiva = "";
  botonLimpiar.hidden = campoBusqueda.value.trim() === "";

  renderizarAlfabeto();
  renderizarTerminos();
});

botonLimpiar.addEventListener("click", () => {
  campoBusqueda.value = "";
  letraActiva = "A";
  botonLimpiar.hidden = true;

  renderizarAlfabeto();
  renderizarTerminos();

  campoBusqueda.focus();
});

/* EVENTOS DE LA VENTANA DE DEFINICIONES */

cerrarModal.addEventListener("click", cerrarVentana);
botonEntendido.addEventListener("click", cerrarVentana);

modal.addEventListener("click", evento => {
  if (evento.target === modal) {
    cerrarVentana();
  }
});

/* MENÚ DESPLEGABLE */

if (botonMenu && menuRapido) {
  botonMenu.addEventListener("click", () => {
    const abrir = menuRapido.hidden;

    menuRapido.hidden = !abrir;
    botonMenu.classList.toggle("activo", abrir);

    botonMenu.setAttribute("aria-expanded", String(abrir));
    botonMenu.setAttribute(
      "aria-label",
      abrir ? "Cerrar menú" : "Abrir menú"
    );
  });

  document.addEventListener("click", evento => {
    if (
      !botonMenu.contains(evento.target) &&
      !menuRapido.contains(evento.target)
    ) {
      menuRapido.hidden = true;
      botonMenu.classList.remove("activo");
      botonMenu.setAttribute("aria-expanded", "false");
      botonMenu.setAttribute("aria-label", "Abrir menú");
    }
  });
}

/* INICIALIZACIÓN */

renderizarAlfabeto();
renderizarTerminos();
