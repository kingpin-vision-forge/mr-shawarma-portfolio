const markup = `
<header class="header" data-header>
      <div class="container">
        <a href="/#home" class="logo">
          <img
            src="/assets/images/logo-white.png"
            width="160"
            height="50"
            alt="Mr.Shawarma - Home"
          />
        </a>
        <nav class="navbar" data-navbar>
          <button class="close-btn" aria-label="close menu" data-nav-toggler>
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>
          <a href="/#home" class="logo">
            <img
              src="/assets/images/logo-white.png"
              width="160"
              height="50"
              alt="Mr.Shawarma - Home"
            />
          </a>
          <ul class="navbar-list">
            <li class="navbar-item">
              <a href="/#home" class="navbar-link hover-underline">
                <div class="separator"></div>
                <span class="span">Home</span>
              </a>
            </li>
            <li class="navbar-item">
              <a href="/#store" class="navbar-link hover-underline">
                <div class="separator"></div>
                <span class="span">Our Stores</span>
              </a>
            </li>
            <li class="navbar-item">
              <a href="/menu" class="navbar-link hover-underline active">
                <div class="separator"></div>
                <span class="span">Menus</span>
              </a>
            </li>
            <li class="navbar-item">
              <a href="/#about" class="navbar-link hover-underline">
                <div class="separator"></div>
                <span class="span">About Us</span>
              </a>
            </li>
            <li class="navbar-item">
              <a href="/#chefs" class="navbar-link hover-underline">
                <div class="separator"></div>
                <span class="span">Our Chefs</span>
              </a>
            </li>
            <li class="navbar-item">
              <a href="/#contact" class="navbar-link hover-underline">
                <div class="separator"></div>
                <span class="span">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
        <button class="nav-open-btn" aria-label="open menu" data-nav-toggler>
          <span class="line line-1"></span>
          <span class="line line-2"></span>
          <span class="line line-3"></span>
        </button>
        <div class="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>
    <main>
      <section class="section menu" aria-label="menu-label">
        <div class="container">
          <p class="section-subtitle text-center label-2">Full Menu</p>
          <h2 class="headline-1 section-title text-center">
            Explore Our Delicious Offerings
          </h2>

          <!-- Chicken Rolls -->
          <div class="menu-category">
            <h3 class="title-2">Chicken Rolls</h3>
            <ul class="grid-list">
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-1.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Shawarma"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Shawarma</h3>
                      <span class="span title-2">₹90</span>
                    </div>
                    <p class="card-text label-1">
                      Classic shawarma with traditional spices and sauces.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-2.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Hot Shawarma"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Hot Shawarma</h3>
                      <span class="span title-2">₹110</span>
                    </div>
                    <p class="card-text label-1">
                      Spicy shawarma with extra heat and flavor.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-3.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Spicy Shawarma"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Spicy Shawarma</h3>
                      <span class="span title-2">₹100</span>
                    </div>
                    <p class="card-text label-1">
                      Extra spicy version of our popular shawarma.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-4.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Creamy Shawarma"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Creamy Shawarma</h3>
                      <span class="span title-2">₹120</span>
                    </div>
                    <p class="card-text label-1">
                      Creamy sauce added to our delicious shawarma.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-5.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Only Chicken Shawarma"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Only Chicken Shawarma</h3>
                      <span class="span title-2">₹130</span>
                    </div>
                    <p class="card-text label-1">
                      Pure chicken shawarma without any additional ingredients.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-6.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Grill Flat Shawarma"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Grill Flat Shawarma</h3>
                      <span class="span title-2">₹120</span>
                    </div>
                    <p class="card-text label-1">
                      Grilled flatbread with shawarma filling.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-1.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Grill Cheesy Shawarma"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Grill Cheesy Shawarma</h3>
                      <span class="span title-2">₹130</span>
                    </div>
                    <p class="card-text label-1">
                      Shawarma with melted cheese on grilled bread.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-2.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Plate Shawarma"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Plate Shawarma</h3>
                      <span class="span title-2">₹150</span>
                    </div>
                    <p class="card-text label-1">
                      Large serving of shawarma on a plate.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-3.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Crunchy Roll"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Crunchy Roll</h3>
                      <span class="span title-2">₹150</span>
                    </div>
                    <p class="card-text label-1">
                      Crispy roll with shawarma filling.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-4.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Kurkure Shawarma"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Kurkure Shawarma</h3>
                      <span class="span title-2">₹150</span>
                    </div>
                    <p class="card-text label-1">
                      Shawarma with crispy Kurkure snacks.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Chicken Sandwich -->
          <div class="menu-category">
            <h3 class="title-2">Chicken Sandwich</h3>
            <ul class="grid-list">
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-5.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Chicken Sandwich"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Chicken Sandwich</h3>
                      <span class="span title-2">₹100</span>
                    </div>
                    <p class="card-text label-1">
                      Chicken patty with vegetables and sauce in a sandwich.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-6.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Chicken Spicy Sandwich"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Chicken Spicy Sandwich</h3>
                      <span class="span title-2">₹110</span>
                    </div>
                    <p class="card-text label-1">
                      Spicy chicken sandwich with extra heat.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-1.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Chicken Cheesy Sandwich"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Chicken Cheesy Sandwich</h3>
                      <span class="span title-2">₹130</span>
                    </div>
                    <p class="card-text label-1">
                      Chicken sandwich with melted cheese.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Chicken Pizza -->
          <div class="menu-category">
            <h3 class="title-2">Chicken Pizza</h3>
            <ul class="grid-list">
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-2.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Small Chicken Pizza"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Small Chicken Pizza</h3>
                      <span class="span title-2">₹180</span>
                    </div>
                    <p class="card-text label-1">
                      Small pizza with chicken toppings.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-3.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Medium Chicken Pizza"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Medium Chicken Pizza</h3>
                      <span class="span title-2">₹300</span>
                    </div>
                    <p class="card-text label-1">
                      Medium pizza with chicken toppings.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-4.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Small Corn Chicken Pizza"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Small Corn Chicken Pizza</h3>
                      <span class="span title-2">₹170</span>
                    </div>
                    <p class="card-text label-1">
                      Small pizza with chicken and corn toppings.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-5.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Medium Corn Chicken Pizza"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Medium Corn Chicken Pizza</h3>
                      <span class="span title-2">₹310</span>
                    </div>
                    <p class="card-text label-1">
                      Medium pizza with chicken and corn toppings.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Chicken Burger -->
          <div class="menu-category">
            <h3 class="title-2">Chicken Burger</h3>
            <ul class="grid-list">
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-6.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Chicken Burger"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Chicken Burger</h3>
                      <span class="span title-2">₹140</span>
                    </div>
                    <p class="card-text label-1">
                      Chicken patty with lettuce, tomato, and sauce.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-1.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Chicken Cheese Burger"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Chicken Cheese Burger</h3>
                      <span class="span title-2">₹150</span>
                    </div>
                    <p class="card-text label-1">
                      Chicken burger with melted cheese.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Egg Roll -->
          <div class="menu-category">
            <h3 class="title-2">Egg Roll</h3>
            <ul class="grid-list">
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-2.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Egg Roll"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Egg Roll</h3>
                      <span class="span title-2">₹90</span>
                    </div>
                    <p class="card-text label-1">
                      Simple egg roll with basic seasoning.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-3.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Egg Spicy Roll"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Egg Spicy Roll</h3>
                      <span class="span title-2">₹100</span>
                    </div>
                    <p class="card-text label-1">
                      Spicy egg roll with extra seasoning.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Paneer Rolls -->
          <div class="menu-category">
            <h3 class="title-2">Paneer Rolls</h3>
            <ul class="grid-list">
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-4.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Paneer Roll"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Paneer Roll</h3>
                      <span class="span title-2">₹100</span>
                    </div>
                    <p class="card-text label-1">
                      Soft paneer rolled in fresh bread.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-5.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Paneer Spicy Roll"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Paneer Spicy Roll</h3>
                      <span class="span title-2">₹110</span>
                    </div>
                    <p class="card-text label-1">
                      Spicy paneer roll with extra flavor.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Paneer Sandwich -->
          <div class="menu-category">
            <h3 class="title-2">Paneer Sandwich</h3>
            <ul class="grid-list">
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-6.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Paneer Sandwich"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Paneer Sandwich</h3>
                      <span class="span title-2">₹110</span>
                    </div>
                    <p class="card-text label-1">
                      Soft paneer in a sandwich with vegetables.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-1.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Paneer Spicy Sandwich"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Paneer Spicy Sandwich</h3>
                      <span class="span title-2">₹120</span>
                    </div>
                    <p class="card-text label-1">
                      Spicy paneer sandwich with extra heat.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-2.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Paneer Cheesy Sandwich"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Paneer Cheesy Sandwich</h3>
                      <span class="span title-2">₹130</span>
                    </div>
                    <p class="card-text label-1">
                      Paneer sandwich with melted cheese.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- French Fries & Smily's -->
          <div class="menu-category">
            <h3 class="title-2">French Fries & Smily's</h3>
            <ul class="grid-list">
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-3.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="French Fries Salted"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">French Fries Salted</h3>
                      <span class="span title-2">₹90</span>
                    </div>
                    <p class="card-text label-1">
                      Crispy fries with salt seasoning.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-4.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Peri Peri French Fries"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Peri Peri French Fries</h3>
                      <span class="span title-2">₹100</span>
                    </div>
                    <p class="card-text label-1">
                      French fries with peri peri seasoning.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-5.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Cheesy French Fries"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Cheesy French Fries</h3>
                      <span class="span title-2">₹110</span>
                    </div>
                    <p class="card-text label-1">
                      French fries with melted cheese.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-6.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Smiley Salted Fries"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Smiley Salted Fries</h3>
                      <span class="span title-2">₹80</span>
                    </div>
                    <p class="card-text label-1">
                      Mini salted fries in smiley shape.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-1.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Smily Peri Peri Fries"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Smily Peri Peri Fries</h3>
                      <span class="span title-2">₹90</span>
                    </div>
                    <p class="card-text label-1">
                      Mini peri peri fries in smiley shape.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Paneer Pizza -->
          <div class="menu-category">
            <h3 class="title-2">Paneer Pizza</h3>
            <ul class="grid-list">
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-2.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Paneer Small Pizza"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Paneer Small Pizza</h3>
                      <span class="span title-2">₹180</span>
                    </div>
                    <p class="card-text label-1">
                      Small pizza with paneer toppings.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-3.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Paneer Medium Pizza"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Paneer Medium Pizza</h3>
                      <span class="span title-2">₹300</span>
                    </div>
                    <p class="card-text label-1">
                      Medium pizza with paneer toppings.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Corn Pizza -->
          <div class="menu-category">
            <h3 class="title-2">Corn Pizza</h3>
            <ul class="grid-list">
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-4.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Small Veggy Corn Pizza"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Small Veggy Corn Pizza</h3>
                      <span class="span title-2">₹180</span>
                    </div>
                    <p class="card-text label-1">
                      Small pizza with corn and vegetable toppings.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-5.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Medium Veggy Corn Pizza"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Medium Veggy Corn Pizza</h3>
                      <span class="span title-2">₹300</span>
                    </div>
                    <p class="card-text label-1">
                      Medium pizza with corn and vegetable toppings.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Mocktails -->
          <div class="menu-category">
            <h3 class="title-2">Mocktails</h3>
            <ul class="grid-list">
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-6.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Mojito Mint"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Mojito Mint</h3>
                      <span class="span title-2">₹80</span>
                    </div>
                    <p class="card-text label-1">
                      Refreshing mint and lime drink.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Coffee & Shakes -->
          <div class="menu-category">
            <h3 class="title-2">Coffee & Shakes</h3>
            <ul class="grid-list">
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-1.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Cold Coffee"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Cold Coffee</h3>
                      <span class="span title-2">₹90</span>
                    </div>
                    <p class="card-text label-1">
                      Iced coffee with milk and sugar.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-2.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Hot Coffee"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Hot Coffee</h3>
                      <span class="span title-2">₹70</span>
                    </div>
                    <p class="card-text label-1">
                      Hot coffee with milk and sugar.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-3.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Chocolate Shake"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Chocolate Shake</h3>
                      <span class="span title-2">₹100</span>
                    </div>
                    <p class="card-text label-1">Rich chocolate milkshake.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/menu-4.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Milk Shake"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">Milk Shake</h3>
                      <span class="span title-2">₹100</span>
                    </div>
                    <p class="card-text label-1">Classic vanilla milkshake.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <a href="/#home" class="btn btn-primary">
            <span class="text text-1">Back to Home</span>
            <span class="text text-2" aria-hidden="true">Back to Home</span>
          </a>
        </div>
      </section>
    </main>
    <footer
      class="footer section has-bg-image text-center"
      style="background-image: url('/assets/images/footer-bg.jpg')"
    >
      <div class="container">
        <!-- Footer content same as index.html -->
        <div class="footer-top grid-list">
          <div class="footer-brand has-before has-after">
            <a href="/#home" class="logo">
              <img
                src="/assets/images/logo-white.png"
                width="160"
                height="50"
                loading="lazy"
                alt="Mr.Shawarma home"
              />
            </a>
            <address class="body-4">
              Anjuman Complex, Navanagar, Bagalkot, Karnataka 587103
            </address>
            <a href="mailto:info@mrshawarma.com" class="body-4 contact-link"
              >info@mrshawarma.com</a
            >
            <a href="tel:+911234567890" class="body-4 contact-link"
              >Booking Request : +91 74111 51139</a
            >
            <p class="body-4">Open : 11:00 am - 9:30 pm</p>
            <div class="wrapper">
              <div class="separator"></div>
              <div class="separator"></div>
              <div class="separator"></div>
            </div>
            <p class="title-1">Get News & Offers</p>
            <p class="label-1">
              Subscribe us & Get <span class="span">25% Off.</span>
            </p>
            <form action="" class="input-wrapper">
              <div class="icon-wrapper">
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                <input
                  type="email"
                  name="email_address"
                  placeholder="Your email"
                  autocomplete="off"
                  class="input-field"
                />
              </div>
              <button type="submit" class="btn btn-secondary">
                <span class="text text-1">Subscribe</span>
                <span class="text text-2" aria-hidden="true">Subscribe</span>
              </button>
            </form>
          </div>
          <ul class="footer-list">
            <li>
              <a
                href="/#home"
                class="label-2 footer-link hover-underline"
                >Home</a
              >
            </li>
            <li>
              <a href="/menu" class="label-2 footer-link hover-underline"
                >Menus</a
              >
            </li>
            <li>
              <a
                href="/#about"
                class="label-2 footer-link hover-underline"
                >About Us</a
              >
            </li>
            <li>
              <a
                href="/#chefs"
                class="label-2 footer-link hover-underline"
                >Our Chefs</a
              >
            </li>
            <li>
              <a
                href="/#contact"
                class="label-2 footer-link hover-underline"
                >Contact</a
              >
            </li>
          </ul>
          <ul class="footer-list">
            <li>
              <button type="button" class="label-2 footer-link hover-underline">
                Facebook
              </button>
            </li>
            <li>
              <button type="button" class="label-2 footer-link hover-underline">
                Instagram
              </button>
            </li>
            <li>
              <button type="button" class="label-2 footer-link hover-underline">
                Twitter
              </button>
            </li>
            <li>
              <button type="button" class="label-2 footer-link hover-underline">
                Youtube
              </button>
            </li>
            <li>
              <button type="button" class="label-2 footer-link hover-underline">
                Google Map
              </button>
            </li>
          </ul>
        </div>
        <div class="footer-bottom">
          <p class="copyright">
            &copy; 2025 Mr.Shawarma. All Rights Reserved | Crafted by
            <a
              href="https://kingpinvisionforge.com/"
              target="_blank"
              class="link"
              >KingpiN Vision Forge</a
            >
          </p>
        </div>
      </div>
    </footer>
`

export default function MenuPage() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
