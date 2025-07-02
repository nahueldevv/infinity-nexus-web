// /public/js/products-data.js

export const products = [
  {
    sku: "NEX-WKST-CORP-01",
    name: 'Workstation Nexus "Quantum"',
    category: "Computadoras a Medida",
    price: 2499.99,
    images: [
      "/images/pc4.jpg",
      "/images/pc-detail-1.jpg",
      "/images/pc-detail-2.jpg",
      "/images/pc-detail-3.jpg",
    ],
    shortDescription:
      "La bestia de nuestro catálogo. Diseñada sin compromisos para renderizado 3D profesional, simulación y análisis de datos a gran escala. Potencia que redefine los límites.",
    fullDescription: `<h2>Rendimiento Extremo, Diseño Impecable</h2><p>La Workstation Quantum es el resultado de una ingeniería obsesiva por el detalle. Cada componente, desde el procesador de última generación hasta el sistema de refrigeración líquida, está pensado para trabajar en perfecta sinergia, ofreciendo un rendimiento sostenido durante horas de trabajo intensivo. Su chasis de aluminio cepillado no solo es elegante, sino que está diseñado para un flujo de aire óptimo, manteniendo las temperaturas bajo control en todo momento.</p>`,
    specs: {
      Procesador: "Intel Core i9-14900K",
      "Placa Madre": "ASUS ROG STRIX Z790-E GAMING WIFI II",
      "Memoria RAM": "64 GB Corsair Dominator Platinum DDR5 6200MHz",
      "Tarjeta Gráfica": "NVIDIA GeForce RTX 4090 24GB GDDR6X",
      Almacenamiento: "2TB Samsung 990 Pro NVMe PCIe 4.0 SSD",
      "Fuente de Poder": "1200W 80+ Platinum Modular",
      Refrigeración: "Corsair H150i Elite Capellix XT 360mm AIO",
      Gabinete: "Fractal Design Meshify 2",
      "Sistema Operativo": "Windows 11 Pro",
    },
    reviews: [
      {
        author: "Martín G. - Tech Lead",
        rating: 5,
        title: "Una bestia para compilar",
        comment:
          "Compila proyectos de C++ en una fracción del tiempo. Los 64GB de RAM son clave para nuestras máquinas virtuales. Vale cada centavo.",
      },
      {
        author: "Arq. Valeria Paz",
        rating: 5,
        title: "Renderizados ultra rápidos",
        comment:
          "Lo que antes tardaba horas, ahora está listo en minutos. El flujo de trabajo con Lumion y V-Ray es increíblemente fluido.",
      },
      {
        author: "Sofía Romano - Jefa de Compras",
        rating: 4,
        title: "Inversión inteligente",
        comment:
          "Aunque el costo inicial es alto, el aumento en la productividad del equipo de diseño justifica la inversión. El soporte de Nexus fue excelente.",
      },
    ],
    faq: [
      {
        question:
          "¿Esta configuración soporta dos tarjetas gráficas (SLI/NVLink)?",
        answer:
          "Sí, la placa madre y la fuente de poder están preparadas para soportar una segunda RTX 4090, aunque se requeriría una consulta para asegurar la compatibilidad del gabinete y la refrigeración.",
      },
      {
        question: "¿La garantía cubre overclocking?",
        answer:
          "La garantía estándar cubre todos los componentes contra fallos de fábrica. Los daños derivados de un overclocking manual extremo no están cubiertos. Ofrecemos perfiles de overclock seguros y probados como parte del paquete Nexus Elite.",
      },
      {
        question:
          "¿Es posible solicitar una configuración con procesador AMD Threadripper?",
        answer:
          "¡Absolutamente! Contáctanos para una cotización personalizada. Podemos ensamblar la workstation con los componentes que tu flujo de trabajo requiera.",
      },
    ],
  },
  // ... más productos con la misma estructura ...
];
