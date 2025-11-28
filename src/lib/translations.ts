
export type Language = 'en' | 'es' | 'fr' | 'de' | 'hi' | 'zh';

export const languages: { code: Language; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'zh', name: '中文' },
];

const enTranslations = {
  translation: {
    main: {
      title: 'AI Cheat Sheet Generator – Free PDF, URL & Text Summarizer',
      subtitle: 'Turn any long content into a clean, colorful cheat sheet in seconds. Supports PDF, web URL, text, books, class notes, and coding docs.',
    },
    creator: {
      title: 'Create Your Cheat Sheet',
      description: 'Enter content from text, a website, or a PDF to get started.',
      tabs: {
        text: 'Summarize Long Text in One Click',
        url: 'Summarize Web URL into Notes',
        pdf: 'Convert PDF to Cheat Sheet Instantly',
      },
      text: {
        placeholder: 'Paste your long content here...',
      },
      pdf: {
        upload: 'Upload PDF',
        change: 'Change PDF',
      },
      button: {
        generate: 'Generate Cheat Sheet',
      },
    },
    viewer: {
      title: 'Generated Cheat Sheet',
      button: {
        share: 'Share',
        download: 'Download',
      },
      error: {
        title: 'Generation Failed',
      },
      placeholder: {
        title: 'Your cheat sheet will appear here',
        description: 'Just paste your content, click generate, and let our AI work its magic!',
      },
    },
    features: {
      title: 'AI-Powered Cheat Sheet Templates for Every Subject',
      cards: {
        developer: {
          title: 'Create Developer & Coding Cheat Sheets Automatically',
          content: 'From React to Python, our AI extracts code snippets, functions, and key concepts to create the perfect developer quick reference.',
        },
        canDo: {
          title: 'What This Tool Can Do',
          items: [
            'Convert PDF → Cheat Sheet',
            'Summarize any Web URL',
            'Auto-detect subject type (Math, Coding, Medical, Business, Law)',
            'Apply colorful templates',
            'Extract formulas, key points, examples',
            'Developer mode for React & code notes',
            'Export to PDF',
            '100% free',
          ],
        },
        whoUses: {
          title: 'Who Uses Summary.all2ools.com?',
          items: [
            'Students preparing for exams',
            'Developers learning React, Python, JS',
            'Engineers creating formula sheets',
            'Researchers summarizing long articles',
            'Bloggers rewriting content',
            'Readers summarizing books',
          ],
        },
        whyRank: {
          title: 'Why Our Cheat Sheets Rank #1',
          items: [
            'Accurate & deeply summarized',
            'Visual, colorful templates',
            'Easy to print or save',
            'Handles long PDFs (100+ pages)',
            'Works on all devices',
            'Free forever',
          ],
        },
      },
    },
    toast: {
      inputText: {
        title: 'Input is empty',
        description: 'Please paste some text to generate a cheat sheet.',
      },
      inputUrl: {
        title: 'URL is empty',
        description: 'Please enter a URL to generate a cheat sheet.',
      },
      inputPdf: {
        title: 'No PDF file selected',
        description: 'Please select a PDF file to generate a cheat sheet.',
      },
      success: {
        title: 'Success!',
        description: 'Generated a cheat sheet for "{{contentType}}" content.',
      },
      generationFailed: {
          title: 'Generation Failed',
      },
      download: {
        title: 'Download Started',
        description: 'Your cheat sheet is being downloaded.',
      },
      share: {
        title: 'Copied to clipboard!',
        description: 'You can now share the cheat sheet text.',
      },
      invalidFile: {
          title: 'Invalid File Type',
          description: 'Please upload a PDF file.',
      }
    },
    errors: {
      noMeaningfulContent: "No meaningful content found to generate a cheat sheet. Please provide relevant text.",
      generationFailed: 'The AI model failed to generate a cheat sheet for this content. Please try again with different input.',
      unexpected: 'An unexpected error occurred.',
      clipboard: 'Failed to copy cheat sheet to clipboard.',
    }
  },
};

const esTranslations = {
    translation: {
      main: {
        title: 'Generador de Hojas de Trucos con IA – Resumidor Gratuito de PDF, URL y Texto',
        subtitle: 'Convierte cualquier contenido largo en una hoja de trucos limpia y colorida en segundos. Admite PDF, URL web, texto, libros, apuntes de clase y documentos de codificación.',
      },
      creator: {
        title: 'Crea tu Hoja de Trucos',
        description: 'Ingresa contenido desde texto, un sitio web o un PDF para comenzar.',
        tabs: {
          text: 'Resume Texto Largo con Un Clic',
          url: 'Resume URL Web en Notas',
          pdf: 'Convierte PDF a Hoja de Trucos al Instante',
        },
        text: {
          placeholder: 'Pega tu contenido largo aquí...',
        },
        pdf: {
          upload: 'Subir PDF',
          change: 'Cambiar PDF',
        },
        button: {
          generate: 'Generar Hoja de Trucos',
        },
      },
      viewer: {
        title: 'Hoja de Trucos Generada',
        button: {
          share: 'Compartir',
          download: 'Descargar',
        },
        error: {
          title: 'Falló la Generación',
        },
        placeholder: {
          title: 'Tu hoja de trucos aparecerá aquí',
          description: '¡Simplemente pega tu contenido, haz clic en generar y deja que nuestra IA haga su magia!',
        },
      },
      features: {
        title: 'Plantillas de Hojas de Trucos con IA para Cada Materia',
        cards: {
          developer: {
            title: 'Crea Hojas de Trucos para Desarrolladores y Codificación Automáticamente',
            content: 'Desde React hasta Python, nuestra IA extrae fragmentos de código, funciones y conceptos clave para crear la referencia rápida perfecta para desarrolladores.',
          },
          canDo: {
            title: 'Qué Puede Hacer Esta Herramienta',
            items: [
              'Convertir PDF → Hoja de Trucos',
              'Resumir cualquier URL Web',
              'Detectar automáticamente el tipo de materia (Matemáticas, Codificación, Medicina, Negocios, Derecho)',
              'Aplicar plantillas coloridas',
              'Extraer fórmulas, puntos clave, ejemplos',
              'Modo desarrollador para notas de React y código',
              'Exportar a PDF',
              '100% gratis',
            ],
          },
          whoUses: {
            title: '¿Quién Usa Summary.all2ools.com?',
            items: [
              'Estudiantes preparándose para exámenes',
              'Desarrolladores aprendiendo React, Python, JS',
              'Ingenieros creando hojas de fórmulas',
              'Investigadores resumiendo artículos largos',
              'Bloggers reescribiendo contenido',
              'Lectores resumiendo libros',
            ],
          },
          whyRank: {
            title: 'Por Qué Nuestras Hojas de Trucos Son #1',
            items: [
              'Resúmenes precisos y profundos',
              'Plantillas visuales y coloridas',
              'Fácil de imprimir o guardar',
              'Maneja PDFs largos (más de 100 páginas)',
              'Funciona en todos los dispositivos',
              'Gratis para siempre',
            ],
          },
        },
      },
      toast: {
        inputText: {
          title: 'La entrada está vacía',
          description: 'Por favor, pega algo de texto para generar una hoja de trucos.',
        },
        inputUrl: {
          title: 'La URL está vacía',
          description: 'Por favor, ingresa una URL para generar una hoja de trucos.',
        },
        inputPdf: {
          title: 'No se seleccionó ningún archivo PDF',
          description: 'Por favor, selecciona un archivo PDF para generar una hoja de trucos.',
        },
        success: {
          title: '¡Éxito!',
          description: 'Se generó una hoja de trucos para contenido de "{{contentType}}".',
        },
        generationFailed: {
            title: 'Falló la Generación',
        },
        download: {
          title: 'Descarga Iniciada',
          description: 'Tu hoja de trucos se está descargando.',
        },
        share: {
          title: '¡Copiado al portapapeles!',
          description: 'Ahora puedes compartir el texto de la hoja de trucos.',
        },
        invalidFile: {
            title: 'Tipo de Archivo Inválido',
            description: 'Por favor, sube un archivo PDF.',
        }
      },
      errors: {
        noMeaningfulContent: "No se encontró contenido significativo para generar una hoja de trucos. Por favor, proporciona texto relevante.",
        generationFailed: 'El modelo de IA no pudo generar una hoja de trucos para este contenido. Por favor, inténtalo de nuevo con una entrada diferente.',
        unexpected: 'Ocurrió un error inesperado.',
        clipboard: 'No se pudo copiar la hoja de trucos al portapapeles.',
      }
    },
  };

export const translations = {
  en: enTranslations,
  es: esTranslations,
  fr: enTranslations, // Placeholder
  de: enTranslations, // Placeholder
  hi: enTranslations, // Placeholder
  zh: enTranslations, // Placeholder
};
