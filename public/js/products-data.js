// /public/js/products-data.js

export const products = [
  // --- PCs ARMADAS ---

  // 1. Workstation "Creator"

  {
    sku: "NEX-WKS-CREATOR-01",
    name: 'Workstation Nexus "Quantum"',
    category: "Computadoras a Medida",
    price: 1950000.0,
    images: [
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751545895/1.3_eycccj.avif",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751545894/1.4_d4p6pb.png",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751545898/1.2_tovhza.avif",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751545900/1.1_thj6ks.avif",
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

  // 2. Nexus Office SFF
  {
    sku: "NEX-PC-OFFICE-01",
    name: "Nexus Office SFF",
    category: "Computadoras a Medida",
    price: 680000.0,
    images: [
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751548846/1.3_jeuc5n.webp",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751548846/1.3_jeuc5n.webp",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751548846/1.3_jeuc5n.webp",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751548846/1.3_jeuc5n.webp",
    ],
    shortDescription:
      "Intel Core i3, 16GB RAM, 512GB SSD. Rendimiento silencioso y eficiente en un chasis de formato pequeño (SFF) que ahorra espacio.",
    fullDescription:
      "<h2>Productividad en un Paquete Compacto</h2><p>La Nexus Office SFF es la solución ideal para entornos de oficina modernos. Su diseño de formato pequeño (Small Form Factor) ocupa un espacio mínimo en el escritorio, mientras que sus componentes eficientes garantizan un funcionamiento silencioso y de bajo consumo, perfecto para despliegues masivos en empresas.</p>",
    specs: {
      Procesador: "Intel Core i3-13100",
      "Placa Madre": "Chipset H610M SFF",
      "Memoria RAM": "16GB DDR4 3200MHz",
      Almacenamiento: "512GB NVMe Gen3 SSD",
      Gráficos: "Intel UHD Graphics 730 integrados",
      Gabinete: "Chasis Small Form Factor (SFF) de acero",
    },
    reviews: [
      {
        author: "Jefe de Administración",
        rating: 5,
        title: "Perfectas para la oficina",
        comment:
          "Compramos 20 para renovar el parque informático. Son rápidas, silenciosas y el tamaño es ideal.",
      },
    ],
    faq: [
      {
        question: "¿Se le puede añadir una tarjeta gráfica dedicada?",
        answer:
          "Debido a su formato compacto, solo admite tarjetas gráficas de bajo perfil (low-profile). Para tareas gráficas intensivas, recomendamos nuestros modelos Workstation.",
      },
    ],
  },

  // 3. Workstation "Quantum-X"
  {
    sku: "NEX-WKS-QUANTUM-01",
    name: 'Workstation "Quantum-X"',
    category: "Computadoras a Medida",
    price: 4200000.0,
    images: [
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751549190/1.7_fsaznl.jpg",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751549190/1.7_fsaznl.jpg",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751549190/1.7_fsaznl.jpg",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751549190/1.7_fsaznl.jpg",
    ],
    shortDescription:
      "Intel Core i9, 64GB RAM DDR5, RTX 4080, 2TB NVMe Gen5. Rendimiento sin concesiones para simulación, IA y renderizado profesional.",
    fullDescription: `<h2>El Futuro del Rendimiento</h2><p>La Quantum-X no es solo una computadora, es una declaración de intenciones. Diseñada para los profesionales que no aceptan un "no" por respuesta, esta máquina está equipada con lo último en tecnología para enfrentar simulaciones científicas, entrenamiento de modelos de IA y los proyectos de renderizado 3D más ambiciosos del mercado.</p>`,
    specs: {
      Procesador: "Intel Core i9-14900K",
      "Placa Madre": "Chipset Z790 de alta gama",
      "Memoria RAM": "64GB Corsair Vengeance DDR5 6000MHz",
      "Tarjeta Gráfica": "NVIDIA GeForce RTX 4080 16GB GDDR6X",
      Almacenamiento: "2TB Crucial T700 NVMe Gen5 SSD",
      "Fuente de Poder": "1000W 80+ Gold Modular",
      Refrigeración: "Sistema de Refrigeración Líquida AIO de 360mm",
    },
    reviews: [
      {
        author: "Jefe de Administración",
        rating: 5,
        title: "Perfectas para la oficina",
        comment:
          "Compramos 20 para renovar el parque informático. Son rápidas, silenciosas y el tamaño es ideal.",
      },
    ],
    faq: [],
  },

  // 4. Servidor "NexusVault"
  {
    sku: "NEX-SVR-VAULT-01",
    name: 'Servidor "NexusVault"',
    category: "Computadoras a Medida",
    price: 2850000.0,
    images: [
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751550150/1.9_brxphf.png",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751550150/1.9_brxphf.png",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751550150/1.9_brxphf.png",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751550150/1.9_brxphf.png",
    ],
    shortDescription:
      "Intel Xeon E-2300, 32GB RAM ECC, 2x2TB HDD en RAID 1. Fiabilidad 24/7 para tus datos, aplicaciones y copias de seguridad.",
    fullDescription: `<h2>El Corazón Seguro de tu Empresa</h2><p>Protege el activo más importante de tu negocio: tus datos. El NexusVault está construido con componentes de servidor para garantizar un funcionamiento ininterrumpido 24/7. La memoria ECC previene la corrupción de datos y la configuración RAID 1 espeja tus discos duros para una redundancia instantánea.</p>`,
    specs: {
      Procesador: "Intel Xeon E-2324G",
      "Placa Madre": "Server-grade W680 Chipset",
      "Memoria RAM": "32GB DDR4 ECC (Error-Correcting Code)",
      Almacenamiento: "2 x 2TB Seagate IronWolf HDD (configurados en RAID 1)",
      "Almacenamiento SO": "256GB NVMe SSD para el Sistema Operativo",
      Conectividad: "Doble puerto Intel 2.5GbE LAN",
    },
    reviews: [
      {
        author: "Jefe de Administración",
        rating: 5,
        title: "Perfectas para la oficina",
        comment:
          "Compramos 20 para renovar el parque informático. Son rápidas, silenciosas y el tamaño es ideal.",
      },
    ],
    faq: [],
  },

  // 5. Nexus Point-of-Sale
  {
    sku: "NEX-PC-POS-01",
    name: "Nexus Point-of-Sale",
    category: "Computadoras a Medida",
    price: 550000.0,
    images: [
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751548801/1.4_lsz5xp.webp",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751548801/1.4_lsz5xp.webp",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751548801/1.4_lsz5xp.webp",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751548801/1.4_lsz5xp.webp",
    ],
    shortDescription:
      "Solución ultra compacta y de bajo consumo, con múltiples puertos COM y USB para conectar impresoras fiscales, lectores y más.",
    fullDescription: `<h2>El Cerebro de tu Punto de Venta</h2><p>Diseñado para la máxima fiabilidad en entornos comerciales. El Nexus POS es un equipo compacto, sin partes móviles (fanless) para resistir el polvo y operar en silencio. Su amplia gama de puertos seriales (COM) y USB asegura la compatibilidad con todos tus periféricos de facturación y venta.</p>`,
    specs: {
      Procesador: "Intel Celeron N5105 (bajo consumo)",
      "Memoria RAM": "8GB DDR4 SODIMM",
      Almacenamiento: "256GB M.2 SATA SSD",
      Puertos:
        "4x USB 3.0, 2x USB 2.0, 2x RS232/422/485 (COM), 2x LAN, HDMI, VGA",
      Chasis: "Industrial Fanless (sin ventilador)",
    },
    reviews: [
      {
        author: "Jefe de Administración",
        rating: 5,
        title: "Perfectas para la oficina",
        comment:
          "Compramos 20 para renovar el parque informático. Son rápidas, silenciosas y el tamaño es ideal.",
      },
    ],
    faq: [],
  },

  // 6. Workstation "Pro-Nexus"
  {
    sku: "NEX-WKS-PRO-01",
    name: 'Workstation "Pro-Nexus"',
    category: "Computadoras a Medida",
    price: 1750000.0,
    images: [
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751549200/1.8_elsrcr.jpg",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751549200/1.8_elsrcr.jpg",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751549200/1.8_elsrcr.jpg",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751549200/1.8_elsrcr.jpg",
    ],
    shortDescription:
      "Ryzen 7, 32GB RAM DDR5, RTX 4060 Ti. El equilibrio perfecto entre potencia de CPU y aceleración gráfica para desarrolladores y analistas.",
    fullDescription: `<h2>El Todoterreno Profesional</h2><p>La Pro-Nexus es nuestra estación de trabajo más versátil. Es ideal para programadores que necesitan compilar código rápidamente, analistas de datos que manejan grandes datasets y profesionales que requieren un extra de potencia gráfica para visualizaciones o diseño ocasional. Un verdadero caballo de batalla.</p>`,
    specs: {
      Procesador: "AMD Ryzen 7 7700X",
      "Placa Madre": "Chipset B650M",
      "Memoria RAM": "32GB Kingston Fury DDR5 5600MHz",
      "Tarjeta Gráfica": "NVIDIA GeForce RTX 4060 Ti 8GB",
      Almacenamiento: "1TB Crucial P5 Plus NVMe Gen4 SSD",
      "Fuente de Poder": "750W 80+ Bronze",
      Refrigeración: "Cooler de CPU por aire de alto rendimiento",
    },
    reviews: [
      {
        author: "Jefe de Administración",
        rating: 5,
        title: "Perfectas para la oficina",
        comment:
          "Compramos 20 para renovar el parque informático. Son rápidas, silenciosas y el tamaño es ideal.",
      },
    ],
    faq: [],
  },
  // ... más productos con la misma estructura ...

  // --- NOTEBOOKS (Los 12 nuevos modelos) ---

  // Producto 1: MacBook Air 13" (M2)
  {
    sku: "APL-MBA-M2-13",
    name: 'MacBook Air 13" (M2)',
    category: "Notebooks Profesionales",
    price: 999.0,
    images: [
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751546263/3.2_eistcs.jpg",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751546263/3.2_eistcs.jpg",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751546263/3.2_eistcs.jpg",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751546263/3.2_eistcs.jpg",
    ],
    shortDescription:
      "El punto de entrada ideal al ecosistema Apple. Ultraportátil y eficiente para tareas diarias y reuniones.",
    fullDescription:
      "<h2>Eficiencia en su máxima expresión</h2><p>Con el revolucionario chip M2, el MacBook Air ofrece un rendimiento increíble en un diseño delgado y ligero sin ventilador. Perfecto para profesionales que necesitan una máquina fiable y con una batería que dura todo el día.</p>",
    specs: {
      Chip: "Apple M2 (8-core CPU, 8-core GPU)",
      Memoria: "8GB memoria unificada",
      Almacenamiento: "256GB SSD",
      Pantalla: '13.6" Liquid Retina',
    },
    reviews: [
      {
        author: "Contador Pérez",
        rating: 5,
        title: "Perfecta para el trabajo",
        comment:
          "Rápida, liviana y la batería no se acaba nunca. Justo lo que necesitaba para visitar clientes.",
      },
    ],
    faq: [
      {
        question: "¿Puedo conectar dos monitores externos?",
        answer:
          "El chip M2 soporta de forma nativa un monitor externo. Para configuraciones de múltiples monitores se requieren adaptadores o docks compatibles con DisplayLink.",
      },
    ],
  },

  // Producto 2: MacBook Air 15" (M3)
  {
    sku: "APL-MBA-M3-15",
    name: 'MacBook Air 15" (M3)',
    category: "Notebooks Profesionales",
    price: 1699.0,
    images: [
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751545979/3.1_u8hy7u.jpg",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751545979/3.1_u8hy7u.jpg",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751545979/3.1_u8hy7u.jpg",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751545979/3.1_u8hy7u.jpg",
    ],
    shortDescription:
      "Más espacio de pantalla sin sacrificar portabilidad. El chip M3 ofrece un rendimiento superior para multitarea.",
    fullDescription:
      "<h2>Amplitud y Potencia</h2><p>El MacBook Air de 15 pulgadas te da más espacio para trabajar y jugar. Con la potencia del chip M3, es capaz de manejar cargas de trabajo más exigentes, desde hojas de cálculo complejas hasta edición de fotos de alta resolución, todo en un diseño increíblemente delgado.</p>",
    specs: {
      Chip: "Apple M3 (8-core CPU, 10-core GPU)",
      Memoria: "16GB memoria unificada",
      Almacenamiento: "512GB SSD",
      Pantalla: '15.3" Liquid Retina',
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
    faq: [],
  },

  // Producto 3: MacBook Pro 14" (M3)
  {
    sku: "APL-MBP-M3-14",
    name: 'MacBook Pro 14" (M3)',
    category: "Notebooks Profesionales",
    price: 1599.0,
    images: [
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751545975/3.3_urhtlb.jpg",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751545975/3.3_urhtlb.jpg",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751545975/3.3_urhtlb.jpg",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751545975/3.3_urhtlb.jpg",
    ],
    shortDescription:
      "El primer escalón Pro. Con ventilación activa para un rendimiento sostenido y una pantalla Liquid Retina XDR espectacular.",
    fullDescription:
      "<h2>El Comienzo del Rendimiento Pro</h2><p>El MacBook Pro con chip M3 es la puerta de entrada al rendimiento profesional. Su sistema de refrigeración activa permite mantener la máxima velocidad durante más tiempo, ideal para tareas que requieren potencia sostenida. La pantalla Liquid Retina XDR es la mejor del mercado, con un brillo y un rango dinámico incomparables.</p>",
    specs: {
      Chip: "Apple M3 (8-core CPU, 10-core GPU)",
      Memoria: "8GB memoria unificada",
      Almacenamiento: "512GB SSD",
      Pantalla: '14.2" Liquid Retina XDR',
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
    faq: [],
  },

  // Producto 4: MacBook Pro 14" (M3 Pro)
  {
    sku: "APL-MBP-M3P-14",
    name: 'MacBook Pro 14" (M3 Pro)',
    category: "Notebooks Profesionales",
    price: 2199.0,
    images: [
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751552266/5.6_mimfml.png",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751552266/5.6_mimfml.png",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751552266/5.6_mimfml.png",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751552266/5.6_mimfml.png",
    ],
    shortDescription:
      "Potencia y puertos para el profesional exigente. Ideal para desarrolladores, fotógrafos y editores de video.",
    fullDescription:
      "<h2>La Herramienta del Creador</h2><p>Con el chip M3 Pro, este MacBook Pro maneja flujos de trabajo complejos con facilidad. Compila código, edita video en 8K o procesa miles de fotos sin esfuerzo. Sus puertos adicionales (HDMI, lector de tarjetas SD) lo hacen perfecto para profesionales que necesitan conectividad sin adaptadores.</p>",
    specs: {
      Chip: "Apple M3 Pro (12-core CPU, 18-core GPU)",
      Memoria: "18GB memoria unificada",
      Almacenamiento: "512GB SSD",
      Pantalla: '14.2" Liquid Retina XDR',
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
    faq: [],
  },

  // Producto 5: MacBook Pro 16" (M3 Pro)
  {
    sku: "APL-MBP-M3P-16",
    name: 'MacBook Pro 16" (M3 Pro)',
    category: "Notebooks Profesionales",
    price: 2499.0,
    images: [
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751552156/5.2_cqgaqf.png",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751552156/5.2_cqgaqf.png",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751552156/5.2_cqgaqf.png",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751552156/5.2_cqgaqf.png",
    ],
    shortDescription:
      "Una pantalla inmersiva de 16 pulgadas y un rendimiento excepcional para quienes necesitan el máximo espacio de trabajo móvil.",
    fullDescription:
      "<h2>Lienzo y Potencia a Gran Escala</h2><p>Combina la potencia del chip M3 Pro con una espectacular pantalla de 16 pulgadas. Es la workstation móvil ideal para quienes necesitan un amplio espacio visual para timelines de video, interfaces de diseño complejas o múltiples ventanas de código.</p>",
    specs: {
      Chip: "Apple M3 Pro (12-core CPU, 18-core GPU)",
      Memoria: "18GB memoria unificada",
      Almacenamiento: "512GB SSD",
      Pantalla: '16.2" Liquid Retina XDR',
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
    faq: [],
  },

  // Producto 6: MacBook Pro 16" (M3 Max)
  {
    sku: "APL-MBP-M3M-16",
    name: 'MacBook Pro 16" (M3 Max)',
    category: "Notebooks Profesionales",
    price: 3999.0,
    images: [
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751552174/5.8_jqzxlx.webp",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751552174/5.8_jqzxlx.webp",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751552174/5.8_jqzxlx.webp",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751552174/5.8_jqzxlx.webp",
    ],
    shortDescription:
      "El pináculo del rendimiento. Reemplaza una workstation de escritorio para renderizado 3D, VFX y compilación a gran escala.",
    fullDescription:
      "<h2>Rendimiento Definitivo, Portabilidad Extrema</h2><p>El chip M3 Max lleva el rendimiento a un nivel estratosférico. Este equipo está diseñado para los flujos de trabajo más exigentes del planeta, desde renderizado de escenas 3D con millones de polígonos hasta el entrenamiento de modelos de IA, todo en un formato que puedes llevar en la mochila.</p>",
    specs: {
      Chip: "Apple M3 Max (16-core CPU, 40-core GPU)",
      Memoria: "48GB memoria unificada",
      Almacenamiento: "1TB SSD",
      Pantalla: '16.2" Liquid Retina XDR',
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
    faq: [],
  },

  // Producto 7: MacBook Pro 14" (M3 Max)
  {
    sku: "APL-MBP-M3M-14",
    name: 'MacBook Pro 14" (M3 Max)',
    category: "Notebooks Profesionales",
    price: 3199.0,
    images: [
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751552224/5.7_fwkls2.avif",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751552224/5.7_fwkls2.avif",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751552224/5.7_fwkls2.avif",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751552224/5.7_fwkls2.avif",
    ],
    shortDescription:
      "La máxima potencia en el chasis más compacto. Rendimiento extremo para quienes valoran la portabilidad.",
    fullDescription:
      "<h2>Poder sin Precedentes en 14 Pulgadas</h2><p>Toda la potencia del chip M3 Max en el formato portátil de 14 pulgadas. Es la elección perfecta para profesionales que necesitan el máximo rendimiento gráfico y de CPU pero prefieren un equipo más ligero y compacto para viajar.</p>",
    specs: {
      Chip: "Apple M3 Max (14-core CPU, 30-core GPU)",
      Memoria: "36GB memoria unificada",
      Almacenamiento: "1TB SSD",
      Pantalla: '14.2" Liquid Retina XDR',
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
    faq: [],
  },

  // Producto 8: MacBook Air 13" (M3, 16GB)
  {
    sku: "APL-MBA-M3-13-16G",
    name: 'MacBook Air 13" (M3, 16GB)',
    category: "Notebooks Profesionales",
    price: 1499.0,
    images: [
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751552314/5.5_gutwcg.webp",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751552314/5.5_gutwcg.webp",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751552314/5.5_gutwcg.webp",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751552314/5.5_gutwcg.webp",
    ],
    shortDescription:
      "Configuración con 16GB de memoria unificada para un rendimiento superior en multitarea y aplicaciones de diseño.",
    fullDescription:
      "<h2>El Air Supercargado</h2><p>Este MacBook Air con chip M3 viene configurado con 16GB de memoria unificada, lo que lo convierte en una potente herramienta para desarrolladores y creativos que necesitan manejar múltiples aplicaciones pesadas simultáneamente sin sacrificar la portabilidad y la eficiencia del Air.</p>",
    specs: {
      Chip: "Apple M3 (8-core CPU, 10-core GPU)",
      Memoria: "16GB memoria unificada",
      Almacenamiento: "512GB SSD",
      Pantalla: '13.6" Liquid Retina',
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
    faq: [],
  },

  // Producto 9: Asus ROG Zephyrus G14
  {
    sku: "AS-ZEPH-G14-4060",
    name: "Asus ROG Zephyrus G14",
    category: "Notebooks Profesionales",
    price: 1899.0,
    images: [
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751551902/4.2_mddsmq.png",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751551902/4.2_mddsmq.png",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751551902/4.2_mddsmq.png",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751551902/4.2_mddsmq.png",
    ],
    shortDescription:
      "Potencia increíble en 14 pulgadas. Con procesador Ryzen 9 y RTX 4060, es la favorita de los desarrolladores que viajan.",
    fullDescription:
      "<h2>Diseño Elegante, Rendimiento Brutal</h2><p>El Zephyrus G14 es famoso por su increíble relación potencia-tamaño. Su estética minimalista y profesional esconde un procesador AMD Ryzen 9 y una GPU NVIDIA RTX 4060, capaz de manejar tanto desarrollo de software como renderizado y gaming de alto nivel.</p>",
    specs: {
      Procesador: "AMD Ryzen 9 8945HS",
      Gráficos: "NVIDIA GeForce RTX 4060 8GB",
      Memoria: "16GB DDR5",
      Almacenamiento: "1TB NVMe Gen4 SSD",
      Pantalla: '14" ROG Nebula Display QHD+ 120Hz',
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
    faq: [],
  },

  // Producto 10: Asus ROG Zephyrus G16
  {
    sku: "AS-ZEPH-G16-4070",
    name: "Asus ROG Zephyrus G16",
    category: "Notebooks Profesionales",
    price: 2499.0,
    images: [
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751551781/4.1_ed2npg.png",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751551781/4.1_ed2npg.png",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751551781/4.1_ed2npg.png",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751551781/4.1_ed2npg.png",
    ],
    shortDescription:
      "Pantalla Nebula HDR OLED de 16 pulgadas y potencia Intel Core Ultra 9 con una RTX 4070 para creativos exigentes.",
    fullDescription:
      "<h2>Tu Estudio Creativo Portátil</h2><p>Con una de las mejores pantallas del mercado, el Zephyrus G16 es un sueño para los profesionales del video y la fotografía. Su panel OLED con validación Pantone asegura una precisión de color perfecta, mientras que su hardware de última generación potencia los flujos de trabajo más demandantes.</p>",
    specs: {
      Procesador: "Intel Core Ultra 9 185H",
      Gráficos: "NVIDIA GeForce RTX 4070 8GB",
      Memoria: "32GB LPDDR5X",
      Almacenamiento: "1TB NVMe Gen4 SSD",
      Pantalla: '16" ROG Nebula Display HDR OLED 2.5K 240Hz',
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
    faq: [],
  },

  // Producto 11: Alienware m16 R2
  {
    sku: "AW-M16-R2-4070",
    name: "Alienware m16 R2",
    category: "Notebooks Profesionales",
    price: 2399.0,
    images: [
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751545967/1.1_jaaj3p.png",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751545967/1.1_jaaj3p.png",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751545967/1.1_jaaj3p.png",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751545967/1.1_jaaj3p.png",
    ],
    shortDescription:
      "Workstation móvil para arquitectos, ingenieros y desarrolladores de VR. Potencia gráfica RTX 4070 y refrigeración Cryo-tech.",
    fullDescription:
      "<h2>Potencia sin Límites para Simulación y VR</h2><p>Alienware no es solo para gaming. Su potencia gráfica y de procesador la convierten en la herramienta perfecta para profesionales que trabajan con software de renderizado en tiempo real como Lumion, Enscape o Unreal Engine, así como para el desarrollo de aplicaciones de Realidad Virtual.</p>",
    specs: {
      Procesador: "Intel Core Ultra 9 185H",
      Gráficos: "NVIDIA GeForce RTX 4070 8GB",
      Memoria: "32GB DDR5 5600MHz",
      Almacenamiento: "1TB NVMe Gen4 SSD",
      Pantalla: '16" QHD+ (2560 x 1600) 240Hz',
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
    faq: [],
  },

  // Producto 12: Alienware x16 R2
  {
    sku: "AW-X16-R2-4080",
    name: "Alienware x16 R2",
    category: "Notebooks Profesionales",
    price: 3299.0,
    images: [
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751545964/2.1_qghk9x.webp",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751545964/2.1_qghk9x.webp",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751545964/2.1_qghk9x.webp",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751545964/2.1_qghk9x.webp",
    ],
    shortDescription:
      "Potencia de escritorio en un chasis delgado y premium de aluminio. Equipada con una RTX 4080 para un rendimiento gráfico sin igual.",
    fullDescription:
      "<h2>Diseño Ejecutivo, Rendimiento Extremo</h2><p>La serie X de Alienware combina un chasis de aluminio y magnesio, más delgado y elegante, con el hardware más potente. Esta configuración con una RTX 4080 es para el profesional que no acepta compromisos, ni en rendimiento ni en estética.</p>",
    specs: {
      Procesador: "Intel Core Ultra 9 185H",
      Gráficos: "NVIDIA GeForce RTX 4080 12GB",
      Memoria: "32GB LPDDR5X 7467MHz",
      Almacenamiento: "2TB NVMe Gen4 SSD",
      Pantalla: '16" QHD+ (2560 x 1600) 240Hz',
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
    faq: [],
  },

  // PERIFERICOS

  // 1. Kit Productividad Esencial
  {
    sku: "NEX-PER-KIT-01",
    name: "Kit Productividad Esencial",
    category: "Periféricos y Redes",
    price: 65000.0,
    images: [
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751553767/perifericos-1_ktzohd.jpg",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751553767/perifericos-1_ktzohd.jpg",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751553767/perifericos-1_ktzohd.jpg",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751553767/perifericos-1_ktzohd.jpg",
    ],
    shortDescription:
      "Un combo de teclado y mouse con cable, diseñado para la durabilidad y el confort en el trabajo diario. Fiabilidad garantizada.",
    fullDescription:
      "<h2>La base para cualquier puesto de trabajo.</h2><p>Este kit es la solución perfecta para equipar a tus equipos con herramientas fiables y duraderas. El teclado de membrana es silencioso y resistente a derrames, mientras que el mouse óptico de 1200 DPI ofrece un seguimiento preciso en la mayoría de las superficies. Conexión USB plug-and-play para una instalación instantánea.</p>",
    specs: {
      "Tipo de Conexión": "USB 2.0 con Cable",
      "Layout del Teclado": "Español Latinoamérica (con letra Ñ)",
      "Tipo de Teclado": "Membrana silenciosa, 104 teclas",
      "Sensor del Mouse": "Óptico, 1200 DPI",
      Compatibilidad: "Windows, macOS, Linux",
    },
    reviews: [
      {
        author: "Admin. Corp",
        rating: 4,
        title: "Cumple con lo prometido",
        comment:
          "Compramos 50 kits para la oficina. Son robustos y funcionan bien. Buena relación precio-calidad.",
      },
    ],
    faq: [
      {
        question: "¿El teclado tiene patas de inclinación?",
        answer:
          "Sí, el teclado incluye patas de inclinación ajustables para un ángulo de escritura más cómodo.",
      },
    ],
  },

  // 2. Combo Inalámbrico "Prestige"
  {
    sku: "NEX-PER-PRESTIGE-01",
    name: 'Combo Inalámbrico "Prestige"',
    category: "Periféricos y Redes",
    price: 220000.0,
    images: [
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751553788/kb-5_kvdqvc.jpg",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751553788/kb-5_kvdqvc.jpg",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751553788/kb-5_kvdqvc.jpg",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/v1751553788/kb-5_kvdqvc.jpg",
    ],
    shortDescription:
      "Libera tu escritorio de cables. Teclado retroiluminado y mouse de precisión con scroll inteligente para máxima productividad.",
    fullDescription:
      "<h2>Elegancia y rendimiento sin ataduras.</h2><p>Diseñado para ejecutivos y profesionales que valoran un espacio de trabajo limpio y moderno. El teclado cuenta con teclas cóncavas para una escritura cómoda y retroiluminación inteligente que se adapta al ambiente. El mouse láser de alta precisión funciona sobre casi cualquier superficie, incluido el cristal, y puede conectarse hasta a 3 dispositivos simultáneamente.</p>",
    specs: {
      "Tipo de Conexión": "Bluetooth Low Energy o Receptor USB Logi Bolt",
      Batería: "Recargable vía USB-C (hasta 15 días con retroiluminación)",
      Teclado: "Retroiluminación inteligente, teclas Perfect Stroke",
      Mouse:
        "Sensor Láser Darkfield 8000 DPI, scroll electromagnético MagSpeed",
      "Multi-dispositivo": "Sí, cambia entre 3 dispositivos con un botón",
    },
    reviews: [
      {
        author: "Gerencia",
        rating: 5,
        title: "Un antes y un después",
        comment:
          "La calidad de construcción es premium y la funcionalidad multi-dispositivo es increíblemente útil.",
      },
    ],
    faq: [
      {
        question: "¿Es compatible con Mac y Windows?",
        answer:
          "Sí, es totalmente compatible con ambos sistemas operativos y el software de personalización está disponible para ambas plataformas.",
      },
    ],
  },

  // 3. Set Ergonómico "Comfort"
  {
    sku: "NEX-PER-ERGO-01",
    name: 'Set Ergonómico "Comfort"',
    category: "Periféricos y Redes",
    price: 185000.0,
    images: [
      "https://res.cloudinary.com/dpphqgt8g/image/upload/q_auto,f_auto/v1751554046/kb-2_lwitgf.jpg",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/q_auto,f_auto/v1751554046/kb-2_lwitgf.jpg",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/q_auto,f_auto/v1751554046/kb-2_lwitgf.jpg",
      "https://res.cloudinary.com/dpphqgt8g/image/upload/q_auto,f_auto/v1751554046/kb-2_lwitgf.jpg",
    ],
    shortDescription:
      "Teclado dividido y mouse vertical diseñados para reducir la tensión en muñecas y hombros durante largas jornadas de trabajo.",
    fullDescription:
      "<h2>Cuida a tu equipo, invierte en bienestar.</h2><p>Este set está científicamente diseñado para promover una postura más natural de manos y muñecas. El teclado dividido y curvo reduce la pronación de la muñeca, mientras que el reposamuñecas acolchado ofrece soporte. El mouse vertical mantiene la mano en una posición de 'apretón de manos' natural, aliviando la tensión del antebrazo.</p>",
    specs: {
      "Tipo de Conexión": "Inalámbrica (Bluetooth o Receptor USB)",
      "Diseño del Teclado":
        "Dividido (Split) con curvatura y reposamuñecas integrado",
      "Tipo de Mouse": "Vertical Ergonómico",
      "Sensor del Mouse": "Óptico de alta precisión",
      "Beneficio Principal": "Reducción de la tensión musculoesquelética (MSD)",
    },
    reviews: [
      {
        author: "Desarrollador Senior",
        rating: 5,
        title: "Alivio para mis muñecas",
        comment:
          "Paso más de 10 horas programando. Este kit ha reducido notablemente el dolor de muñeca que sentía al final del día. Lo recomiendo totalmente.",
      },
    ],
    faq: [
      {
        question: "¿Requiere un período de adaptación?",
        answer:
          "Sí, especialmente el teclado dividido puede requerir unos días para acostumbrarse a la nueva posición de las manos, pero los beneficios a largo plazo para la salud postural son significativos.",
      },
    ],
  },
];
