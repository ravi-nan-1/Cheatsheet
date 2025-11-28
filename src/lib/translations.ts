
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

const frTranslations = {
  translation: {
    main: {
      title: '[fr] AI Cheat Sheet Generator – Free PDF, URL & Text Summarizer',
      subtitle: '[fr] Turn any long content into a clean, colorful cheat sheet in seconds. Supports PDF, web URL, text, books, class notes, and coding docs.',
    },
    creator: {
      title: '[fr] Create Your Cheat Sheet',
      description: '[fr] Enter content from text, a website, or a PDF to get started.',
      tabs: {
        text: '[fr] Summarize Long Text in One Click',
        url: '[fr] Summarize Web URL into Notes',
        pdf: '[fr] Convert PDF to Cheat Sheet Instantly',
      },
      text: {
        placeholder: '[fr] Paste your long content here...',
      },
      pdf: {
        upload: '[fr] Upload PDF',
        change: '[fr] Change PDF',
      },
      button: {
        generate: '[fr] Generate Cheat Sheet',
      },
    },
    viewer: {
      title: '[fr] Generated Cheat Sheet',
      button: {
        share: '[fr] Share',
        download: '[fr] Download',
      },
      error: {
        title: '[fr] Generation Failed',
      },
      placeholder: {
        title: '[fr] Your cheat sheet will appear here',
        description: '[fr] Just paste your content, click generate, and let our AI work its magic!',
      },
    },
    features: {
      title: '[fr] AI-Powered Cheat Sheet Templates for Every Subject',
      cards: {
        developer: {
          title: '[fr] Create Developer & Coding Cheat Sheets Automatically',
          content: '[fr] From React to Python, our AI extracts code snippets, functions, and key concepts to create the perfect developer quick reference.',
        },
        canDo: {
          title: '[fr] What This Tool Can Do',
          items: [
            '[fr] Convert PDF → Cheat Sheet',
            '[fr] Summarize any Web URL',
            '[fr] Auto-detect subject type (Math, Coding, Medical, Business, Law)',
            '[fr] Apply colorful templates',
            '[fr] Extract formulas, key points, examples',
            '[fr] Developer mode for React & code notes',
            '[fr] Export to PDF',
            '[fr] 100% free',
          ],
        },
        whoUses: {
          title: '[fr] Who Uses Summary.all2ools.com?',
          items: [
            '[fr] Students preparing for exams',
            '[fr] Developers learning React, Python, JS',
            '[fr] Engineers creating formula sheets',
            '[fr] Researchers summarizing long articles',
            '[fr] Bloggers rewriting content',
            '[fr] Readers summarizing books',
          ],
        },
        whyRank: {
          title: '[fr] Why Our Cheat Sheets Rank #1',
          items: [
            '[fr] Accurate & deeply summarized',
            '[fr] Visual, colorful templates',
            '[fr] Easy to print or save',
            '[fr] Handles long PDFs (100+ pages)',
            '[fr] Works on all devices',
            '[fr] Free forever',
          ],
        },
      },
    },
    toast: {
      inputText: {
        title: '[fr] Input is empty',
        description: '[fr] Please paste some text to generate a cheat sheet.',
      },
      inputUrl: {
        title: '[fr] URL is empty',
        description: '[fr] Please enter a URL to generate a cheat sheet.',
      },
      inputPdf: {
        title: '[fr] No PDF file selected',
        description: '[fr] Please select a PDF file to generate a cheat sheet.',
      },
      success: {
        title: '[fr] Success!',
        description: '[fr] Generated a cheat sheet for "{{contentType}}" content.',
      },
      generationFailed: {
          title: '[fr] Generation Failed',
      },
      download: {
        title: '[fr] Download Started',
        description: '[fr] Your cheat sheet is being downloaded.',
      },
      share: {
        title: '[fr] Copied to clipboard!',
        description: '[fr] You can now share the cheat sheet text.',
      },
      invalidFile: {
          title: '[fr] Invalid File Type',
          description: '[fr] Please upload a PDF file.',
      }
    },
    errors: {
      noMeaningfulContent: "[fr] No meaningful content found to generate a cheat sheet. Please provide relevant text.",
      generationFailed: '[fr] The AI model failed to generate a cheat sheet for this content. Please try again with different input.',
      unexpected: '[fr] An unexpected error occurred.',
      clipboard: '[fr] Failed to copy cheat sheet to clipboard.',
    }
  },
};

const deTranslations = {
  translation: {
    main: {
      title: '[de] AI Cheat Sheet Generator – Free PDF, URL & Text Summarizer',
      subtitle: '[de] Turn any long content into a clean, colorful cheat sheet in seconds. Supports PDF, web URL, text, books, class notes, and coding docs.',
    },
    creator: {
      title: '[de] Create Your Cheat Sheet',
      description: '[de] Enter content from text, a website, or a PDF to get started.',
      tabs: {
        text: '[de] Summarize Long Text in One Click',
        url: '[de] Summarize Web URL into Notes',
        pdf: '[de] Convert PDF to Cheat Sheet Instantly',
      },
      text: {
        placeholder: '[de] Paste your long content here...',
      },
      pdf: {
        upload: '[de] Upload PDF',
        change: '[de] Change PDF',
      },
      button: {
        generate: '[de] Generate Cheat Sheet',
      },
    },
    viewer: {
      title: '[de] Generated Cheat Sheet',
      button: {
        share: '[de] Share',
        download: '[de] Download',
      },
      error: {
        title: '[de] Generation Failed',
      },
      placeholder: {
        title: '[de] Your cheat sheet will appear here',
        description: '[de] Just paste your content, click generate, and let our AI work its magic!',
      },
    },
    features: {
      title: '[de] AI-Powered Cheat Sheet Templates for Every Subject',
      cards: {
        developer: {
          title: '[de] Create Developer & Coding Cheat Sheets Automatically',
          content: '[de] From React to Python, our AI extracts code snippets, functions, and key concepts to create the perfect developer quick reference.',
        },
        canDo: {
          title: '[de] What This Tool Can Do',
          items: [
            '[de] Convert PDF → Cheat Sheet',
            '[de] Summarize any Web URL',
            '[de] Auto-detect subject type (Math, Coding, Medical, Business, Law)',
            '[de] Apply colorful templates',
            '[de] Extract formulas, key points, examples',
            '[de] Developer mode for React & code notes',
            '[de] Export to PDF',
            '[de] 100% free',
          ],
        },
        whoUses: {
          title: '[de] Who Uses Summary.all2ools.com?',
          items: [
            '[de] Students preparing for exams',
            '[de] Developers learning React, Python, JS',
            '[de] Engineers creating formula sheets',
            '[de] Researchers summarizing long articles',
            '[de] Bloggers rewriting content',
            '[de] Readers summarizing books',
          ],
        },
        whyRank: {
          title: '[de] Why Our Cheat Sheets Rank #1',
          items: [
            '[de] Accurate & deeply summarized',
            '[de] Visual, colorful templates',
            '[de] Easy to print or save',
            '[de] Handles long PDFs (100+ pages)',
            '[de] Works on all devices',
            '[de] Free forever',
          ],
        },
      },
    },
    toast: {
      inputText: {
        title: '[de] Input is empty',
        description: '[de] Please paste some text to generate a cheat sheet.',
      },
      inputUrl: {
        title: '[de] URL is empty',
        description: '[de] Please enter a URL to generate a cheat sheet.',
      },
      inputPdf: {
        title: '[de] No PDF file selected',
        description: '[de] Please select a PDF file to generate a cheat sheet.',
      },
      success: {
        title: '[de] Success!',
        description: '[de] Generated a cheat sheet for "{{contentType}}" content.',
      },
      generationFailed: {
          title: '[de] Generation Failed',
      },
      download: {
        title: '[de] Download Started',
        description: '[de] Your cheat sheet is being downloaded.',
      },
      share: {
        title: '[de] Copied to clipboard!',
        description: '[de] You can now share the cheat sheet text.',
      },
      invalidFile: {
          title: '[de] Invalid File Type',
          description: '[de] Please upload a PDF file.',
      }
    },
    errors: {
      noMeaningfulContent: "[de] No meaningful content found to generate a cheat sheet. Please provide relevant text.",
      generationFailed: '[de] The AI model failed to generate a cheat sheet for this content. Please try again with different input.',
      unexpected: '[de] An unexpected error occurred.',
      clipboard: '[de] Failed to copy cheat sheet to clipboard.',
    }
  },
};

const hiTranslations = {
  translation: {
    main: {
      title: '[hi] AI Cheat Sheet Generator – Free PDF, URL & Text Summarizer',
      subtitle: '[hi] Turn any long content into a clean, colorful cheat sheet in seconds. Supports PDF, web URL, text, books, class notes, and coding docs.',
    },
    creator: {
      title: '[hi] Create Your Cheat Sheet',
      description: '[hi] Enter content from text, a website, or a PDF to get started.',
      tabs: {
        text: '[hi] Summarize Long Text in One Click',
        url: '[hi] Summarize Web URL into Notes',
        pdf: '[hi] Convert PDF to Cheat Sheet Instantly',
      },
      text: {
        placeholder: '[hi] Paste your long content here...',
      },
      pdf: {
        upload: '[hi] Upload PDF',
        change: '[hi] Change PDF',
      },
      button: {
        generate: '[hi] Generate Cheat Sheet',
      },
    },
    viewer: {
      title: '[hi] Generated Cheat Sheet',
      button: {
        share: '[hi] Share',
        download: '[hi] Download',
      },
      error: {
        title: '[hi] Generation Failed',
      },
      placeholder: {
        title: '[hi] Your cheat sheet will appear here',
        description: '[hi] Just paste your content, click generate, and let our AI work its magic!',
      },
    },
    features: {
      title: '[hi] AI-Powered Cheat Sheet Templates for Every Subject',
      cards: {
        developer: {
          title: '[hi] Create Developer & Coding Cheat Sheets Automatically',
          content: '[hi] From React to Python, our AI extracts code snippets, functions, and key concepts to create the perfect developer quick reference.',
        },
        canDo: {
          title: '[hi] What This Tool Can Do',
          items: [
            '[hi] Convert PDF → Cheat Sheet',
            '[hi] Summarize any Web URL',
            '[hi] Auto-detect subject type (Math, Coding, Medical, Business, Law)',
            '[hi] Apply colorful templates',
            '[hi] Extract formulas, key points, examples',
            '[hi] Developer mode for React & code notes',
            '[hi] Export to PDF',
            '[hi] 100% free',
          ],
        },
        whoUses: {
          title: '[hi] Who Uses Summary.all2ools.com?',
          items: [
            '[hi] Students preparing for exams',
            '[hi] Developers learning React, Python, JS',
            '[hi] Engineers creating formula sheets',
            '[hi] Researchers summarizing long articles',
            '[hi] Bloggers rewriting content',
            '[hi] Readers summarizing books',
          ],
        },
        whyRank: {
          title: '[hi] Why Our Cheat Sheets Rank #1',
          items: [
            '[hi] Accurate & deeply summarized',
            '[hi] Visual, colorful templates',
            '[hi] Easy to print or save',
            '[hi] Handles long PDFs (100+ pages)',
            '[hi] Works on all devices',
            '[hi] Free forever',
          ],
        },
      },
    },
    toast: {
      inputText: {
        title: '[hi] Input is empty',
        description: '[hi] Please paste some text to generate a cheat sheet.',
      },
      inputUrl: {
        title: '[hi] URL is empty',
        description: '[hi] Please enter a URL to generate a cheat sheet.',
      },
      inputPdf: {
        title: '[hi] No PDF file selected',
        description: '[hi] Please select a PDF file to generate a cheat sheet.',
      },
      success: {
        title: '[hi] Success!',
        description: '[hi] Generated a cheat sheet for "{{contentType}}" content.',
      },
      generationFailed: {
          title: '[hi] Generation Failed',
      },
      download: {
        title: '[hi] Download Started',
        description: '[hi] Your cheat sheet is being downloaded.',
      },
      share: {
        title: '[hi] Copied to clipboard!',
        description: '[hi] You can now share the cheat sheet text.',
      },
      invalidFile: {
          title: '[hi] Invalid File Type',
          description: '[hi] Please upload a PDF file.',
      }
    },
    errors: {
      noMeaningfulContent: "[hi] No meaningful content found to generate a cheat sheet. Please provide relevant text.",
      generationFailed: '[hi] The AI model failed to generate a cheat sheet for this content. Please try again with different input.',
      unexpected: '[hi] An unexpected error occurred.',
      clipboard: '[hi] Failed to copy cheat sheet to clipboard.',
    }
  },
};

const zhTranslations = {
  translation: {
    main: {
      title: '[zh] AI Cheat Sheet Generator – Free PDF, URL & Text Summarizer',
      subtitle: '[zh] Turn any long content into a clean, colorful cheat sheet in seconds. Supports PDF, web URL, text, books, class notes, and coding docs.',
    },
    creator: {
      title: '[zh] Create Your Cheat Sheet',
      description: '[zh] Enter content from text, a website, or a PDF to get started.',
      tabs: {
        text: '[zh] Summarize Long Text in One Click',
        url: '[zh] Summarize Web URL into Notes',
        pdf: '[zh] Convert PDF to Cheat Sheet Instantly',
      },
      text: {
        placeholder: '[zh] Paste your long content here...',
      },
      pdf: {
        upload: '[zh] Upload PDF',
        change: '[zh] Change PDF',
      },
      button: {
        generate: '[zh] Generate Cheat Sheet',
      },
    },
    viewer: {
      title: '[zh] Generated Cheat Sheet',
      button: {
        share: '[zh] Share',
        download: '[zh] Download',
      },
      error: {
        title: '[zh] Generation Failed',
      },
      placeholder: {
        title: '[zh] Your cheat sheet will appear here',
        description: '[zh] Just paste your content, click generate, and let our AI work its magic!',
      },
    },
    features: {
      title: '[zh] AI-Powered Cheat Sheet Templates for Every Subject',
      cards: {
        developer: {
          title: '[zh] Create Developer & Coding Cheat Sheets Automatically',
          content: '[zh] From React to Python, our AI extracts code snippets, functions, and key concepts to create the perfect developer quick reference.',
        },
        canDo: {
          title: '[zh] What This Tool Can Do',
          items: [
            '[zh] Convert PDF → Cheat Sheet',
            '[zh] Summarize any Web URL',
            '[zh] Auto-detect subject type (Math, Coding, Medical, Business, Law)',
            '[zh] Apply colorful templates',
            '[zh] Extract formulas, key points, examples',
            '[zh] Developer mode for React & code notes',
            '[zh] Export to PDF',
            '[zh] 100% free',
          ],
        },
        whoUses: {
          title: '[zh] Who Uses Summary.all2ools.com?',
          items: [
            '[zh] Students preparing for exams',
            '[zh] Developers learning React, Python, JS',
            '[zh] Engineers creating formula sheets',
            '[zh] Researchers summarizing long articles',
            '[zh] Bloggers rewriting content',
            '[zh] Readers summarizing books',
          ],
        },
        whyRank: {
          title: '[zh] Why Our Cheat Sheets Rank #1',
          items: [
            '[zh] Accurate & deeply summarized',
            '[zh] Visual, colorful templates',
            '[zh] Easy to print or save',
            '[zh] Handles long PDFs (100+ pages)',
            '[zh] Works on all devices',
            '[zh] Free forever',
          ],
        },
      },
    },
    toast: {
      inputText: {
        title: '[zh] Input is empty',
        description: '[zh] Please paste some text to generate a cheat sheet.',
      },
      inputUrl: {
        title: '[zh] URL is empty',
        description: '[zh] Please enter a URL to generate a cheat sheet.',
      },
      inputPdf: {
        title: '[zh] No PDF file selected',
        description: '[zh] Please select a PDF file to generate a cheat sheet.',
      },
      success: {
        title: '[zh] Success!',
        description: '[zh] Generated a cheat sheet for "{{contentType}}" content.',
      },
      generationFailed: {
          title: '[zh] Generation Failed',
      },
      download: {
        title: '[zh] Download Started',
        description: '[zh] Your cheat sheet is being downloaded.',
      },
      share: {
        title: '[zh] Copied to clipboard!',
        description: '[zh] You can now share the cheat sheet text.',
      },
      invalidFile: {
          title: '[zh] Invalid File Type',
          description: '[zh] Please upload a PDF file.',
      }
    },
    errors: {
      noMeaningfulContent: "[zh] No meaningful content found to generate a cheat sheet. Please provide relevant text.",
      generationFailed: '[zh] The AI model failed to generate a cheat sheet for this content. Please try again with different input.',
      unexpected: '[zh] An unexpected error occurred.',
      clipboard: '[zh] Failed to copy cheat sheet to clipboard.',
    }
  },
};

export const translations = {
  en: enTranslations,
  es: esTranslations,
  fr: frTranslations,
  de: deTranslations,
  hi: hiTranslations,
  zh: zhTranslations,
};
