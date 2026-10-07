/**
 * Información completa de cada fase del Ciclo de Vida del Software (SDLC)
 */
const phasesData = {
  requisitos: {
    title: "1. Requisitos",
    paragraphs: [
      "El análisis de las fases tradicionales de la ingeniería de software y la gestión de proyectos —requisitos, diseño, desarrollo, pruebas, implementación y mantenimiento— sufre una transformación radical al pasar de un enfoque tradicional o predictivo hacia un marco ágil como Scrum.",
      "En un paradigma predictivo o en cascada, la gestión de los requisitos consiste en la elaboración de un documento cerrado, exhaustivo e inmutable al inicio del proyecto. Scrum plantea una postura opuesta: reconoce que en entornos cambiantes los requisitos son inestables y difíciles de definir desde el primer momento. Por esta razón, las necesidades del producto se recopilan en un instrumento dinámico denominado Pila del Producto (Product Backlog), donde se expresan principalmente como historias de usuario que evolucionan, se reordenan y se detallan continuamente a lo largo de la vida del proyecto."
    ]
  },
  diseno: {
    title: "2. Diseño",
    paragraphs: [
      "En el modelo en cascada, la etapa de diseño define la estructura general del software, la arquitectura del sistema, las interfaces y la organización de los datos antes de comenzar a programar. Todo debe quedar previsto y documentado en esta fase previa.",
      "Scrum, por su parte, promueve un diseño emergente e interactivo. En lugar de diseñar la totalidad del sistema al inicio, la arquitectura y el diseño técnico van evolucionando de forma incremental Sprint a Sprint, respondiendo activamente a la retroalimentación recibida sobre el incremento de producto entregado."
    ]
  },
  desarrollo: {
    title: "3. Desarrollo",
    paragraphs: [
      "El desarrollo o implementación es la etapa en la que el diseño se transforma en software. Según Sommerville, durante la implementación se realiza el software a partir del diseño, creando los programas o unidades de programa que forman parte del sistema.",
      "En esta etapa se construyen las diferentes partes que posteriormente deberán ser comprobadas. Cada unidad debe cumplir con la especificación correspondiente. Por este motivo, la implementación está relacionada directamente con las pruebas, ya que las unidades desarrolladas deben ser verificadas para comprobar que funcionan de acuerdo con lo establecido.",
      "En el modelo en cascada, la implementación aparece después del diseño. Primero se establece qué debe hacer el sistema y cómo estará estructurado, y posteriormente esas decisiones se convierten en programas. Después de desarrollar las unidades, se procede a comprobarlas y posteriormente se integran para formar el sistema completo.",
      "Scrum plantea una forma diferente de organizar este desarrollo. El trabajo se divide en Sprints, que son períodos de tiempo durante los cuales el equipo desarrolla un incremento del producto. Cada Sprint tiene como objetivo obtener una parte terminada y funcional del sistema. De esta manera, en lugar de desarrollar todo el producto antes de obtener un resultado, se van construyendo partes funcionales de manera progresiva.",
      "En Scrum, el desarrollo está relacionado con el Product Backlog, que contiene el trabajo y las funcionalidades que se desean incorporar al producto. El Product Owner administra y prioriza este trabajo, mientras que los desarrolladores determinan qué elementos pueden realizar durante el Sprint. De esta manera, el desarrollo puede adaptarse a las prioridades y necesidades que vayan apareciendo.",
      "Una característica importante de este enfoque es que las diferentes actividades pueden superponerse. Dentro de un mismo Sprint pueden existir actividades de diseño, desarrollo, pruebas y corrección. Esto permite que el producto avance de manera incremental y que el equipo reciba información sobre lo construido antes de continuar con el siguiente ciclo."
    ]
  },
  pruebas: {
    title: "4. Pruebas",
    paragraphs: [
      "Las pruebas tienen como objetivo comprobar que el software funciona correctamente y que cumple con los requerimientos establecidos. Sommerville distingue diferentes niveles de prueba dentro del proceso de desarrollo.",
      "Después de implementar una unidad de programa se realiza la prueba de unidad. Esta prueba permite comprobar individualmente que la unidad cumple con su especificación. Es una forma de verificar las partes del software antes de utilizarlas como componentes de un sistema mayor.",
      "Posteriormente se realiza la integración de las unidades y la prueba del sistema. Las diferentes unidades o programas se combinan para formar el sistema completo y se comprueba que el conjunto cumple con los requerimientos. Esta etapa permite detectar problemas que pueden no aparecer cuando las unidades son probadas de forma individual.",
      "En el modelo en cascada, las pruebas aparecen después de la implementación. Primero se desarrollan las unidades, luego se prueban individualmente y posteriormente se integran para comprobar el funcionamiento del sistema completo.",
      "En Scrum, las pruebas están relacionadas con el objetivo de obtener un incremento terminado y operativo al finalizar cada Sprint. El incremento debe estar en condiciones de ser utilizado y debe representar una parte funcional del producto. Por eso las pruebas no tienen que entenderse únicamente como una actividad que ocurre al final de todo el proyecto.",
      "El enfoque incremental permite que el equipo compruebe continuamente lo que va construyendo. Al finalizar el Sprint se presenta el incremento durante la revisión, donde se obtiene retroalimentación de las personas interesadas en el producto. Esta información puede servir para modificar prioridades o determinar qué aspectos deberán trabajarse posteriormente.",
      "Por lo tanto, las pruebas permiten verificar la calidad y el funcionamiento del software y también proporcionan información para continuar con su desarrollo. En un modelo secuencial pueden concentrarse después de la implementación, mientras que en un desarrollo ágil se integran continuamente dentro de los diferentes ciclos."
    ]
  },
  implementacion: {
    title: "5. Implementación / Despliegue",
    paragraphs: [
      "La implementación puede entenderse como la construcción del software y también como la puesta en funcionamiento del sistema una vez que ha sido desarrollado y probado. En el modelo presentado por Sommerville, primero se implementan las unidades del software, posteriormente se realizan las pruebas y finalmente el sistema integrado puede ser entregado al cliente.",
      "Después de completar las pruebas del sistema, el software se libera y comienza la etapa de operación. El sistema es instalado y puesto en uso. Esto significa que la implementación no debe considerarse solamente como escribir el código, sino también como el paso hacia un sistema que puede ser utilizado.",
      "En Scrum, la implementación se relaciona con la entrega de incrementos funcionales. Cada Sprint busca producir un incremento terminado y útil para el cliente, en condiciones de poder ser desplegado o distribuido. Por esta razón, Scrum intenta entregar resultados funcionales de manera frecuente en lugar de esperar hasta el final de todo el proyecto.",
      "La entrega incremental permite que el cliente y las personas interesadas puedan observar el progreso real del producto. En la revisión del Sprint se muestra el incremento desarrollado y se obtiene retroalimentación. Esta información puede utilizarse para decidir qué funcionalidades tendrán prioridad en los próximos Sprints.",
      "Sommerville también explica que en Scrum cada Sprint funciona como una unidad de planificación. El equipo evalúa el trabajo, selecciona funcionalidades, desarrolla el software y entrega la funcionalidad terminada a las personas interesadas. Los Sprints suelen durar entre dos y cuatro semanas en la explicación de Sommerville, mientras que Scrum Manager recomienda que un Sprint no supere aproximadamente un mes.",
      "Por lo tanto, mientras que el modelo en cascada normalmente concentra la entrega después de completar las diferentes fases del desarrollo, Scrum busca obtener entregas funcionales de manera frecuente mediante incrementos."
    ]
  },
  mantenimiento: {
    title: "6. Mantenimiento",
    paragraphs: [
      "El mantenimiento es la etapa que comienza cuando el sistema ya fue entregado y se encuentra en funcionamiento, aunque Sommerville destaca que el desarrollo y la evolución del software no terminan con la entrega. El software puede necesitar modificaciones durante toda su vida útil.",
      "Sommerville define el mantenimiento como el proceso general de modificar un sistema después de haber sido entregado. Estas modificaciones pueden producirse por diferentes motivos. Una de las causas son las fallas que no fueron detectadas durante el desarrollo. Otra causa son los cambios en el entorno donde funciona el software, como modificaciones del hardware, de la plataforma de operación o del entorno de soporte. También pueden aparecer nuevas necesidades y requerimientos que hagan necesario agregar funcionalidades.",
      "La reparación de fallas consiste en corregir errores encontrados después de la entrega. Los errores de programación pueden ser relativamente económicos de corregir, mientras que los errores de diseño pueden resultar más costosos. Los errores relacionados con los requerimientos pueden ser todavía más complejos porque pueden requerir cambios importantes en el sistema.",
      "La adaptación ambiental ocurre cuando el software debe modificarse debido a cambios en el entorno en el que funciona. Si cambia una plataforma de soporte, puede ser necesario adaptar el sistema para que continúe funcionando correctamente.",
      "La adición de funcionalidad ocurre cuando cambian las necesidades de la organización o del negocio. En estos casos pueden aparecer nuevos requerimientos que hacen necesario modificar el sistema y agregar nuevas capacidades.",
      "El mantenimiento puede representar una parte muy importante de la vida del software. Sommerville señala que el desarrollo no debe considerarse terminado cuando el sistema se entrega, porque el software debe continuar evolucionando para seguir siendo útil.",
      "Scrum plantea una relación diferente con esta evolución. En lugar de separar completamente el desarrollo y los cambios posteriores, Scrum trabaja con un producto que evoluciona continuamente. El Product Backlog puede modificarse y priorizarse nuevamente a medida que aparecen nuevas necesidades. Los cambios pueden incorporarse en futuros Sprints.",
      "Esto significa que Scrum permite que la evolución del producto esté integrada en el propio proceso de desarrollo. Cuando aparece una nueva necesidad, puede convertirse en trabajo pendiente, priorizarse y posteriormente desarrollarse dentro de un Sprint. De esta manera, el producto continúa creciendo y adaptándose."
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");
  const contentBody = document.getElementById("contentBody");
  const timelineWrapper = document.querySelector(".timeline-wrapper");

  // Renderizar la fase inicial (Requisitos)
  renderPhase("requisitos");

  // Evento de selección para cada fase del Timeline
  items.forEach(item => {
    item.addEventListener("click", () => {
      const phaseKey = item.getAttribute("data-phase");

      // Actualizar la clase activa
      items.forEach(el => el.classList.remove("active"));
      item.classList.add("active");

      // Transición suave de salida y entrada del texto
      contentBody.classList.add("fade-out");
      
      setTimeout(() => {
        renderPhase(phaseKey);
        contentBody.classList.remove("fade-out");
        contentBody.classList.add("fade-in");
      }, 250);

      // Desplazamiento suave centrado al hacer clic
      item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
  });

  // Renderiza el contenido de la fase en el DOM
  function renderPhase(key) {
    const data = phasesData[key];
    if (!data) return;

    const paragraphsHTML = data.paragraphs
      .map(p => `<p>${p}</p>`)
      .join("");

    contentBody.innerHTML = `
      <h2 class="content-title">${data.title}</h2>
      ${paragraphsHTML}
    `;
  }

  // Desplazamiento horizontal suave con rueda del ratón en escritorio
  timelineWrapper.addEventListener("wheel", (e) => {
    if (window.innerWidth > 768) {
      e.preventDefault();
      timelineWrapper.scrollLeft += e.deltaY;
    }
  });
});