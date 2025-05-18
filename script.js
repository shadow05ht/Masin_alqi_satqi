document.addEventListener("DOMContentLoaded", function () {
  // Mobil menyu funksionallığı
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navUl = document.querySelector("nav ul");

  mobileMenuBtn.addEventListener("click", function () {
    navUl.classList.toggle("show");
  });

  // Nav linklərinə klik edəndə mobil menyunu bağla
  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", () => {
      navUl.classList.remove("show");
    });
  });

  // Scroll spy funksionallığı
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Hamısına smooth scroll əlavə et
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Modal funksionallığı
  const loginBtn = document.getElementById("login-btn");
  const loginModal = document.getElementById("login-modal");
  const registerModal = document.getElementById("register-modal");
  const closeModalBtns = document.querySelectorAll(".close-modal");
  const registerLink = document.getElementById("register-link");
  const loginLink = document.getElementById("login-link");

  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    loginModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  registerLink.addEventListener("click", function (e) {
    e.preventDefault();
    loginModal.style.display = "none";
    registerModal.style.display = "flex";
  });

  loginLink.addEventListener("click", function (e) {
    e.preventDefault();
    registerModal.style.display = "none";
    loginModal.style.display = "flex";
  });

  closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      loginModal.style.display = "none";
      registerModal.style.display = "none";
      document.body.style.overflow = "auto";
    });
  });

  window.addEventListener("click", function (e) {
    if (e.target === loginModal) {
      loginModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
    if (e.target === registerModal) {
      registerModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Form submit
  document
    .getElementById("login-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Burada real auth əməliyyatı olmalıdır
      console.log("Login attempt:", { email, password });
      showAlert("Daxil olma uğurla tamamlandı!");
      loginModal.style.display = "none";
      document.body.style.overflow = "auto";
    });

  document
    .getElementById("register-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const fullname = document.getElementById("fullname").value;
      const phone = document.getElementById("phone").value;
      const email = document.getElementById("reg-email").value;
      const password = document.getElementById("reg-password").value;

      // Burada real qeydiyyat əməliyyatı olmalıdır
      console.log("Registration attempt:", {
        fullname,
        phone,
        email,
        password,
      });
      showAlert("Qeydiyyat uğurla tamamlandı!");
      registerModal.style.display = "none";
      document.body.style.overflow = "auto";
    });

  // Markalar məlumatları
  const brands = [
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      models: ["iPhone 15", "iPhone 14", "iPhone 13", "iPhone 12"],
    },
    {
      name: "Samsung",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
      models: ["Galaxy S23", "Galaxy S22", "Galaxy Z Fold", "Galaxy Z Flip"],
    },
    {
      name: "Xiaomi",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Xiaomi_logo_%282021-%29.svg",
      models: ["Redmi Note 12", "Mi 13", "Poco X5", "Black Shark 5"],
    },
    {
      name: "Huawei",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Huawei_Standard_logo.svg",
      models: ["P60 Pro", "Mate 50", "Nova 11", "P50 Pocket"],
    },
    {
      name: "OnePlus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/OnePlus_Logo.svg",
      models: ["11 Pro", "10T", "Nord 3", "9RT"],
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      models: ["Pixel 7", "Pixel 6a", "Pixel Fold", "Pixel 7a"],
    },
    {
      name: "Oppo",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Oppo_Logo_2023.svg",
      models: ["Find X6", "Reno 10", "A98", "Find N2 Flip"],
    },
    {
      name: "Vivo",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vivo_logo.svg",
      models: ["X90 Pro", "V27", "iQOO 11", "X Fold"],
    },
    {
      name: "Realme",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Realme_Logo_2020.svg",
      models: ["GT Neo 5", "11 Pro+", "10 Pro", "C55"],
    },
    {
      name: "Nokia",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Nokia_2011_logo.svg",
      models: ["G42", "X30", "C32", "G60"],
    },
    {
      name: "Sony",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sony_logo_%282017%29.svg",
      models: ["Xperia 1 V", "Xperia 5 IV", "Xperia 10 V", "Xperia Pro-I"],
    },
    {
      name: "Asus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/ASUS_Logo.svg",
      models: ["ROG Phone 7", "Zenfone 10", "ROG Phone 6D", "Zenfone 9"],
    },
  ];

  // Telefon məlumatları
  const phones = [
    {
      id: 1,
      brand: "Apple",
      model: "iPhone 15 Pro Max",
      year: 2023,
      price: 3299,
      storage: "256GB",
      color: "Titanium",
      image: "https://images.unsplash.com/photo-1695048132541-894a4463a310",
      description: "Yeni A17 Pro çipi, 48MP əsas kamera, dinamik ada",
    },
    {
      id: 2,
      brand: "Samsung",
      model: "Galaxy S23 Ultra",
      year: 2023,
      price: 2799,
      storage: "256GB",
      color: "Phantom Black",
      image: "https://images.unsplash.com/photo-1676046187538-52c2373d7433",
      description: "200MP kamera, S Pen dəstəyi, 5000mAh batareya",
    },
    {
      id: 3,
      brand: "Xiaomi",
      model: "13 Pro",
      year: 2023,
      price: 1999,
      storage: "256GB",
      color: "Ceramic White",
      image: "https://images.unsplash.com/photo-1675865484569-73a0d6a5f326",
      description: "Leica kameralar, 120W sürətli şarj, Snapdragon 8 Gen 2",
    },
    {
      id: 4,
      brand: "Google",
      model: "Pixel 7 Pro",
      year: 2022,
      price: 1799,
      storage: "128GB",
      color: "Snow",
      image: "https://images.unsplash.com/photo-1666919643134-d97687c1826c",
      description: "Google Tensor G2 çipi, ən yaxşı AI foto əlavələri",
    },
    {
      id: 5,
      brand: "OnePlus",
      model: "11 5G",
      year: 2023,
      price: 2199,
      storage: "256GB",
      color: "Eternal Green",
      image: "https://images.unsplash.com/photo-1675786750007-1a1f1a7a7b1f",
      description: "Hasselblad kamera, 100W şarj, 120Hz AMOLED ekran",
    },
    {
      id: 6,
      brand: "Huawei",
      model: "P60 Pro",
      year: 2023,
      price: 2499,
      storage: "512GB",
      color: "Rococo Pearl",
      image: "https://images.unsplash.com/photo-1682686580391-615b3f4e56a8",
      description: "Xiaoxiang kamera sistemi, HarmonyOS, ultra nazik dizayn",
    },
  ];

  // Aksesuar məlumatları
  const accessories = [
    {
      id: 1,
      name: "iPhone 15 Pro Silikon Qılıf",
      type: "case",
      brand: "Apple",
      price: 99,
      colors: ["Midnight", "Red", "Blue", "Green"],
      image: "https://images.unsplash.com/photo-1636479965241-ca9a3a4d12a5",
      description: "Apple Original Silikon Qılıf, MagSafe uyğunluqlu",
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra Dəri Qılıf",
      type: "case",
      brand: "Samsung",
      price: 79,
      colors: ["Black", "Brown"],
      image: "https://images.unsplash.com/photo-1676046187538-52c2373d7433",
      description: "Premium dəri material, S Pen yuvası",
    },
    {
      id: 3,
      name: "65W GaN Şarj Cihazı",
      type: "charger",
      brand: "Anker",
      price: 59,
      colors: ["White"],
      image: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605",
      description: "2 portlu, yüksək sürətli şarj, kompakt dizayn",
    },
    {
      id: 4,
      name: "AirPods Pro 2",
      type: "headphone",
      brand: "Apple",
      price: 399,
      colors: ["White"],
      image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7",
      description: "Aktiv səs izolyasiyası, fərdi EQ, H2 çipi",
    },
    {
      id: 5,
      name: "Galaxy Buds2 Pro",
      type: "headphone",
      brand: "Samsung",
      price: 299,
      colors: ["Black", "White", "Purple"],
      image: "https://images.unsplash.com/photo-1664478546384-d60ffe9d8a3b",
      description: "24-bit Hi-Fi səs, smart ANC, 360 Audio",
    },
    {
      id: 6,
      name: "9H Cam Ekran Qoruyucu",
      type: "screen",
      brand: "Spigen",
      price: 29,
      colors: ["Clear"],
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb",
      description: "9H sərtlikdə cam, anti-bakterial örtük, asan quraşdırma",
    },
    {
      id: 7,
      name: "Magsafe Powerbank",
      type: "charger",
      brand: "Belkin",
      price: 129,
      colors: ["White", "Black"],
      image: "https://images.unsplash.com/photo-1591378603223-e15b45a81640",
      description: "5000mAh, iPhone-lar üçün Magsafe uyğunluqlu",
    },
    {
      id: 8,
      name: "Xiaomi 50W Qablosuz Şarj Stansiyası",
      type: "charger",
      brand: "Xiaomi",
      price: 89,
      colors: ["Black"],
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd",
      description: "Üfüqi və şaquli şarj, 3 cihaz eyni anda",
    },
  ];

  // Səbət məlumatları
  let cart = [];
  let activeFilter = "all";

  // Markaları səhifəyə əlavə et
  const brandsGrid = document.querySelector(".brands-grid");
  brands.forEach((brand) => {
    const brandItem = document.createElement("div");
    brandItem.className = "brand-item";
    brandItem.innerHTML = `
      <img src="${brand.logo}" alt="${brand.name}">
      <p>${brand.name}</p>
    `;
    brandItem.addEventListener("click", () => {
      filterProductsByBrand(brand.name);
      // Markaya uyğun hissəyə scroll et
      const productsSection = document.getElementById("products");
      window.scrollTo({
        top: productsSection.offsetTop - 80,
        behavior: "smooth",
      });
    });
    brandsGrid.appendChild(brandItem);
  });

  // Telefonları səhifəyə əlavə et
  const productsGrid = document.getElementById("products-grid");
  displayProducts(phones, productsGrid);

  // Aksesuarları səhifəyə əlavə et
  const accessoriesGrid = document.getElementById("accessories-grid");
  displayAccessories(accessories, accessoriesGrid);

  // Filtr düymələri üçün hadisə dinləyiciləri
  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", filterAccessories);
  });

  // Axtarış funksionallığı
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");
  const searchResultsSection = document.getElementById("search-results");
  const resultsContainer = document.getElementById("results-container");

  searchBtn.addEventListener("click", performSearch);
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      performSearch();
    }
  });

  // Səbətə əlavə etmə
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-to-cart")) {
      addToCart(e);
    }
  });

  // Axtarış paneli
  document
    .getElementById("search-btn")
    .addEventListener("click", toggleSearchPanel);
  document
    .getElementById("close-search")
    .addEventListener("click", toggleSearchPanel);
  document
    .getElementById("search-input")
    .addEventListener("input", handleSearch);

  // Funksiyalar
  function toggleSearchPanel() {
    const searchPanel = document.querySelector(".search-panel");
    searchPanel.classList.toggle("active");

    if (searchPanel.classList.contains("active")) {
      document.getElementById("search-input").focus();
    } else {
      document.querySelector(".search-results").classList.remove("active");
    }
  }

  function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const searchResults = document.querySelector(".search-results");

    if (searchTerm.length < 2) {
      searchResults.classList.remove("active");
      return;
    }

    const allItems = [...phones, ...accessories];
    const filteredItems = allItems.filter(
      (item) =>
        item.name?.toLowerCase().includes(searchTerm) ||
        item.model?.toLowerCase().includes(searchTerm) ||
        item.brand.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
    );

    displaySearchResults(filteredItems);
  }

  function displaySearchResults(results) {
    const searchResults = document.querySelector(".search-results");
    searchResults.innerHTML = "";

    if (results.length === 0) {
      searchResults.innerHTML =
        '<div class="search-result-item">Nəticə tapılmadı</div>';
    } else {
      results.forEach((item) => {
        const resultItem = document.createElement("div");
        resultItem.className = "search-result-item";

        const isPhone = item.model !== undefined;
        const title = isPhone ? `${item.brand} ${item.model}` : item.name;
        const price = item.price.toFixed(2) + " AZN";

        resultItem.innerHTML = `
          <img src="${item.image}" alt="${title}">
          <div class="search-result-info">
            <h4>${title}</h4>
            <p>${price}</p>
            <p>${isPhone ? "Telefon" : "Aksesuar"}</p>
          </div>
        `;

        resultItem.addEventListener("click", () => {
          if (isPhone) {
            showProductDetail(item);
          } else {
            showAccessoryDetail(item);
          }
          toggleSearchPanel();
        });

        searchResults.appendChild(resultItem);
      });
    }

    searchResults.classList.add("active");
  }

  function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm === "") return;

    const allItems = [...phones, ...accessories];
    const filteredItems = allItems.filter(
      (item) =>
        item.name?.toLowerCase().includes(searchTerm) ||
        item.model?.toLowerCase().includes(searchTerm) ||
        item.brand.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
    );

    displaySearchResults(filteredItems);
  }

  function filterProductsByBrand(brandName) {
    const filteredPhones = phones.filter((phone) => phone.brand === brandName);
    productsGrid.innerHTML = "";

    if (filteredPhones.length === 0) {
      productsGrid.innerHTML =
        '<p class="no-results">Bu markaya aid telefon tapılmadı.</p>';
      return;
    }

    displayProducts(filteredPhones, productsGrid);
  }

  function filterAccessories(e) {
    // Aktiv filtr düyməsini yenilə
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    // Yeni filtr tətbiq et
    activeFilter = e.target.dataset.filter;

    let filteredAccessories = accessories;
    if (activeFilter !== "all") {
      filteredAccessories = accessories.filter(
        (acc) => acc.type === activeFilter
      );
    }

    accessoriesGrid.innerHTML = "";
    displayAccessories(filteredAccessories, accessoriesGrid);
  }

  function displayProducts(productsArray, container) {
    container.innerHTML = "";

    productsArray.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
        <div class="product-image">
          <img src="${product.image}" alt="${product.brand} ${product.model}">
        </div>
        <div class="product-info">
          <h3>${product.brand} ${product.model}</h3>
          <div class="product-details">
            <span>${product.year}</span>
            <span>${product.storage}</span>
          </div>
          <div class="product-price">${product.price.toLocaleString()} AZN</div>
          <button class="product-btn" data-id="${product.id}">Ətraflı</button>
        </div>
      `;
      container.appendChild(productCard);
    });

    // Ətraflı düymələri üçün hadisə dinləyicisi
    document.querySelectorAll(".product-btn").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const productId = parseInt(this.getAttribute("data-id"));
        const product = phones.find((p) => p.id === productId);
        if (product) showProductDetail(product);
      });
    });
  }

  function displayAccessories(accessoriesArray, container) {
    container.innerHTML = "";

    accessoriesArray.forEach((accessory) => {
      const accessoryCard = document.createElement("div");
      accessoryCard.className = "accessory-card";
      accessoryCard.innerHTML = `
        <div class="accessory-image">
          <img src="${accessory.image}" alt="${accessory.name}">
        </div>
        <div class="accessory-info">
          <h3>${accessory.name}</h3>
          <p>${accessory.description}</p>
          <div class="accessory-price">
            <span class="price">${accessory.price.toFixed(2)} AZN</span>
            <button class="add-to-cart" data-id="${
              accessory.id
            }">Səbətə əlavə et</button>
          </div>
        </div>
      `;
      container.appendChild(accessoryCard);
    });
  }

  function showProductDetail(product) {
    const detailModal = document.createElement("div");
    detailModal.className = "detail-modal";
    detailModal.innerHTML = `
      <div class="modal-content">
        <span class="close-detail-modal">&times;</span>
        <h2>${product.brand} ${product.model}</h2>
        <div class="product-detail-image">
          <img src="${product.image}" alt="${product.brand} ${product.model}">
        </div>
        <div class="product-detail-info">
          <p><strong>İl:</strong> ${product.year}</p>
          <p><strong>Yaddaş:</strong> ${product.storage}</p>
          <p><strong>Rəng:</strong> ${product.color}</p>
          <p><strong>Qiymət:</strong> ${product.price.toLocaleString()} AZN</p>
          <p><strong>Təsvir:</strong> ${product.description}</p>
        </div>
        <button class="btn contact-btn">Əlaqə saxla</button>
      </div>
    `;

    document.body.appendChild(detailModal);
    document.body.style.overflow = "hidden";

    // Modalı bağlamaq
    document
      .querySelector(".close-detail-modal")
      .addEventListener("click", function () {
        document.body.removeChild(detailModal);
        document.body.style.overflow = "auto";
      });

    // Əlaqə düyməsi
    document
      .querySelector(".contact-btn")
      .addEventListener("click", function () {
        document.body.removeChild(detailModal);
        document.body.style.overflow = "auto";
        loginModal.style.display = "flex";
      });

    // Xaricə klik edəndə bağlansın
    detailModal.addEventListener("click", function (e) {
      if (e.target === detailModal) {
        document.body.removeChild(detailModal);
        document.body.style.overflow = "auto";
      }
    });
  }

  function showAccessoryDetail(accessory) {
    const detailModal = document.createElement("div");
    detailModal.className = "detail-modal";
    detailModal.innerHTML = `
      <div class="modal-content">
        <span class="close-detail-modal">&times;</span>
        <h2>${accessory.name}</h2>
        <div class="product-detail-image">
          <img src="${accessory.image}" alt="${accessory.name}">
        </div>
        <div class="product-detail-info">
          <p><strong>Marka:</strong> ${accessory.brand}</p>
          <p><strong>Növ:</strong> ${getAccessoryTypeName(accessory.type)}</p>
          <p><strong>Rəng seçimləri:</strong> ${accessory.colors.join(", ")}</p>
          <p><strong>Qiymət:</strong> ${accessory.price.toFixed(2)} AZN</p>
          <p><strong>Təsvir:</strong> ${accessory.description}</p>
        </div>
        <button class="btn add-to-cart" data-id="${
          accessory.id
        }">Səbətə əlavə et</button>
      </div>
    `;

    document.body.appendChild(detailModal);
    document.body.style.overflow = "hidden";

    // Modalı bağlamaq
    document
      .querySelector(".close-detail-modal")
      .addEventListener("click", function () {
        document.body.removeChild(detailModal);
        document.body.style.overflow = "auto";
      });

    // Xaricə klik edəndə bağlansın
    detailModal.addEventListener("click", function (e) {
      if (e.target === detailModal) {
        document.body.removeChild(detailModal);
        document.body.style.overflow = "auto";
      }
    });
  }

  function getAccessoryTypeName(type) {
    const types = {
      case: "Qılıf",
      charger: "Şarj cihazı",
      headphone: "Qulaqlıq",
      screen: "Ekran qoruyucu",
    };
    return types[type] || type;
  }

  function addToCart(e) {
    const productId = parseInt(e.target.getAttribute("data-id"));
    let product = accessories.find((a) => a.id === productId);

    if (!product) {
      product = phones.find((p) => p.id === productId);
    }

    if (!product) return;

    const existingItem = cart.find((item) => item.id === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1,
      });
    }

    updateCartCount();
    showAlert(`${product.name || product.model} səbətə əlavə edildi!`);
  }

  function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector(".cart-count").textContent = totalItems;
  }

  function showAlert(message) {
    const alert = document.createElement("div");
    alert.className = "alert";
    alert.textContent = message;
    document.body.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 3000);
  }

  // Əsas səhifəyə qayıtmaq üçün logo klik
  document.querySelector(".logo").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// Add to the existing script.js

// Cart functionality
const cartIcon = document.querySelector(".cart-icon");
const cartModal = document.getElementById("cart-modal");

cartIcon.addEventListener("click", function (e) {
  e.preventDefault();
  displayCart();
});

function displayCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalPrice = document.getElementById("cart-total-price");

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="no-results">Səbətiniz boşdur</p>';
    cartTotalPrice.textContent = "0.00";
  } else {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";

      const title = item.model ? `${item.brand} ${item.model}` : item.name;
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      cartItem.innerHTML = `
        <img src="${item.image}" alt="${title}">
        <div class="cart-item-info">
          <h4>${title}</h4>
          <p>${item.price.toFixed(2)} AZN</p>
        </div>
        <div class="cart-item-controls">
          <button class="decrease-quantity" data-id="${item.id}">-</button>
          <span>${item.quantity}</span>
          <button class="increase-quantity" data-id="${item.id}">+</button>
          <span class="remove-item" data-id="${
            item.id
          }"><i class="fas fa-trash"></i></span>
        </div>
      `;

      cartItemsContainer.appendChild(cartItem);
    });

    cartTotalPrice.textContent = total.toFixed(2);
  }

  cartModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

// Close cart modal
document
  .querySelector("#cart-modal .close-modal")
  .addEventListener("click", function () {
    cartModal.style.display = "none";
    document.body.style.overflow = "auto";
  });

// Cart item controls
document.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("increase-quantity") ||
    e.target.parentElement.classList.contains("increase-quantity")
  ) {
    const id = parseInt(
      e.target.getAttribute("data-id") ||
        e.target.parentElement.getAttribute("data-id")
    );
    const item = cart.find((item) => item.id === id);
    if (item) item.quantity++;
    displayCart();
  }

  if (
    e.target.classList.contains("decrease-quantity") ||
    e.target.parentElement.classList.contains("decrease-quantity")
  ) {
    const id = parseInt(
      e.target.getAttribute("data-id") ||
        e.target.parentElement.getAttribute("data-id")
    );
    const itemIndex = cart.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      if (cart[itemIndex].quantity > 1) {
        cart[itemIndex].quantity--;
      } else {
        cart.splice(itemIndex, 1);
      }
      displayCart();
    }
  }

  if (
    e.target.classList.contains("remove-item") ||
    e.target.parentElement.classList.contains("remove-item")
  ) {
    const id = parseInt(
      e.target.getAttribute("data-id") ||
        e.target.parentElement.getAttribute("data-id")
    );
    const itemIndex = cart.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      cart.splice(itemIndex, 1);
      displayCart();
    }
  }
});

// Checkout button
document.getElementById("checkout-btn").addEventListener("click", function () {
  if (cart.length === 0) return;

  alert(
    "Sifarişiniz qəbul edildi! Ümumi məbləğ: " +
      document.getElementById("cart-total-price").textContent +
      " AZN"
  );
  cart = [];
  updateCartCount();
  cartModal.style.display = "none";
  document.body.style.overflow = "auto";
});

const phones = [
  {
    id: 1,
    brand: "Apple",
    model: "iPhone 15 Pro Max",
    year: 2023,
    price: 3299,
    storage: "256GB",
    color: "Titanium",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693009279096",
    description: "Yeni A17 Pro çipi, 48MP əsas kamera, dinamik ada",
  },
  // Add more phones with proper image URLs
];

const accessories = [
  {
    id: 1,
    name: "iPhone 15 Pro Silikon Qılıf",
    type: "case",
    brand: "Apple",
    price: 99,
    colors: ["Midnight", "Red", "Blue", "Green"],
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX3Y3?wid=532&hei=582&fmt=png-alpha&.v=1694013850844",
    description: "Apple Original Silikon Qılıf, MagSafe uyğunluqlu",
  },
  // Add more accessories with proper image URLs
];
