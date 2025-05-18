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
      alert("Daxil olma uğurla tamamlandı!");
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
      alert("Qeydiyyat uğurla tamamlandı!");
      registerModal.style.display = "none";
      document.body.style.overflow = "auto";
    });

  // Markalar məlumatları
  const brands = [
    {
      name: "BMW",
      image: "https://cdn-icons-png.flaticon.com/512/731/731962.png",
    },
    {
      name: "Mercedes",
      image: "https://cdn-icons-png.flaticon.com/512/731/731988.png",
    },
    {
      name: "Audi",
      image: "https://cdn-icons-png.flaticon.com/512/731/731973.png",
    },
    {
      name: "Toyota",
      image: "https://cdn-icons-png.flaticon.com/512/731/731989.png",
    },
    {
      name: "Honda",
      image: "https://cdn-icons-png.flaticon.com/512/731/731972.png",
    },
    {
      name: "Ford",
      image: "https://cdn-icons-png.flaticon.com/512/731/731970.png",
    },
    {
      name: "Hyundai",
      image: "https://cdn-icons-png.flaticon.com/512/731/731974.png",
    },
    {
      name: "Kia",
      image: "https://cdn-icons-png.flaticon.com/512/731/731976.png",
    },
    {
      name: "Nissan",
      image: "https://cdn-icons-png.flaticon.com/512/731/731979.png",
    },
    {
      name: "Volkswagen",
      image: "https://cdn-icons-png.flaticon.com/512/731/731991.png",
    },
    {
      name: "Chevrolet",
      image: "https://cdn-icons-png.flaticon.com/512/731/731967.png",
    },
    {
      name: "Lexus",
      image: "https://cdn-icons-png.flaticon.com/512/731/731977.png",
    },
  ];

  // Maşınlar məlumatları (artırılmış)
  const cars = [
    {
      id: 1,
      brand: "BMW",
      model: "X5",
      year: 2020,
      price: 65000,
      mileage: 25000,
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "Tam avadanlıq, dəri salon, yeni rəng, heç bir problem yoxdur.",
    },
    {
      id: 2,
      brand: "BMW",
      model: "320i",
      year: 2019,
      price: 45000,
      mileage: 35000,
      image:
        "https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "M Sport paketi, dəri salon, yeni dizayn, yaxşı vəziyyətdə.",
    },
    {
      id: 3,
      brand: "Mercedes",
      model: "E 200",
      year: 2019,
      price: 55000,
      mileage: 30000,
      image:
        "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Premium paket, AMG stil, yeni dizayn, yaxşı vəziyyətdə.",
    },
    {
      id: 4,
      brand: "Mercedes",
      model: "GLC 300",
      year: 2021,
      price: 75000,
      mileage: 15000,
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "4MATIC ötürücü, virtual salon, tam avadanlıq, garantili.",
    },
    {
      id: 5,
      brand: "Audi",
      model: "A6",
      year: 2021,
      price: 70000,
      mileage: 15000,
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Quattro ötürücü, virtual salon, tam avadanlıq, garantili.",
    },
    {
      id: 6,
      brand: "Audi",
      model: "Q7",
      year: 2020,
      price: 80000,
      mileage: 20000,
      image:
        "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "Premium plus paket, 7 oturacaq, yeni dizayn, yaxşı vəziyyətdə.",
    },
    {
      id: 7,
      brand: "Toyota",
      model: "Camry",
      year: 2018,
      price: 35000,
      mileage: 40000,
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "Yapon ixracı, yüngül istifadə, yaxşı vəziyyətdə, heç bir problem yoxdur.",
    },
    {
      id: 8,
      brand: "Toyota",
      model: "RAV4",
      year: 2019,
      price: 40000,
      mileage: 30000,
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "Yeni model, yüngül istifadə, yaxşı vəziyyətdə, heç bir problem yoxdur.",
    },
    {
      id: 9,
      brand: "Honda",
      model: "Accord",
      year: 2017,
      price: 30000,
      mileage: 50000,
      image:
        "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "Yapon ixracı, yüngül istifadə, yaxşı vəziyyətdə, heç bir problem yoxdur.",
    },
    {
      id: 10,
      brand: "Honda",
      model: "CR-V",
      year: 2018,
      price: 35000,
      mileage: 40000,
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "Yeni model, yüngül istifadə, yaxşı vəziyyətdə, heç bir problem yoxdur.",
    },
    {
      id: 11,
      brand: "Ford",
      model: "Mustang",
      year: 2019,
      price: 45000,
      mileage: 20000,
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "5.0 V8 mühərrik, qara rəng, yeni dizayn, yaxşı vəziyyətdə.",
    },
    {
      id: 12,
      brand: "Ford",
      model: "Focus",
      year: 2018,
      price: 25000,
      mileage: 50000,
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "Yeni model, yüngül istifadə, yaxşı vəziyyətdə, heç bir problem yoxdur.",
    },
    {
      id: 13,
      brand: "Hyundai",
      model: "Tucson",
      year: 2020,
      price: 35000,
      mileage: 25000,
      image:
        "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "Yeni model, yüngül istifadə, yaxşı vəziyyətdə, heç bir problem yoxdur.",
    },
    {
      id: 14,
      brand: "Kia",
      model: "Sportage",
      year: 2019,
      price: 30000,
      mileage: 30000,
      image:
        "https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "Yeni model, yüngül istifadə, yaxşı vəziyyətdə, heç bir problem yoxdur.",
    },
    {
      id: 15,
      brand: "Nissan",
      model: "Qashqai",
      year: 2018,
      price: 28000,
      mileage: 40000,
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "Yeni model, yüngül istifadə, yaxşı vəziyyətdə, heç bir problem yoxdur.",
    },
  ];

  // Markaları səhifəyə əlavə et
  const brandsGrid = document.querySelector(".brands-grid");
  brands.forEach((brand) => {
    const brandItem = document.createElement("div");
    brandItem.className = "brand-item";
    brandItem.innerHTML = `
            <img src="${brand.image}" alt="${brand.name}">
            <p>${brand.name}</p>
        `;
    brandItem.addEventListener("click", () => {
      filterCarsByBrand(brand.name);
      // Markaya uyğun hissəyə scroll et
      const featuredSection = document.getElementById("featured-cars");
      window.scrollTo({
        top: featuredSection.offsetTop - 80,
        behavior: "smooth",
      });
    });
    brandsGrid.appendChild(brandItem);
  });

  // Maşınları səhifəyə əlavə et
  const featuredCarsGrid = document.getElementById("featured-cars-grid");
  displayCars(cars, featuredCarsGrid);

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

  function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm === "") return;

    const filteredCars = cars.filter(
      (car) =>
        car.brand.toLowerCase().includes(searchTerm) ||
        car.model.toLowerCase().includes(searchTerm)
    );

    displaySearchResults(filteredCars);
  }

  function displaySearchResults(results) {
    resultsContainer.innerHTML = "";

    if (results.length === 0) {
      resultsContainer.innerHTML =
        '<p class="no-results">Axtarışınıza uyğun nəticə tapılmadı.</p>';
      searchResultsSection.style.display = "block";
      return;
    }

    displayCars(results, resultsContainer);
    searchResultsSection.style.display = "block";

    // Axtarış nəticələrinə scroll et
    window.scrollTo({
      top: searchResultsSection.offsetTop - 80,
      behavior: "smooth",
    });
  }

  function filterCarsByBrand(brandName) {
    const filteredCars = cars.filter((car) => car.brand === brandName);
    featuredCarsGrid.innerHTML = "";

    if (filteredCars.length === 0) {
      featuredCarsGrid.innerHTML =
        '<p class="no-results">Bu markaya aid elan tapılmadı.</p>';
      return;
    }

    displayCars(filteredCars, featuredCarsGrid);
  }

  function displayCars(carsArray, container) {
    container.innerHTML = "";

    carsArray.forEach((car) => {
      const carCard = document.createElement("div");
      carCard.className = "car-card";
      carCard.innerHTML = `
                <div class="car-image">
                    <img src="${car.image}" alt="${car.brand} ${car.model}">
                </div>
                <div class="car-info">
                    <h3>${car.brand} ${car.model}</h3>
                    <div class="car-details">
                        <span>${car.year}</span>
                        <span>${car.mileage} km</span>
                    </div>
                    <div class="car-price">$${car.price.toLocaleString()}</div>
                    <a href="#" class="car-btn" data-id="${car.id}">Ətraflı</a>
                </div>
            `;
      container.appendChild(carCard);
    });
  }

  // Ətraflı məlumat üçün klik hadisəsi
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("car-btn")) {
      e.preventDefault();
      const carId = parseInt(e.target.getAttribute("data-id"));
      const car = cars.find((c) => c.id === carId);

      if (car) {
        // Ətraflı məlumat modalı yaradırıq
        const detailModal = document.createElement("div");
        detailModal.className = "detail-modal";
        detailModal.innerHTML = `
                    <div class="modal-content">
                        <span class="close-detail-modal">&times;</span>
                        <h2>${car.brand} ${car.model}</h2>
                        <div class="car-detail-image">
                            <img src="${car.image}" alt="${car.brand} ${
          car.model
        }">
                        </div>
                        <div class="car-detail-info">
                            <p><strong>İl:</strong> ${car.year}</p>
                            <p><strong>Yürüş:</strong> ${car.mileage} km</p>
                            <p><strong>Qiymət:</strong> $${car.price.toLocaleString()}</p>
                            <p><strong>Təsvir:</strong> ${car.description}</p>
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
    }
  });

  // Əsas səhifəyə qayıtmaq üçün logo klik
  document.querySelector(".logo").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
