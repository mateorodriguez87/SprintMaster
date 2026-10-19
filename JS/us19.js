
/**
 * US-19: Encuesta de Preferencias Metodológicas
 * Encuesta de 6 preguntas y recomendación entre 6 modelos.
 */

const surveyData = {
  intro: {
    title: "Introducción",
    subtitle: "Responde las 6 preguntas sobre tu proyecto para obtener una recomendación entre Scrum, Kanban, Cascada, Incremental, Modelo en V y XP."
  },

  questions: [
    {
      step: 1,
      title: "Claridad y Estabilidad de los Requisitos",
      question: "1) ¿Qué tan definidos y estables están los requisitos de tu proyecto desde el inicio?",
      options: [
        {
          letter: "A",
          text: "Están completamente claros, documentados y no cambiarán durante el proyecto.",
          value: "Cascada"
        },
        {
          letter: "B",
          text: "Son cambiantes y necesitamos adaptarlos durante ciclos de trabajo.",
          value: "Scrum"
        },
        {
          letter: "C",
          text: "Llegan continuamente como solicitudes o tareas imprevistas.",
          value: "Kanban"
        },
        {
          letter: "D",
          text: "Están definidos en general, pero podemos agregar requisitos por etapas.",
          value: "Incremental"
        },
        {
          letter: "E",
          text: "Necesitamos requisitos claros y una planificación detallada de las pruebas.",
          value: "Modelo en V"
        },
        {
          letter: "F",
          text: "Cambian frecuentemente y necesitamos trabajar junto al cliente para aclararlos.",
          value: "XP"
        }
      ]
    },

    {
      step: 2,
      title: "Ritmo de Trabajo y Planificación",
      question: "2) ¿Cómo prefieres estructurar el tiempo y las entregas del equipo?",
      options: [
        {
          letter: "A",
          text: "Seguir un plan secuencial por fases: análisis, diseño, desarrollo y pruebas.",
          value: "Cascada"
        },
        {
          letter: "B",
          text: "Trabajar en ciclos fijos llamados Sprints, con entregas al finalizar cada ciclo.",
          value: "Scrum"
        },
        {
          letter: "C",
          text: "Trabajar con un flujo continuo de tareas, sin ciclos fijos.",
          value: "Kanban"
        },
        {
          letter: "D",
          text: "Dividir el desarrollo en varias entregas que agreguen funcionalidades progresivamente.",
          value: "Incremental"
        },
        {
          letter: "E",
          text: "Planificar las fases de desarrollo junto con las actividades de prueba correspondientes.",
          value: "Modelo en V"
        },
        {
          letter: "F",
          text: "Realizar entregas pequeñas y frecuentes, con pruebas continuas.",
          value: "XP"
        }
      ]
    },

    {
      step: 3,
      title: "Gestión de Cambios y Flexibilidad",
      question: "3) ¿Qué tan flexible es el proyecto para incorporar cambios imprevistos durante la ejecución?",
      options: [
        {
          letter: "A",
          text: "Muy poco flexible: los cambios pueden afectar el alcance, el tiempo y el presupuesto.",
          value: "Cascada"
        },
        {
          letter: "B",
          text: "Flexible entre Sprints, reorganizando las prioridades para los ciclos siguientes.",
          value: "Scrum"
        },
        {
          letter: "C",
          text: "Muy flexible: podemos modificar las prioridades de las tareas según la capacidad del equipo.",
          value: "Kanban"
        },
        {
          letter: "D",
          text: "Podemos incorporar cambios y funcionalidades en los siguientes incrementos.",
          value: "Incremental"
        },
        {
          letter: "E",
          text: "Los cambios deben evaluarse cuidadosamente porque pueden requerir revisar el diseño y las pruebas.",
          value: "Modelo en V"
        },
        {
          letter: "F",
          text: "Necesitamos adaptarnos rápidamente mediante la comunicación frecuente con el cliente.",
          value: "XP"
        }
      ]
    },

    {
      step: 4,
      title: "Organización y Roles del Equipo",
      question: "4) ¿Cómo está estructurado el equipo de trabajo y cómo se gestionan los roles?",
      options: [
        {
          letter: "A",
          text: "Con roles tradicionales y fases coordinadas por un responsable del proyecto.",
          value: "Cascada"
        },
        {
          letter: "B",
          text: "Con un equipo autogestionado y roles definidos, como Product Owner y Scrum Master.",
          value: "Scrum"
        },
        {
          letter: "C",
          text: "Con los roles actuales, organizando el trabajo según el flujo de tareas.",
          value: "Kanban"
        },
        {
          letter: "D",
          text: "Con un equipo que desarrolla y entrega partes funcionales del sistema progresivamente.",
          value: "Incremental"
        },
        {
          letter: "E",
          text: "Con responsabilidades definidas para desarrollar el sistema y verificar que cumpla los requisitos.",
          value: "Modelo en V"
        },
        {
          letter: "F",
          text: "Con colaboración estrecha, comunicación constante y trabajo conjunto entre desarrolladores.",
          value: "XP"
        }
      ]
    },

    {
      step: 5,
      title: "Capacidad y Control del Flujo de Trabajo",
      question: "5) ¿Cómo gestiona el equipo la carga de trabajo en simultáneo?",
      options: [
        {
          letter: "A",
          text: "Se planifica el volumen de trabajo del proyecto completo desde el inicio.",
          value: "Cascada"
        },
        {
          letter: "B",
          text: "El equipo selecciona un conjunto de tareas para completar durante cada Sprint.",
          value: "Scrum"
        },
        {
          letter: "C",
          text: "Se limita la cantidad de tareas en progreso para evitar la sobrecarga.",
          value: "Kanban"
        },
        {
          letter: "D",
          text: "Se organiza el trabajo en partes, priorizando las funcionalidades de cada entrega.",
          value: "Incremental"
        },
        {
          letter: "E",
          text: "Se controla el avance y se realizan pruebas planificadas en las diferentes fases.",
          value: "Modelo en V"
        },
        {
          letter: "F",
          text: "Se trabaja en tareas pequeñas, con pruebas frecuentes e integración continua.",
          value: "XP"
        }
      ]
    },

    {
      step: 6,
      title: "Entregas al Cliente y Retroalimentación",
      question: "6) ¿Con qué frecuencia necesita el cliente ver avances del producto?",
      options: [
        {
          letter: "A",
          text: "Al final del proyecto, cuando el sistema completo esté terminado.",
          value: "Cascada"
        },
        {
          letter: "B",
          text: "Al finalizar cada Sprint, mediante una demostración del incremento funcional.",
          value: "Scrum"
        },
        {
          letter: "C",
          text: "De forma continua, a medida que se terminan las tareas.",
          value: "Kanban"
        },
        {
          letter: "D",
          text: "En cada entrega progresiva, incorporando nuevas funcionalidades al sistema.",
          value: "Incremental"
        },
        {
          letter: "E",
          text: "Mediante entregas verificadas con pruebas planificadas para comprobar los requisitos.",
          value: "Modelo en V"
        },
        {
          letter: "F",
          text: "Con entregas pequeñas y frecuentes, acompañadas de retroalimentación del cliente.",
          value: "XP"
        }
      ]
    }
  ],

  justifications: {
    Scrum: {
      question: "¿Por qué Scrum puede ser una buena opción para tu proyecto?",
      paragraphs: [
        "Scrum es un marco de trabajo ágil que organiza el desarrollo mediante ciclos de tiempo fijos llamados Sprints. Permite revisar periódicamente los avances, adaptar las prioridades y trabajar sobre las funcionalidades que aportan mayor valor.",
        "Es una alternativa adecuada cuando los requisitos pueden cambiar y el equipo necesita recibir retroalimentación frecuente del cliente. Al finalizar cada Sprint se busca obtener un incremento funcional del producto."
      ]
    },

    Kanban: {
      question: "¿Por qué Kanban puede ser una buena opción para tu proyecto?",
      paragraphs: [
        "Kanban se centra en visualizar y gestionar el flujo de trabajo. Las tareas pueden representarse en un tablero para conocer su estado, detectar dificultades y organizar las prioridades sin depender de ciclos de tiempo fijos.",
        "Resulta útil cuando las solicitudes llegan continuamente. Limitar el trabajo en progreso ayuda a evitar la sobrecarga del equipo y a mejorar el flujo de entrega."
      ]
    },

    Cascada: {
      question: "¿Por qué el modelo Cascada puede ser una buena opción para tu proyecto?",
      paragraphs: [
        "Cascada organiza el desarrollo en etapas secuenciales, como análisis, diseño, desarrollo, pruebas e implementación. Cada fase se planifica antes de avanzar hacia las siguientes.",
        "Puede resultar adecuado cuando los requisitos están claramente definidos y se espera que permanezcan estables. Su estructura facilita la planificación, la documentación y el seguimiento de las etapas del proyecto."
      ]
    },

    Incremental: {
      question: "¿Por qué el Modelo Incremental puede ser una buena opción para tu proyecto?",
      paragraphs: [
        "El Modelo Incremental permite desarrollar el software mediante varias entregas. Cada incremento agrega funcionalidades al producto, de manera que el sistema crece progresivamente en lugar de esperar hasta el final para disponer de una versión funcional.",
        "Puede ser útil cuando el proyecto se puede dividir en partes. Las primeras entregas permiten recibir comentarios y realizar mejoras en los incrementos siguientes."
      ]
    },

    "Modelo en V": {
      question: "¿Por qué el Modelo en V puede ser una buena opción para tu proyecto?",
      paragraphs: [
        "El Modelo en V relaciona las etapas de definición y diseño con actividades de verificación y validación. De esta manera, las pruebas se planifican desde etapas tempranas del desarrollo.",
        "Puede ser adecuado para proyectos que necesitan requisitos bien definidos, documentación y controles de calidad rigurosos. Su enfoque permite comprobar si el sistema cumple las especificaciones establecidas."
      ]
    },

    XP: {
      question: "¿Por qué XP puede ser una buena opción para tu proyecto?",
      paragraphs: [
        "Extreme Programming (XP) es una metodología ágil que promueve la colaboración con el cliente, las entregas pequeñas y la adaptación a los cambios. Busca mantener una comunicación frecuente durante el desarrollo.",
        "Entre sus prácticas se encuentran la programación en pareja, el desarrollo guiado por pruebas y la integración continua. Estas prácticas ayudan a detectar errores anticipadamente y a mejorar progresivamente la calidad del software."
      ]
    }
  }
};

// Estado de la encuesta
let currentStep = 0;
const userAnswers = {};

// Elementos del HTML
const wizardBody = document.getElementById("wizardBody");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const progressFill = document.getElementById("progressFill");
const stepNodes = document.querySelectorAll(".step-node");

// Inicio
document.addEventListener("DOMContentLoaded", () => {
  renderStep();

  btnAnterior.addEventListener("click", goPrevious);
  btnSiguiente.addEventListener("click", goNext);
});

// Mostrar introducción, preguntas o resultados
function renderStep() {
  wizardBody.innerHTML = "";
  updateProgressBar();

  if (currentStep === 0) {
    btnAnterior.disabled = true;
    btnSiguiente.textContent = "Comenzar";
    btnSiguiente.disabled = false;

    wizardBody.innerHTML = `
      <h2 class="step-title">${surveyData.intro.title}</h2>
      <p class="step-subtitle">${surveyData.intro.subtitle}</p>
    `;

    return;
  }

  if (
    currentStep >= 1 &&
    currentStep <= surveyData.questions.length
  ) {
    btnAnterior.disabled = false;
    btnSiguiente.textContent = "Siguiente";

    const qData = surveyData.questions[currentStep - 1];

    btnSiguiente.disabled = !userAnswers[currentStep];

    const optionsHTML = qData.options.map(opt => {
      const isSelected =
        userAnswers[currentStep] === opt.value ? "selected" : "";

      return `
        <div
          class="option-card ${isSelected}"
          data-value="${opt.value}"
          data-letter="${opt.letter}"
          role="button"
          tabindex="0"
          aria-pressed="${isSelected ? "true" : "false"}"
        >
          <p class="option-text">${opt.text}</p>
        </div>
      `;
    }).join("");

    wizardBody.innerHTML = `
      <h2 class="step-title">${qData.title}</h2>
      <p class="step-subtitle">${qData.question}</p>
      <div class="options-grid">${optionsHTML}</div>
    `;

    document.querySelectorAll(".option-card").forEach(card => {
      function selectOption() {
        const value = card.getAttribute("data-value");

        userAnswers[currentStep] = value;

        document.querySelectorAll(".option-card").forEach(option => {
          option.classList.remove("selected");
          option.setAttribute("aria-pressed", "false");
        });

        card.classList.add("selected");
        card.setAttribute("aria-pressed", "true");

        btnSiguiente.disabled = false;
      }

      card.addEventListener("click", selectOption);

      card.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selectOption();
        }
      });
    });

    return;
  }

  if (currentStep > surveyData.questions.length) {
    btnAnterior.disabled = false;
    btnSiguiente.textContent = "Reiniciar";
    btnSiguiente.disabled = false;

    calculateResults();
  }
}

// Actualizar barra y pasos de progreso
function updateProgressBar() {
  const totalQuestions = surveyData.questions.length;

  if (currentStep === 0 || currentStep > totalQuestions) {
    progressFill.style.width = "0%";

    stepNodes.forEach(node => {
      node.classList.remove("active", "completed");
    });

    return;
  }

  const percentage =
    ((currentStep - 1) / (totalQuestions - 1)) * 100;

  progressFill.style.width = `${percentage}%`;

  stepNodes.forEach((node, idx) => {
    const nodeStep = idx + 1;

    if (nodeStep < currentStep) {
      node.classList.add("completed");
      node.classList.remove("active");
    } else if (nodeStep === currentStep) {
      node.classList.add("active");
      node.classList.remove("completed");
    } else {
      node.classList.remove("active", "completed");
    }
  });
}

// Calcular puntajes, porcentajes y recomendación
function calculateResults() {
  const counts = {
    Scrum: 0,
    Kanban: 0,
    Cascada: 0,
    Incremental: 0,
    "Modelo en V": 0,
    XP: 0
  };

  const totalAnswers = surveyData.questions.length;

  Object.values(userAnswers).forEach(value => {
    if (Object.prototype.hasOwnProperty.call(counts, value)) {
      counts[value]++;
    }
  });

  const percentages = {};

  Object.keys(counts).forEach(modelo => {
    percentages[modelo] = Math.round(
      (counts[modelo] / totalAnswers) * 100
    );
  });

  // Seleccionar el modelo con mayor cantidad de respuestas.
  // Si hay empate, se muestran todos los modelos empatados.
  const maxCount = Math.max(...Object.values(counts));

  const winners = Object.keys(counts).filter(
    modelo => counts[modelo] === maxCount
  );

  const winner = winners[0];
  const justData = surveyData.justifications[winner];

  const resultadosHTML = Object.keys(counts).map(modelo => `
    <span class="badge">
      ${modelo}: <strong>${percentages[modelo]}%</strong>
    </span>
  `).join("");

  const empateHTML = winners.length > 1
    ? `
      <p class="result-subtitle">
        Hay un empate entre: ${winners.join(", ")}.
        La explicación corresponde a ${winner}.
      </p>
    `
    : "";

  wizardBody.innerHTML = `
    <div class="result-container">
      <h3 class="result-header-title">
        Tu metodología o modelo recomendado es...
      </h3>

      <h1 class="winner-title">${winner}</h1>

      ${empateHTML}

      <div class="percentages-bar">
        ${resultadosHTML}
      </div>

      <div class="justification-box">
        <h4>${justData.question}</h4>
        ${justData.paragraphs.map(parrafo => `<p>${parrafo}</p>`).join("")}
      </div>
    </div>
  `;
}

// Avanzar a la siguiente pantalla
function goNext() {
  if (currentStep > surveyData.questions.length) {
    // Reiniciar la encuesta
    currentStep = 0;

    Object.keys(userAnswers).forEach(key => {
      delete userAnswers[key];
    });
  } else if (currentStep === 0) {
    currentStep = 1;
  } else {
    // No avanzar si la pregunta actual no fue respondida
    if (!userAnswers[currentStep]) {
      return;
    }

    currentStep++;
  }

  renderStep();
}

// Volver a la pantalla anterior
function goPrevious() {
  if (currentStep > 0) {
    currentStep--;
    renderStep();
  }
}
