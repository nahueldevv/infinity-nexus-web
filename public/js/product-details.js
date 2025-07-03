import { products } from "/js/products-data.js";

// --- FUNCIÓN PRINCIPAL QUE ORQUESTA TODO ---
function initializeProductPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const productSku = urlParams.get("sku");
  const product = products.find((p) => p.sku === productSku);

  const mainContent = document.getElementById("page-content");

  if (!product) {
    mainContent.innerHTML = `<div class="min-h-screen flex items-center justify-center text-center"><p class="text-red-500 font-bold text-2xl">Error: Producto no encontrado.<br><a href="/tienda" class="text-infinity-blue underline">Volver a la tienda</a></p></div>`;
    return;
  }

  document.title = `${product.name} - Infinity Nexus`;
  mainContent.innerHTML = generatePageHtml(product);

  // Llamar a los listeners DESPUÉS de que todo el HTML ha sido insertado
  setupEventListeners();
}

// --- GENERADOR PRINCIPAL DE HTML ---
function generatePageHtml(product) {
  const related = products
    .filter((p) => p.category === product.category && p.sku !== product.sku)
    .slice(0, 4);
  return `
            <div class="container mx-auto px-6 pt-32 md:pt-40 pb-20">
                ${generateMainViewHtml(product)}
                ${generateDetailsTabsHtml(product)}
                ${generateReviewsHtml(product.reviews || [])}
                ${generateFaqHtml(product.faq || [])}
                ${generateRelatedProductsHtml(related)}
            </div>
        `;
}

// --- Generadores de HTML para CADA SECCIÓN ---

function generateMainViewHtml(product) {
  const reviews = product.reviews || [];
  const reviewCount = reviews.length;
  const avgRating =
    reviewCount > 0
      ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviewCount
      : 0;
  const starRatingHtml =
    reviewCount > 0
      ? '<ion-icon name="star"></ion-icon>'.repeat(Math.floor(avgRating)) +
        (avgRating % 1 >= 0.5 ? '<ion-icon name="star-half"></ion-icon>' : "")
      : '<span class="text-sm text-gray-400">Sin valoraciones</span>';

  return `
            <section id="product-main-view" class="mb-24">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
                    <div class="flex flex-col-reverse md:flex-row gap-4">
                        <div class="flex md:flex-col gap-4 justify-center">
                            ${product.images
                              .slice(0, 4)
                              .map(
                                (image, index) => `
                                <div class="thumbnail-wrapper w-20 h-20 bg-gray-100 dark:bg-dark-card rounded-lg p-2 cursor-pointer border-2 ${
                                  index === 0
                                    ? "border-infinity-blue"
                                    : "border-transparent"
                                } hover:border-infinity-blue transition-all" data-image-src="${image}">
                                    <img src="${image}" alt="Vista previa de ${
                                  product.name
                                }" class="w-full h-full object-contain rounded-sm">
                                </div>`
                              )
                              .join("")}
                        </div>
                        <div class="flex-1 bg-white dark:bg-dark-card rounded-xl shadow-lg p-4">
                            <img id="main-product-image" src="${
                              product.images[0]
                            }" alt="Imagen principal de ${
    product.name
  }" class="w-full h-full max-h-[500px] object-contain rounded-lg">
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-sm font-semibold text-infinity-blue uppercase tracking-wider">${
                          product.category
                        }</p>
                        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mt-2">${
                          product.name
                        }</h1>
                        <div class="flex items-center gap-4 mt-4"><div class="flex text-yellow-400 text-2xl">${starRatingHtml}</div><a href="#opiniones" class="text-sm text-gray-500 dark:text-gray-400 hover:underline">(${reviewCount} Opiniones)</a></div>
                        <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed my-6">${
                          product.shortDescription
                        }</p>
                        <div class="my-6 py-6 border-y dark:border-gray-800"><span class="text-5xl font-bold text-gray-900 dark:text-gray-100">$${product.price.toFixed(
                          2
                        )}</span><span class="text-sm text-gray-500 ml-2">IVA incluido</span></div>
                        <button class="add-to-cart-btn w-full bg-gradient-to-r from-infinity-blue to-infinity-purple text-white font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-3 transform hover:-translate-y-1 transition-transform shadow-lg hover:shadow-2xl hover:shadow-infinity-purple/30" data-sku="NEX-WKST-CORP-01" data-name="Estación de Trabajo Corporativa" data-price="899.99"
                      data-image="/images/pc4.jpg"><ion-icon name="cart-outline" class="w-6 h-6"></ion-icon>Añadir a Cotización</button>
                    </div>
                </div>
            </section>`;
}

function generateDetailsTabsHtml(product) {
  return `
      <section id="details-tabs" class="py-20 bg-gray-50 dark:bg-dark-card rounded-2xl">
          <div class="max-w-4xl mx-auto px-6">
              <div class="border-b border-gray-200 dark:border-gray-700 mb-8">
                  <nav id="tabs-nav" class="flex space-x-8 -mb-px" aria-label="Tabs">
                      <button data-tab-target="#descripcion" class="tab-button active-tab">Descripción Completa</button>
                      <button data-tab-target="#especificaciones" class="tab-button">Especificaciones Técnicas</button>
                  </nav>
              </div>
              <div class="prose prose-lg dark:prose-invert max-w-none">
                  <div id="descripcion" class="tab-content">${
                    product.fullDescription
                  }</div>
                  <div id="especificaciones" class="tab-content hidden">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        ${Object.entries(product.specs)
                          .map(
                            ([key, value]) => `
                            <div class="border-b dark:border-gray-700 py-2">
                                <p class="font-semibold text-gray-800 dark:text-gray-200">${key}</p>
                                <p class="text-gray-600 dark:text-gray-400">${value}</p>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                  </div>
              </div>
          </div>
      </section>`;
}

function generateReviewsHtml(reviews) {
  if (!reviews || reviews.length === 0) return "";
  const avgRating =
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;
  return `
            <section id="opiniones" class="py-20 mt-16">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Opiniones de Clientes</h2>
                    <div class="flex items-center gap-2 mb-12"><div class="flex text-yellow-400 text-2xl">${'<ion-icon name="star"></ion-icon>'.repeat(
                      Math.floor(avgRating)
                    )}${
    avgRating % 1 >= 0.5 ? '<ion-icon name="star-half"></ion-icon>' : ""
  }</div><span class="font-bold text-xl">${avgRating.toFixed(
    1
  )} de 5</span><span class="text-gray-500">(${
    reviews.length
  } valoraciones)</span></div>
                    <div class="space-y-10">
                        ${reviews
                          .map(
                            (review) => `
                            <div class="border-l-4 border-infinity-blue pl-6">
                                <div class="flex items-center mb-1"><div class="flex text-yellow-400">${'<ion-icon name="star"></ion-icon>'.repeat(
                                  review.rating
                                )}</div></div>
                                <h3 class="font-bold text-xl text-gray-900 dark:text-gray-100">${
                                  review.title
                                }</h3>
                                <p class="text-gray-600 dark:text-gray-400 my-2">"${
                                  review.comment
                                }"</p>
                                <p class="text-sm font-semibold text-gray-500">- ${
                                  review.author
                                }, <span class="text-green-500">Compra Verificada</span></p>
                            </div>`
                          )
                          .join("")}
                    </div>
                </div>
            </section>`;
}

function generateFaqHtml(faqs) {
  if (!faqs || faqs.length === 0) return "";
  return `
            <section id="faq" class="py-20 bg-gray-50 dark:bg-dark-card rounded-2xl mt-16">
                <div class="max-w-4xl mx-auto px-6">
                    <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">Preguntas Frecuentes</h2>
                    <div class="space-y-4">
                        ${faqs
                          .map(
                            (faq) => `
                            <div class="bg-white dark:bg-dark-bg/50 rounded-lg">
                                <button class="faq-toggle flex justify-between items-center w-full p-6 text-left"><span class="text-lg font-semibold text-gray-800 dark:text-gray-200">${faq.question}</span><ion-icon name="add-outline" class="w-6 h-6 text-infinity-blue transition-transform duration-300"></ion-icon></button>
                                <div class="faq-content max-h-0 overflow-hidden transition-all duration-500 ease-in-out"><p class="px-6 pb-6 pt-0 text-gray-600 dark:text-gray-400">${faq.answer}</p></div>
                            </div>`
                          )
                          .join("")}
                    </div>
                </div>
            </section>`;
}

function generateRelatedProductsHtml(related) {
  if (!related || related.length === 0) return "";
  return `
            <section id="related-products" class="py-20 mt-16 border-t dark:border-gray-800">
                <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">También te puede interesar</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    ${related
                      .map(
                        (p) => `
                        <a href="/producto?sku=${p.sku}" class="group block">
                            <div class="bg-white dark:bg-dark-card rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full flex flex-col">
                                <img src="${p.images[0]}" alt="${p.name}" class="w-full h-56 object-cover">
                                <div class="p-6 flex flex-col flex-grow">
                                    <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 flex-grow">${p.name}</h3>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">${p.category}</p>
                                    <span class="mt-4 inline-block font-semibold text-infinity-blue group-hover:underline">Ver detalles →</span>
                                </div>
                            </div>
                        </a>`
                      )
                      .join("")}
                </div>
            </section>`;
}

// --- FUNCIÓN DEDICADA A LA INTERACTIVIDAD ---
function setupEventListeners() {
  // Galería de Imágenes
  document.querySelectorAll(".thumbnail-wrapper").forEach((wrapper) => {
    wrapper.addEventListener("click", () => {
      document.getElementById("main-product-image").src =
        wrapper.dataset.imageSrc;
      document
        .querySelectorAll(".thumbnail-wrapper")
        .forEach((el) => el.classList.remove("border-infinity-blue"));
      wrapper.classList.add("border-infinity-blue");
    });
  });

  // Selector de Cantidad
  const qtyInput = document.getElementById("quantity-input");
  if (qtyInput) {
    document.getElementById("qty-plus").addEventListener("click", () => {
      qtyInput.value = parseInt(qtyInput.value) + 1;
    });
    document.getElementById("qty-minus").addEventListener("click", () => {
      if (parseInt(qtyInput.value) > 1)
        qtyInput.value = parseInt(qtyInput.value) - 1;
    });
  }

  // Pestañas (Tabs)
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelectorAll(".tab-button")
        .forEach((btn) => btn.classList.remove("active-tab"));
      document
        .querySelectorAll(".tab-content")
        .forEach((content) => content.classList.add("hidden"));
      button.classList.add("active-tab");
      document
        .querySelector(button.dataset.tabTarget)
        .classList.remove("hidden");
    });
  });

  // Acordeón de FAQ
  document.querySelectorAll(".faq-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector("ion-icon");
      const isExpanded =
        content.style.maxHeight && content.style.maxHeight !== "0px";

      if (isExpanded) {
        content.style.maxHeight = null;
        icon.setAttribute("name", "add-outline");
        icon.classList.remove("rotate-45");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.setAttribute("name", "remove-outline");
        icon.classList.add("rotate-45");
      }
    });
  });
}

// --- INICIALIZAR LA PÁGINA ---
initializeProductPage();
