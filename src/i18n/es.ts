export default {
  languageLabel: "Idioma",
  languageOptions: {
    es: "ES",
    en: "EN",
  },

  header: {
    title: "Portafolio",
  },

  nav: { 
    home: "Inicio",
    experience: "Experiencia",
    projects: "Proyectos",
    about: "Sobre mí",
    contact: "Contacto",
  },

  hero: {
    title: "Ingeniero de {Software}",
    text: "Hola! Soy Alan, un desarrollador web con más de 2 años de experiencia, especializado en crear aplicaciones web modernas y eficientes.",
    buttonText: "Ver CV",
    linkCV: "https://drive.google.com/file/d/1fQmn9rSgFTX44NjEUmpvRL2vEXiVIdS2/view?usp=sharing",
  },

  experience: {
    title: "Experiencia",
    job: {
      job1: {
        title: "Desarrollador Frontend",
        company: "Albbus",
        date: "Octubre 2025 - Diciembre 2025",
        description: [
          "Convertí diseños de Figma en interfaces funcionales usando React, TypeScript y Tailwind CSS.",
          "Implementé diseños responsivos, optimizados para múltiples resoluciones y dispositivos.",
          "Desarrollé componentes reutilizables y modulares, facilitando la escalabilidad y el mantenimiento del proyecto.",
          "Maximicé el rendimiento de la visualización al reducir las cargas innecesarias.",
          "Refactoricé componentes existentes para mejorar legibilidad, rendimiento y reutilización.",
          "Implementé validaciones y manejo de errores en el frontend.",
        ],
      },
      job2: {
        title: "Desarrollador Full Stack",
        company: "Gofrida",
        date: "Agosto 2023 - Octubre 2025",
        description: [
          "Diseñé e implementé notificaciones automáticas por correo electrónico con Action Mailer, optimizando la comunicación con clientes.",
          "Desarrollé un sistema de gestión de pedidos recurrentes, automatizando la generación y procesamiento de órdenes.",
          "Implementé colas de trabajo y procesamiento en segundo plano con Active Job y Shoryuken, mejorando la eficiencia en el manejo de tareas asíncronas.",
          "Diseñé e implementé formularios dinámicos y personalizados para mejorar la interacción del usuario y la recolección de datos.",
          "Integré APIs externas y servicios en la nube, ampliando la funcionalidad de la aplicación.",
          "Construí interfaces responsivas y atractivas con Tailwind CSS, mejorando la experiencia de usuario.",
          "Implementé y personalicé componentes en React, incorporando hooks y manejo de estado para interfaces altamente interactivas.",
        ],
      },
      job3: {
        date: "Febrero 2023 - Junio 2023",
        title: "Prácticas en Automatización de Procesos",
        company: "R O B O Y O",
        description: [
          "Desarrollé bots para automatizar procesos como la generación de correos, firma de documentos PDF y recolección de datos.",
          "Implementé un framework de automatización en Excel, permitiendo la ejecución automática de hasta seis funciones personalizadas.",
          "Apliqué técnicas de inteligencia artificial y utilicé RPA (Robotic Process Automation) con UiPath, fortaleciendo mi experiencia en automatización de procesos.",
        ],
      } 
    },
    showMore: "Mostrar más",
    showLess: "Mostrar menos",
  },

  projects: {
    title: "Proyectos",
    project: {
      project1: {
        title: "Gofrida - Guardian de Mascotas",
        description: "Plataforma web para conectar dueños de mascotas con cuidadores confiables. Cuenta con servicios de hospedaje, guardería, visitas y paseos para mascotas. Desarrollada con Ruby on Rails, React, JavaScript y Tailwind.",
      },
      project2: {
        title: "A L O N E - Videojuego Indie",
        description: "Videojuego de plataforma en 2D desarrollado en Godot. Explora niveles misteriosos y enfrenta desafíos para descubrir la historia detrás de tu soledad.",
      }
    }
  },

  about: {
    title: "Sobre mí",
    text1: "Soy Alan, y desde que escribí mis primeras líneas de código entendí que programar no es solo {hacer que las cosas funcionen,} sino {crear experiencias que realmente aporten valor.}",
    text2: "Disfruto transformar ideas en {productos claros, funcionales y bien construidos.} Me gusta {cuidar los detalles,} pensar en las personas que usarán lo que desarrollo y buscar {soluciones simples a problemas complejos.} Para mí, un buen código no solo se ejecuta: se entiende, se mantiene y evoluciona.",
    text3: "Trabajo principalmente con tecnologías web modernas, combinando {lógica, diseño y estructura} para crear {aplicaciones sólidas y agradables de usar.} Aprendo de forma constante, me adapto con facilidad y afronto nuevos retos con entusiasmo.",
  },

  footer: {
    text: "Todos los derechos reservados",
  },
}