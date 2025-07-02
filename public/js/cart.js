document.addEventListener("DOMContentLoaded", () => {
  const cartButton = document.getElementById("cart-button");
  const closeCartButton = document.getElementById("close-cart-button");
  const cartSidebar = document.getElementById("cart-sidebar");
  const cartOverlay = document.getElementById("cart-overlay");
  const cartItemsContainer = document.getElementById("cart-items-container");
  const cartCounter = document.getElementById("cart-counter");
  const cartSubtotal = document.getElementById("cart-subtotal");

  let cart = JSON.parse(localStorage.getItem("infinityNexusCart")) || [];

  // --- FUNCIONES PRINCIPALES (sin cambios) ---

  const openCart = () => {
    cartSidebar.classList.remove("translate-x-full");
    cartOverlay.classList.remove("hidden");
  };

  const closeCart = () => {
    cartSidebar.classList.add("translate-x-full");
    cartOverlay.classList.add("hidden");
  };

  const saveCart = () => {
    localStorage.setItem("infinityNexusCart", JSON.stringify(cart));
  };

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.sku === product.sku);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    renderCart();
    openCart();
  };

  const removeFromCart = (sku) => {
    cart = cart.filter((item) => item.sku !== sku);
    saveCart();
    renderCart();
  };

  const updateQuantity = (sku, newQuantity) => {
    const item = cart.find((item) => item.sku === sku);
    if (item) {
      item.quantity = Number(newQuantity);
      if (item.quantity <= 0) {
        removeFromCart(sku);
      } else {
        saveCart();
        renderCart();
      }
    }
  };

  // --- RENDERIZADO DEL CARRITO (AQUÍ ESTÁ LA MEJORA) ---

  const renderCart = () => {
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `<p class="text-gray-500 dark:text-gray-400 text-center py-8">Tu carrito de cotización está vacío.</p>`;
    }

    let subtotal = 0;
    let totalItems = 0;

    cart.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.className = "flex gap-4 items-start";

      // --- INICIO DEL HTML MEJORADO PARA EL ITEM ---
      itemElement.innerHTML = `
                <img src="${item.image}" alt="${
        item.name
      }" class="w-20 h-20 object-cover rounded-md border border-gray-200 dark:border-gray-700">
                <div class="flex-1 flex flex-col h-full">
                    <div class="flex justify-between items-start">
                        <h3 class="font-bold text-sm text-gray-800 dark:text-gray-200 pr-2">${
                          item.name
                        }</h3>
                        <button class="remove-from-cart-btn text-gray-400 hover:text-red-500 p-0" data-sku="${
                          item.sku
                        }">
                            <ion-icon name="close-circle-outline" class="w-6 h-6"></ion-icon>
                        </button>
                    </div>
                    <div class="flex items-center justify-between mt-auto pt-2">
                        <p class="text-infinity-blue font-bold text-base">$${parseFloat(
                          item.price
                        ).toFixed(2)}</p>
                        
                        <div class="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                            <button class="qty-change-btn p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-[7px]" data-sku="${
                              item.sku
                            }" data-amount="-1">
                                <ion-icon name="remove-outline" class="w-4 h-4"></ion-icon>
                            </button>
                            <span class="px-3 text-center bg-transparent font-semibold text-sm">${
                              item.quantity
                            }</span>
                            <button class="qty-change-btn p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-[7px]" data-sku="${
                              item.sku
                            }" data-amount="1">
                                <ion-icon name="add-outline" class="w-4 h-4"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
            `;
      // --- FIN DEL HTML MEJORADO ---

      cartItemsContainer.appendChild(itemElement);

      subtotal += item.price * item.quantity;
      totalItems += item.quantity;
    });

    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    cartCounter.textContent = totalItems;
    cartCounter.classList.toggle("hidden", totalItems === 0);
  };

  // --- EVENT LISTENERS (AQUÍ ESTÁ LA NUEVA LÓGICA) ---

  cartButton.addEventListener("click", openCart);
  closeCartButton.addEventListener("click", closeCart);
  cartOverlay.addEventListener("click", closeCart);

  document.body.addEventListener("click", (e) => {
    if (e.target.matches(".add-to-cart-btn")) {
      const product = {
        sku: e.target.dataset.sku,
        name: e.target.dataset.name,
        price: parseFloat(e.target.dataset.price),
        image: e.target.dataset.image,
      };
      addToCart(product);
    }
  });

  // Nueva lógica de eventos para los botones +/- y el de eliminar dentro del carrito
  cartItemsContainer.addEventListener("click", (e) => {
    const qtyButton = e.target.closest(".qty-change-btn");
    const removeButton = e.target.closest(".remove-from-cart-btn");

    if (qtyButton) {
      const sku = qtyButton.dataset.sku;
      const amount = parseInt(qtyButton.dataset.amount, 10);
      const item = cart.find((i) => i.sku === sku);
      if (item) {
        updateQuantity(sku, item.quantity + amount);
      }
    }

    if (removeButton) {
      removeFromCart(removeButton.dataset.sku);
    }
  });

  renderCart(); // Renderizar el carrito al cargar la página
});
