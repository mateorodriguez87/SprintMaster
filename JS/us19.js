/**
 * US-19: Encuesta de Preferencias Metodológicas
 * Algoritmo de cómputo de puntaje y lógica del asistente por pasos (Wizard)
 */

const surveyData = {
  intro: {
    title: "Introducción",
    subtitle: "Responde a continuación a 6 preguntas clave sobre tu proyecto para obtener una sugerencia automatizada sobre qué metodología (Scrum, Kanban o Cascada) es la más adecuada."
  },
  questions: [
    {
      step: 1,
      title: "Claridad y Estabilidad de los Requisitos",
      question: "1) ¿Qué tan definidos y estables están los requisitos de tu proyecto desde el inicio?",
      options: [
        { letter: "A", text: "Están 100% claros, documentados y no cambiarán a lo largo del proyecto.", value: "Cascada" },
        { letter: "B", text: "Son cambiantes e inciertos; necesitamos iterar y adaptarlos según las entregas del producto.", value: "Scrum" },
        { letter: "C", text: "Llegan de forma continua e imprevista como solicitudes de trabajo o tareas entrantes.", value: "Kanban" }
      ]
    },
    {
      step: 2,
      title: "Ritmo de Trabajo y Planificación",
      question: "2) ¿Cómo prefieres estructurar el tiempo y las entregas del equipo?",
      options: [
        { letter: "A", text: "Seguir un plan rígido y secuencial por fases fijas (análisis, diseño, desarrollo, pruebas).", value: "Cascada" },
        { letter: "B", text: "Trabajar en ciclos fijos de tiempo (Sprints de 1 a 4 semanas) con un compromiso de entregables predefinido.", value: "Scrum" },
        { letter: "C", text: "Trabajar con un flujo continuo e interrumpido, priorizando tareas a medida que entran sin ciclos de tiempo fijos.", value: "Kanban" }
      ]
    },
    {
      step: 3,
      title: "Gestión de Cambios y Flexibilidad",
      question: "3) ¿Qué tan flexible es el proyecto para incorporar cambios imprevistos durante la ejecución?",
      options: [
        { letter: "A", text: "Muy poco flexible; cualquier cambio afecta el alcance, tiempo y presupuesto iniciales.", value: "Cascada" },
        { letter: "B", text: "Flexible entre iteraciones; los cambios se reordenan en la Pila del Producto para el siguiente Sprint.", value: "Scrum" },
        { letter: "C", text: "Altamente flexible e inmediato; se puede cambiar la prioridad de una tarea en cualquier momento si la capacidad del equipo lo permite.", value: "Kanban" }
      ]
    },
    {
      step: 4,
      title: "Organización y Roles del Equipo",
      question: "4) ¿Cómo está estructurado el equipo de trabajo y cómo se gestionan los roles?",
      options: [
        { letter: "A", text: "Con roles tradicionales bien definidos y jerárquicos (Gerente de Proyecto, Analista, Desarrollador, Tester) coordinados por un líder de proyecto.", value: "Cascada" },
        { letter: "B", text: "Como un equipo multifuncional y autogestionado con roles específicos del marco (Propietario del Producto, Scrum Master, Equipo de Desarrollo).", value: "Scrum" },
        { letter: "C", text: "Como un equipo flexible con roles existentes que se organiza según el flujo de tareas, sin necesidad de cambiar los roles actuales.", value: "Kanban" }
      ]
    },
    {
      step: 5,
      title: "Capacidad y Control del Flujo de Trabajo",
      question: "5) ¿Cómo gestiona el equipo la carga de trabajo en simultáneo?",
      options: [
        { letter: "A", text: "Se asigna todo el volumen de trabajo al inicio basándose en la estimación del proyecto completo.", value: "Cascada" },
        { letter: "B", text: "El equipo selecciona un lote cerrado de trabajo que se compromete a completar durante cada ciclo (Sprint).", value: "Scrum" },
        { letter: "C", text: "Se limita la cantidad de tareas en progreso en simultáneo (Límite de WIP) para evitar sobrecargar al equipo y optimizar el flujo.", value: "Kanban" }
      ]
    },
    {
      step: 6,
      title: "Entregas al Cliente y Retroalimentación",
      question: "6) ¿Con qué frecuencia necesita el cliente ver avances del producto?",
      options: [
        { letter: "A", text: "Únicamente al final del proyecto cuando todo el sistema esté terminado e implementado.", value: "Cascada" },
        { letter: "B", text: "De forma periódica al final de cada ciclo (Sprint) mediante una demostración del incremento funcional.", value: "Scrum" },
        { letter: "C", text: "De forma continua; tan pronto como una tarea o característica individual se finalice, se puede desplegar o entregar.", value: "Kanban" }
      ]
    }
  ],
  justifications: {
    Scrum: {
      question: "¿Por qué Scrum es la mejor opción para tu proyecto?",
      paragraphs: [
        "Las respuestas seleccionadas indican que tu proyecto se desarrolla en un entorno dinámico, donde los requisitos no están completamente consolidados desde el inicio y es probable que evolucionen. Scrum es el marco ideal para este escenario, ya que permite abordar la complejidad mediante un enfoque iterativo e incremental basado en ciclos de tiempo fijos (Sprints).",
        "Esta metodología permitirá a tu equipo autogestionarse, priorizar continuamente las necesidades de mayor valor en la Pila del Producto y entregar un incremento de software totalmente funcional al finalizar cada ciclo. De este modo, el cliente podrá validar el avance de forma constante y ajustar el rumbo sin generar sobrecostos ni retrasos drásticos en la planificación."
      ]
    },
    Kanban: {
      question: "¿Por qué Kanban es la mejor opción para tu proyecto?",
      paragraphs: [
        "Tu proyecto se caracteriza por una llegada constante e imprevista de solicitudes, requerimientos o tareas con prioridades altamente variables. Kanban se adapta perfectamente a esta dinámica al centrarse en la gestión del flujo continuo de trabajo, sin obligar al equipo a encasillarse en ciclos de tiempo fijos o en la sobreestructura de roles rígidos.",
        "Mediante la visualización del estado de las tareas en un tablero y la limitación del trabajo en progreso (Límite de WIP), tu equipo reducirá los cuellos de botella, evitará la sobrecarga y logrará entregas continuas y eficientes al cliente tan pronto como una funcionalidad o corrección esté lista para producción."
      ]
    },
    Cascada: {
      question: "¿Por qué Cascada es la mejor opción para tu proyecto?",
      paragraphs: [
        "Tus respuestas reflejan que el proyecto cuenta con un alcance claramente definido, requisitos estables que difícilmente cambiarán a lo largo del tiempo y una baja tolerancia al riesgo o a la improvisación. En este contexto, el modelo Cascada ofrece la estructura, previsibilidad y control técnico requeridos.",
        "Al avanzar a través de etapas secuenciales y bien delimitadas (análisis, diseño, desarrollo, pruebas e implementación), este enfoque permite mantener una documentación rigurosa, una estimación precisa de tiempos y costos desde el inicio, y un seguimiento claro del cumplimiento del plan trazado hasta la entrega final del producto."
      ]
    }
  }
};

let currentStep = 0;
const userAnswers = {};

const wizardBody = document.getElementById("wizardBody");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const progressFill = document.getElementById("progressFill");
const stepNodes = document.querySelectorAll(".step-node");

document.addEventListener("DOMContentLoaded", () => {
  renderStep();
  btnAnterior.addEventListener("click", goPrevious);
  btnSiguiente.addEventListener("click", goNext);
});

function renderStep() {
  wizardBody.innerHTML = "";
  updateProgressBar();

  if (currentStep === 0) {
    btnAnterior.disabled = true;
    btnSiguiente.textContent = "Siguiente";
    btnSiguiente.disabled = false;

    wizardBody.innerHTML = `
      <h2 class="step-title">${surveyData.intro.title}</h2>
      <p class="step-subtitle">${surveyData.intro.subtitle}</p>
    `;
    return;
  }

  if (currentStep >= 1 && currentStep <= surveyData.questions.length) {
    btnAnterior.disabled = false;
    btnSiguiente.textContent = "Siguiente";
    
    const qData = surveyData.questions[currentStep - 1];
    btnSiguiente.disabled = !userAnswers[currentStep];

    const optionsHTML = qData.options.map(opt => {
      const isSelected = userAnswers[currentStep] === opt.value ? "selected" : "";
      return `
        <div class="option-card ${isSelected}" data-value="${opt.value}" data-letter="${opt.letter}">
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
      card.addEventListener("click", () => {
        const val = card.getAttribute("data-value");
        userAnswers[currentStep] = val;
        
        document.querySelectorAll(".option-card").forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        
        btnSiguiente.disabled = false;
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

function updateProgressBar() {
  const totalQuestions = surveyData.questions.length;

  if (currentStep === 0 || currentStep > totalQuestions) {
    progressFill.style.width = "0%";
    stepNodes.forEach(node => node.classList.remove("active", "completed"));
    return;
  }

  const percentage = ((currentStep - 1) / (totalQuestions - 1)) * 100;
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

function calculateResults() {
  const counts = { Scrum: 0, Kanban: 0, Cascada: 0 };
  const totalAnswers = Object.keys(userAnswers).length;

  Object.values(userAnswers).forEach(val => {
    if (counts[val] !== undefined) counts[val]++;
  });

  const percentages = {
    Scrum: Math.round((counts.Scrum / totalAnswers) * 100) || 0,
    Kanban: Math.round((counts.Kanban / totalAnswers) * 100) || 0,
    Cascada: Math.round((counts.Cascada / totalAnswers) * 100) || 0
  };

  let winner = "Scrum";
  if (counts.Kanban > counts.Scrum && counts.Kanban >= counts.Cascada) winner = "Kanban";
  else if (counts.Cascada > counts.Scrum && counts.Cascada > counts.Kanban) winner = "Cascada";

  const justData = surveyData.justifications[winner];

  wizardBody.innerHTML = `
    <div class="result-container">
      <h3 class="result-header-title">Su metodología ideal es...</h3>
      <h1 class="winner-title">${winner}</h1>

      <div class="percentages-bar">
        <span class="badge">Scrum: <strong>${percentages.Scrum}%</strong></span>
        <span class="badge">Kanban: <strong>${percentages.Kanban}%</strong></span>
        <span class="badge">Cascada: <strong>${percentages.Cascada}%</strong></span>
      </div>

      <div class="justification-box">
        <h4>${justData.question}</h4>
        ${justData.paragraphs.map(p => `<p>${p}</p>`).join("")}
      </div>
    </div>
  `;
}

function goNext() {
  if (currentStep > surveyData.questions.length) {
    currentStep = 0;
    for (let key in userAnswers) delete userAnswers[key];
  } else {
    currentStep++;
  }
  renderStep();
}

function goPrevious() {
  if (currentStep > 0) {
    currentStep--;
    renderStep();
  }
}