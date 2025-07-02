# Infinity Nexus - E-commerce B2B

Este es el repositorio del sitio web para **Infinity Nexus**, un e-commerce B2B (Business-to-Business), especializado en la venta de hardware de alto rendimiento, capacitaciones y soporte avanzado para Pequeñas y Medianas Empresas (PyMEs).

El proyecto fue desarrollado utilizando un stack basado en Node.js y EJS, con un fuerte enfoque en un diseño moderno, responsivo y una experiencia de usuario fluida.

**Sitio en vivo desplegado en Render:** [https://infinity-nexus.onrender.com/](https://infinity-nexus.onrender.com/)

---

## 🚀 Características Principales

* ✅ **Diseño Moderno y Responsivo:** Creado con **Tailwind CSS**, el sitio se adapta perfectamente a cualquier tamaño de pantalla, desde móviles hasta monitores de escritorio.
* 🌓 **Modo Claro y Oscuro:** Un selector de tema funcional que permite al usuario elegir su preferencia visual, la cual persiste entre visitas gracias a `localStorage`.
* 🛒 **Carrito de Cotización Frontend:** Funcionalidad completa de carrito de compras implementada 100% en el lado del cliente, utilizando JavaScript puro para añadir, actualizar y eliminar productos.
* 📄 **Páginas Dinámicas (Frontend):** La página de detalle de producto se genera dinámicamente usando JavaScript para leer parámetros de la URL y cargar la información desde un archivo de datos, simulando el comportamiento de una aplicación moderna.
* ✨ **Componentes Interactivos:** Incluye múltiples componentes interactivos como galerías de imágenes, selectores de cantidad, pestañas de información y acordeones para preguntas frecuentes.
* ⚙️ **Backend con Express y EJS:** Construido sobre una base sólida de Node.js y Express para el enrutamiento y la lógica del servidor, utilizando EJS para la renderización de plantillas y parciales.
* 🚀 **Despliegue Continuo:** Configurado para despliegue automático en la plataforma **Render**, actualizando el sitio en vivo con cada `push` a la rama principal.

---

## 🛠️ Tecnologías Utilizadas

### Backend
* **Node.js:** Entorno de ejecución de JavaScript.
* **Express.js:** Framework para la creación del servidor y el enrutamiento.
* **EJS (Embedded JavaScript):** Motor de plantillas para renderizar HTML con datos.

### Frontend
* **HTML5 / CSS3**
* **Tailwind CSS:** Framework de CSS para un diseño rápido y personalizado.
* **Vanilla JavaScript:** Para toda la lógica del lado del cliente (modo oscuro, carrito, interactividad de componentes).
* **Ion-icons:** Paquete de iconos de alta calidad.

### Despliegue
* **Render:** Plataforma PaaS para el alojamiento y despliegue continuo.
* **Git y GitHub:** Para el control de versiones y la integración con Render.

---

## ⚙️ Instalación y Puesta en Marcha Local

Para correr este proyecto en tu propia máquina, sigue estos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/nahueldevv/infinity-nexus-web.git](https://github.com/nahueldevv/infinity-nexus-web.git)
    cd infinity-nexus-web
    ```

2.  **Instalar dependencias:**
    Asegúrate de tener [Node.js](https://nodejs.org/) instalado. Luego, ejecuta:
    ```bash
    npm install
    ```

3.  **Ejecutar el proyecto:**
    Necesitarás tener **dos terminales** abiertas en la raíz del proyecto.

    * En la **primera terminal**, inicia el compilador de Tailwind para que observe los cambios en tus archivos y genere el CSS:
        ```bash
        npm run tailwind
        ```
    * En la **segunda terminal**, inicia el servidor de Node.js (se recomienda usar `nodemon` para que se reinicie automáticamente con los cambios):
        ```bash
        npm run dev
        ```

4.  **Abrir en el navegador:**
    Visita `http://localhost:3000` en tu navegador para ver la aplicación funcionando.

---

## 📂 Estructura del Proyecto
```
/
|-- public/              # Archivos estáticos (CSS, JS del cliente, imágenes)
|   |-- css/
|   |-- js/
|-- views/               # Plantillas EJS
|   |-- partials/        # Componentes reutilizables (head, nav, footer)
|   |-- index.ejs
|   |-- tienda.ejs
|   |-- producto.html    # Plantilla estática para JS dinámico
|   |-- ...etc
|-- .gitignore
|-- server.js               # Lógica del servidor Express
|-- package.json
|-- README.md

```

## 📜 Licencia

Este proyecto está distribuido bajo la Licencia MIT. Esto significa que eres libre de usar, modificar, distribuir y usar el código para tus propios proyectos, tanto comerciales como personales, siempre que el aviso de copyright original se mantenga.
