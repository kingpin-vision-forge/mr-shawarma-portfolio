const markup = `
<div class="preload" data-preaload>
      <img
        class="preload-logo"
        src="/assets/images/logo.png"
        width="520"
        height="520"
        alt="Mr.Shawarma logo"
        loading="eager"
      />
    </div>
    <div class="topbar">
      <div class="container">
        <address class="topbar-item">
          <div class="icon">
            <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
          </div>
          <span class="span"> Anjuman Complex, Navanagar, Bagalkot, KA. </span>
        </address>
        <div class="separator"></div>
        <div class="topbar-item item-2">
          <div class="icon">
            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
          </div>
          <span class="span">Daily : 11.00 am to 9.30 pm</span>
        </div>
        <a href="tel:+911234567890" class="topbar-item link">
          <div class="icon">
            <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
          </div>
          <span class="span">+91 74111 51139</span>
        </a>
      </div>
    </div>
    <header class="header" data-header>
      <div class="container">
        <a href="#home" class="logo">
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
          <a href="#home" class="logo">
            <img
              src="/assets/images/logo-white.png"
              width="160"
              height="50"
              alt="Mr.Shawarma - Home"
            />
          </a>
          <ul class="navbar-list">
            <li class="navbar-item">
              <a href="#home" class="navbar-link hover-underline active">
                <div class="separator"></div>
                <span class="span">Home</span>
              </a>
            </li>
            <li class="navbar-item">
              <a href="#store" class="navbar-link hover-underline">
                <div class="separator"></div>
                <span class="span">Our Stores</span>
              </a>
            </li>
            <li class="navbar-item">
              <a href="#service" class="navbar-link hover-underline">
                <div class="separator"></div>
                <span class="span">Menu</span>
              </a>
            </li>
            <li class="navbar-item">
              <a href="#about" class="navbar-link hover-underline">
                <div class="separator"></div>
                <span class="span">About Us</span>
              </a>
            </li>
            <li class="navbar-item">
              <a href="#testimonials" class="navbar-link hover-underline">
                <div class="separator"></div>
                <span class="span">Testimonials</span>
              </a>
            </li>
            <li class="navbar-item">
              <a href="#contact" class="navbar-link hover-underline">
                <div class="separator"></div>
                <span class="span">Contact Us</span>
              </a>
            </li>
          </ul>
          <div class="text-center">
            <p class="headline-1 navbar-title">Visit Us</p>
            <address class="body-4">
              Anjuman Complex, Navanagar <br />
              Bagalkot, KA
            </address>
            <p class="body-4 navbar-text">Open: 11.00 am - 9.30pm</p>
            <div class="separator"></div>
            <p class="contact-label">Booking Request</p>
            <a
              href="tel:+91123123456"
              class="body-1 contact-number hover-underline"
              >+91-123-123456</a
            >
          </div>
        </nav>
        <a href="/menu" class="btn btn-secondary">
          <span class="text text-1">Explore Menu</span>
          <span class="text text-2" aria-hidden="true">Explore Menu</span>
        </a>
        <button class="nav-open-btn" aria-label="open menu" data-nav-toggler>
          <span class="line line-1"></span>
          <span class="line line-2"></span>
          <span class="line line-3"></span>
        </button>
        <div class="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>
    <main>
      <article>
        <section class="hero text-center" aria-label="home" id="home">
          <ul class="hero-slider" data-hero-slider>
            <div class="slider-bg">
              <video
                src="/assets/images/shawarma.mp4"
                width="1880"
                height="950"
                class="img-cover"
                autoplay
                muted
                loop
                playsinline
              ></video>
            </div>
            <li class="slider-item active" data-hero-slider-item>
              <p class="label-2 section-subtitle slider-reveal">
                Traditional & Hygienic
              </p>
              <h1 class="display-1 hero-title slider-reveal">
                For the love of <br />
                delicious food
              </h1>
              <p class="body-2 hero-text slider-reveal">
                Come with family & feel the joy of mouthwatering food
              </p>
              <a href="/menu" class="btn btn-primary slider-reveal">
                <span class="text text-1">View Our Menu</span>
                <span class="text text-2" aria-hidden="true"
                  >View Our Menu</span
                >
              </a>
            </li>
            <li class="slider-item" data-hero-slider-item>
              <p class="label-2 section-subtitle slider-reveal">
                Delightful Experience
              </p>
              <h1 class="display-1 hero-title slider-reveal">
                Flavors Inspired by <br />
                the Seasons
              </h1>
              <p class="body-2 hero-text slider-reveal">
                Come with family & feel the joy of mouthwatering food
              </p>
              <a href="/menu" class="btn btn-primary slider-reveal">
                <span class="text text-1">View Our Menu</span>
                <span class="text text-2" aria-hidden="true"
                  >View Our Menu</span
                >
              </a>
            </li>
            <li class="slider-item" data-hero-slider-item>
              <p class="label-2 section-subtitle slider-reveal">
                Amazing & Delicious
              </p>
              <h1 class="display-1 hero-title slider-reveal">
                Where every flavor <br />
                tells a story
              </h1>
              <p class="body-2 hero-text slider-reveal">
                Come with family & feel the joy of mouthwatering food
              </p>
              <a href="/menu" class="btn btn-primary slider-reveal">
                <span class="text text-1">View Our Menu</span>
                <span class="text text-2" aria-hidden="true"
                  >View Our Menu</span
                >
              </a>
            </li>
          </ul>
          <button
            class="slider-btn prev"
            aria-label="slide to previous"
            data-prev-btn
          >
            <ion-icon name="chevron-back"></ion-icon>
          </button>
          <button
            class="slider-btn next"
            aria-label="slide to next"
            data-next-btn
          >
            <ion-icon name="chevron-forward"></ion-icon>
          </button>
        </section>
        <section class="store text-center" aria-label="store" id="store">
          <div class="container">
            <p class="section-subtitle label-2">Our Locations</p>
            <h2 class="headline-1 section-title">Visit Our Stores</h2>
            <div class="store-locations grid-list">
              <a
                class="store-card"
                href="/stores/bagalkot.html"
                aria-label="View Bagalkot branch gallery"
              >
                <figure
                  class="card-banner img-holder"
                  style="--width: 300; --height: 200"
                >
                  <img
                    src="/assets/images/bagalkot-1.jpg"
                    width="300"
                    height="200"
                    loading="lazy"
                    alt="Bagalkot branch exterior"
                    class="img-cover"
                  />
                </figure>
                <div class="store-card-content">
                  <h3 class="title-2">Bagalkot Branch</h3>
                  <address class="body-4">
                    Anjuman Complex, Navanagar <br />
                    Bagalkot, Karnataka 587103
                  </address>
                  <p class="body-4">Open: 11:00 am - 9:30 pm</p>
                  <span class="store-card-cta label-1">See store gallery</span>
                </div>
              </a>
              <a
                class="store-card"
                href="/stores/bijapur.html"
                aria-label="View Bijapur branch gallery"
              >
                <figure
                  class="card-banner img-holder"
                  style="--width: 300; --height: 200"
                >
                  <img
                    src="/assets/images/store-2.jpg"
                    width="300"
                    height="200"
                    loading="lazy"
                    alt="Bijapur branch exterior"
                    class="img-cover"
                  />
                </figure>
                <div class="store-card-content">
                  <h3 class="title-2">Bijapur Branch</h3>
                  <address class="body-4">
                    Opposite Hotel Madhuvan, Near Ibrahimpur Railway Station <br />
                    Vijayapura, Karnataka 586101
                  </address>
                  <p class="body-4">Open: 12:00 pm - 10:30 pm</p>
                  <span class="store-card-cta label-1">See store gallery</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section
          class="section service bg-black-10 text-center"
          aria-label="service"
          id="service"
        >
          <div class="container">
            <p class="section-subtitle label-2">Flavors For Royalty</p>
            <h2 class="headline-1 section-title">We Offer Top Notch</h2>
            <p class="section-text">
              At Mr.Shawarma, we pride ourselves on using fresh, high-quality
              ingredients to create authentic Middle Eastern flavors blended
              with local tastes. Our menu features charcoal-grilled shawarmas,
              juicy burgers, crispy pizzas, and refreshing drinks.
            </p>
            <ul class="grid-list">
              <li>
                <div class="service-card">
                  <a href="/menu" class="has-before hover:shine">
                    <figure
                      class="card-banner img-holder"
                      style="--width: 285; --height: 336"
                    >
                      <img
                        src="/assets/images/service-1.png"
                        width="285"
                        height="336"
                        loading="lazy"
                        alt="Shawarmas"
                        class="img-cover"
                      />
                    </figure>
                  </a>
                  <div class="card-content">
                    <h3 class="title-4 card-title">
                      <a href="/menu">Shawarmas</a>
                    </h3>
                    <a href="/menu" class="btn-text hover-underline label-2"
                      >View Menu</a
                    >
                  </div>
                </div>
              </li>
              <li>
                <div class="service-card">
                  <a href="/menu" class="has-before hover:shine">
                    <figure
                      class="card-banner img-holder"
                      style="--width: 285; --height: 336"
                    >
                      <img
                        src="/assets/images/service-2.png"
                        width="285"
                        height="336"
                        loading="lazy"
                        alt="Burgers"
                        class="img-cover"
                      />
                    </figure>
                  </a>
                  <div class="card-content">
                    <h3 class="title-4 card-title">
                      <a href="/menu">Burgers</a>
                    </h3>
                    <a href="/menu" class="btn-text hover-underline label-2"
                      >View Menu</a
                    >
                  </div>
                </div>
              </li>
              <li>
                <div class="service-card">
                  <a href="/menu" class="has-before hover:shine">
                    <figure
                      class="card-banner img-holder"
                      style="--width: 285; --height: 336"
                    >
                      <img
                        src="/assets/images/service-3.png"
                        width="285"
                        height="336"
                        loading="lazy"
                        alt="Pizzas"
                        class="img-cover"
                      />
                    </figure>
                  </a>
                  <div class="card-content">
                    <h3 class="title-4 card-title">
                      <a href="/menu">Pizzas</a>
                    </h3>
                    <a href="/menu" class="btn-text hover-underline label-2"
                      >View Menu</a
                    >
                  </div>
                </div>
              </li>
            </ul>
            <img
              src="/assets/images/shape-1.png"
              width="246"
              height="412"
              loading="lazy"
              alt="shape"
              class="shape shape-1 move-anim"
            />
            <img
              src="/assets/images/shape-2.png"
              width="343"
              height="345"
              loading="lazy"
              alt="shape"
              class="shape shape-2 move-anim"
            />
          </div>
        </section>
        <section
          class="section about text-center"
          aria-labelledby="about-label"
          id="about"
        >
          <div class="container">
            <div class="about-content">
              <p class="label-2 section-subtitle" id="about-label">Our Story</p>
              <h2 class="headline-1 section-title">
                Every Flavor Tells a Story
              </h2>
              <p class="section-text">
                Mr.Shawarma began in 2010 in the heart of Bagalkot, Karnataka,
                with a passion for bringing authentic Middle Eastern shawarma to
                local food lovers. Using traditional charcoal grilling
                techniques and fresh, locally sourced ingredients, we craft each
                dish to perfection. Over the years, we've expanded our menu to
                include fusion items like shawarma-topped pizzas and juicy
                burgers, while maintaining our commitment to hygiene and
                quality. Join us for a culinary journey that blends tradition
                with innovation.
              </p>
              <div class="contact-label">Book Through Call</div>
              <a
                href="tel:+911234567890"
                class="body-1 contact-number hover-underline"
                >+91 74111 51139</a
              >
            </div>
            <figure class="about-banner">
              <img
                src="/assets/images/about-banner.jpg"
                width="570"
                height="570"
                loading="lazy"
                alt="about banner"
                class="w-100"
                data-parallax-item
                data-parallax-speed="1"
              />
              <div
                class="abs-img abs-img-1 has-before"
                data-parallax-item
                data-parallax-speed="1.75"
              >
                <img
                  src="/assets/images/about-abs-image.png"
                  width="285"
                  height="285"
                  loading="lazy"
                  alt=""
                  class="w-100"
                />
              </div>
            </figure>
            <img
              src="/assets/images/shape-3.png"
              width="197"
              height="194"
              loading="lazy"
              alt=""
              class="shape"
            />
          </div>
        </section>
        <section class="special-dish text-center" aria-labelledby="dish-label">
          <div class="special-dish-banner">
            <img
              src="/assets/images/special-dish-banner.png"
              width="940"
              height="900"
              loading="lazy"
              alt="special dish"
              class="img-cover"
            />
          </div>
          <div class="special-dish-content bg-black-10">
            <div class="container" id="specials">
              <img
                src="/assets/images/badge-1.png"
                width="28"
                height="41"
                loading="lazy"
                alt="badge"
                class="abs-img"
              />
              <p class="section-subtitle label-2">Special Dish</p>
              <h2 class="headline-1 section-title">Chicken Shawarma</h2>
              <p class="section-text">
                Tender chicken marinated in a blend of Middle Eastern spices,
                grilled on charcoal, and served with fresh vegetables, garlic
                sauce, and warm pita bread. A customer favorite that's juicy,
                flavorful, and perfect for any meal.
              </p>
              <div class="wrapper">
                <del class="del body-3">₹250</del>
                <span class="span body-1">₹200</span>
              </div>
              <a href="/menu" class="btn btn-primary">
                <span class="text text-1">View All Menu</span>
                <span class="text text-2" aria-hidden="true"
                  >View All Menu</span
                >
              </a>
            </div>
          </div>
          <img
            src="/assets/images/shape-4.png"
            width="179"
            height="359"
            loading="lazy"
            alt=""
            class="shape shape-1"
          />
          <img
            src="/assets/images/shape-9.png"
            width="351"
            height="462"
            loading="lazy"
            alt=""
            class="shape shape-2"
          />
        </section>
        <section class="section menu" aria-label="menu-label" id="menu">
          <div class="container">
            <p class="section-subtitle text-center label-2">
              Special Selection
            </p>
            <h2 class="headline-1 section-title text-center">Delicious Menu</h2>
            <ul class="grid-list">
              <!-- Chicken Rolls -->
              <li>
                <div class="menu-card hover:card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                  >
                    <img
                      src="/assets/images/shawarma.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Shawarma"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">
                        <a href="/menu" class="card-title">Shawarma</a>
                      </h3>
                      <span class="badge label-1">Popular</span>
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
                      src="/assets/images/hot-shawarma.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Hot Shawarma"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">
                        <a href="/menu" class="card-title">Hot Shawarma</a>
                      </h3>
                      <span class="badge label-1">New</span>
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
                      <h3 class="title-3">
                        <a href="/menu" class="card-title"
                          >Spicy Shawarma</a
                        >
                      </h3>
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
                      <h3 class="title-3">
                        <a href="/menu" class="card-title"
                          >Creamy Shawarma</a
                        >
                      </h3>
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
                      <h3 class="title-3">
                        <a href="/menu" class="card-title"
                          >Only Chicken Shawarma</a
                        >
                      </h3>
                      <span class="badge label-1">Popular</span>
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
                      <h3 class="title-3">
                        <a href="/menu" class="card-title"
                          >Grill Flat Shawarma</a
                        >
                      </h3>
                      <span class="span title-2">₹120</span>
                    </div>
                    <p class="card-text label-1">
                      Grilled flatbread with shawarma filling.
                    </p>
                  </div>
                </div>
              </li>

              <!-- Chicken Sandwich -->
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
                      alt="Chicken Sandwich"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">
                        <a href="/menu" class="card-title"
                          >Chicken Sandwich</a
                        >
                      </h3>
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
                      src="/assets/images/menu-2.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Chicken Spicy Sandwich"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">
                        <a href="/menu" class="card-title"
                          >Chicken Spicy Sandwich</a
                        >
                      </h3>
                      <span class="badge label-1">New</span>
                      <span class="span title-2">₹110</span>
                    </div>
                    <p class="card-text label-1">
                      Spicy chicken sandwich with extra heat.
                    </p>
                  </div>
                </div>
              </li>

              <!-- Chicken Pizza -->
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
                      <h3 class="title-3">
                        <a href="/menu" class="card-title"
                          >Medium Chicken Pizza</a
                        >
                      </h3>
                      <span class="badge label-1">Popular</span>
                      <span class="span title-2">₹300</span>
                    </div>
                    <p class="card-text label-1">
                      Medium pizza with chicken toppings.
                    </p>
                  </div>
                </div>
              </li>

              <!-- Chicken Burger -->
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
                      alt="Chicken Cheese Burger"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">
                        <a href="/menu" class="card-title"
                          >Chicken Cheese Burger</a
                        >
                      </h3>
                      <span class="span title-2">₹150</span>
                    </div>
                    <p class="card-text label-1">
                      Chicken burger with melted cheese.
                    </p>
                  </div>
                </div>
              </li>

              <!-- Egg Roll -->
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
                      alt="Egg Spicy Roll"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">
                        <a href="/menu" class="card-title"
                          >Egg Spicy Roll</a
                        >
                      </h3>
                      <span class="span title-2">₹100</span>
                    </div>
                    <p class="card-text label-1">
                      Spicy egg roll with extra seasoning.
                    </p>
                  </div>
                </div>
              </li>

              <!-- Paneer Rolls -->
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
                      alt="Paneer Spicy Roll"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">
                        <a href="/menu" class="card-title"
                          >Paneer Spicy Roll</a
                        >
                      </h3>
                      <span class="badge label-1">New</span>
                      <span class="span title-2">₹110</span>
                    </div>
                    <p class="card-text label-1">
                      Spicy paneer roll with extra flavor.
                    </p>
                  </div>
                </div>
              </li>

              <!-- French Fries & Smily's -->
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
                      alt="Cheesy French Fries"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">
                        <a href="/menu" class="card-title"
                          >Cheesy French Fries</a
                        >
                      </h3>
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
                      src="/assets/images/menu-2.png"
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Smily Peri Peri Fries"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">
                        <a href="/menu" class="card-title"
                          >Smily Peri Peri Fries</a
                        >
                      </h3>
                      <span class="badge label-1">Popular</span>
                      <span class="span title-2">₹90</span>
                    </div>
                    <p class="card-text label-1">
                      Mini peri peri fries in smiley shape.
                    </p>
                  </div>
                </div>
              </li>

              <!-- Mocktails -->
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
                      alt="Mojito Mint"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">
                        <a href="/menu" class="card-title">Mojito Mint</a>
                      </h3>
                      <span class="span title-2">₹80</span>
                    </div>
                    <p class="card-text label-1">
                      Refreshing mint and lime drink.
                    </p>
                  </div>
                </div>
              </li>

              <!-- Coffee & Shakes -->
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
                      alt="Chocolate Shake"
                      class="img-cover"
                    />
                  </figure>
                  <div>
                    <div class="title-wrapper">
                      <h3 class="title-3">
                        <a href="/menu" class="card-title"
                          >Chocolate Shake</a
                        >
                      </h3>
                      <span class="badge label-1">New</span>
                      <span class="span title-2">₹100</span>
                    </div>
                    <p class="card-text label-1">Rich chocolate milkshake.</p>
                  </div>
                </div>
              </li>
            </ul>
            <p class="menu-text text-center">
              During evenings from <span class="span">6:00 pm</span> to
              <span class="span">9:00 pm</span>, enjoy our special offers.
            </p>
            <a href="/menu" class="btn btn-primary">
              <span class="text text-1">View All Menu</span>
              <span class="text text-2" aria-hidden="true">View All Menu</span>
            </a>
            <img
              src="/assets/images/shape-5.png"
              width="921"
              height="1036"
              loading="lazy"
              alt="shape"
              class="shape shape-2 move-anim"
            />
            <img
              src="/assets/images/shape-6.png"
              width="343"
              height="345"
              loading="lazy"
              alt="shape"
              class="shape shape-3 move-anim"
            />
          </div>
        </section>
        <section
          class="section testi text-center has-bg-image"
          style="background-image: url('/assets/images/testimonial-bg.png')"
          aria-label="testimonials"
          id="testimonials"
        >
          <div class="container">
            <div class="quote">”</div>
            <p class="headline-2 testi-text">
              The shawarma here is the best I've ever had! Fresh, flavorful, and
              perfectly grilled. A must-visit in Bagalkot.
            </p>
            <div class="wrapper">
              <div class="separator"></div>
              <div class="separator"></div>
              <div class="separator"></div>
            </div>
            <div class="profile">
              <img
                src="/assets/images/testi-avatar.png"
                width="100"
                height="100"
                loading="lazy"
                alt="Priya Singh"
                class="img"
              />
              <p class="label-2 profile-name">Priya Singh</p>
            </div>
          </div>
        </section>
        <section class="section features text-center" aria-label="features">
          <div class="container">
            <p class="section-subtitle label-2">Why Choose Us</p>
            <h2 class="headline-1 section-title">Our Strength</h2>
            <ul class="grid-list">
              <li class="feature-item">
                <div class="feature-card">
                  <div class="card-icon">
                    <img
                      src="/assets/images/features-icon-1.png"
                      width="100"
                      height="80"
                      loading="lazy"
                      alt="icon"
                    />
                  </div>
                  <h3 class="title-2 card-title">Hygienic Food</h3>
                  <p class="label-1 card-text">
                    We maintain strict hygiene standards in our kitchen to
                    ensure every bite is safe and delicious.
                  </p>
                </div>
              </li>
              <li class="feature-item">
                <div class="feature-card">
                  <div class="card-icon">
                    <img
                      src="/assets/images/features-icon-2.png"
                      width="100"
                      height="80"
                      loading="lazy"
                      alt="icon"
                    />
                  </div>
                  <h3 class="title-2 card-title">Fresh Environment</h3>
                  <p class="label-1 card-text">
                    Our stores are clean, welcoming, and designed for a
                    comfortable dining experience.
                  </p>
                </div>
              </li>
              <li class="feature-item">
                <div class="feature-card">
                  <div class="card-icon">
                    <img
                      src="/assets/images/features-icon-3.png"
                      width="100"
                      height="80"
                      loading="lazy"
                      alt="icon"
                    />
                  </div>
                  <h3 class="title-2 card-title">Skilled Chefs</h3>
                  <p class="label-1 card-text">
                    Our chefs are experts in Middle Eastern cuisine, bringing
                    authentic flavors to every dish.
                  </p>
                </div>
              </li>
              <li class="feature-item">
                <div class="feature-card">
                  <div class="card-icon">
                    <img
                      src="/assets/images/features-icon-4.png"
                      width="100"
                      height="80"
                      loading="lazy"
                      alt="icon"
                    />
                  </div>
                  <h3 class="title-2 card-title">Event & Party</h3>
                  <p class="label-1 card-text">
                    We cater to events and parties with customized menus and
                    delicious food options.
                  </p>
                </div>
              </li>
            </ul>
            <img
              src="/assets/images/shape-7.png"
              width="208"
              height="178"
              loading="lazy"
              alt="shape"
              class="shape shape-1"
            />
            <img
              src="/assets/images/shape-8.png"
              width="120"
              height="115"
              loading="lazy"
              alt="shape"
              class="shape shape-2"
            />
          </div>
        </section>
        <section class="section event bg-black-10" aria-label="event">
          <div class="container">
            <p class="section-subtitle label-2 text-center">Recent Updates</p>
            <h2 class="section-title headline-1 text-center">
              Upcoming Events
            </h2>
            <ul class="grid-list">
              <li>
                <div class="event-card has-before hover:shine">
                  <div
                    class="card-banner img-holder"
                    style="--width: 350; --height: 450"
                  >
                    <img
                      src="/assets/images/event-1.jpg"
                      width="350"
                      height="450"
                      loading="lazy"
                      alt="Shawarma Workshop"
                      class="img-cover"
                    />
                    <time class="publish-date label-2" datetime="2025-10-15"
                      >15/10/2025</time
                    >
                  </div>
                  <div class="card-content">
                    <p class="card-subtitle label-2 text-center">
                      Food Workshop
                    </p>
                    <h3 class="card-title title-2 text-center">
                      Learn to Make Authentic Shawarma at Home
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div class="event-card has-before hover:shine">
                  <div
                    class="card-banner img-holder"
                    style="--width: 350; --height: 450"
                  >
                    <img
                      src="/assets/images/event-2.jpg"
                      width="350"
                      height="450"
                      loading="lazy"
                      alt="Healthy Eating Tips"
                      class="img-cover"
                    />
                    <time class="publish-date label-2" datetime="2025-11-08"
                      >08/11/2025</time
                    >
                  </div>
                  <div class="card-content">
                    <p class="card-subtitle label-2 text-center">
                      Health Seminar
                    </p>
                    <h3 class="card-title title-2 text-center">
                      Tips for Incorporating Shawarma into a Healthy Diet
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div class="event-card has-before hover:shine">
                  <div
                    class="card-banner img-holder"
                    style="--width: 350; --height: 450"
                  >
                    <img
                      src="/assets/images/event-3.jpg"
                      width="350"
                      height="450"
                      loading="lazy"
                      alt="New Recipe Launch"
                      class="img-cover"
                    />
                    <time class="publish-date label-2" datetime="2025-12-03"
                      >03/12/2025</time
                    >
                  </div>
                  <div class="card-content">
                    <p class="card-subtitle label-2 text-center">
                      Recipe Launch
                    </p>
                    <h3 class="card-title title-2 text-center">
                      Introducing Our New Shawarma Fusion Recipes
                    </h3>
                  </div>
                </div>
              </li>
            </ul>
            <a href="/blog" class="btn btn-primary">
              <span class="text text-1">View Our Blog</span>
              <span class="text text-2" aria-hidden="true">View Our Blog</span>
            </a>
          </div>
        </section>
      </article>
    </main>
    <footer
      class="footer section has-bg-image text-center"
      style="background-image: url('/assets/images/footer-bg.png')"
    >
      <div class="container" id="contact">
        <div class="footer-top grid-list">
          <div class="footer-brand has-before has-after">
            <a href="#home" class="logo">
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
              <a href="#home" class="label-2 footer-link hover-underline"
                >Home</a
              >
            </li>
            <li>
              <a href="#store" class="label-2 footer-link hover-underline"
                >Our Stores</a
              >
            </li>
            <li>
              <a href="#specials" class="label-2 footer-link hover-underline"
                >Specials</a
              >
            </li>
            <li>
              <a href="#service" class="label-2 footer-link hover-underline"
                >Menu</a
              >
            </li>
            <li>
              <a href="#about" class="label-2 footer-link hover-underline"
                >About Us</a
              >
            </li>
            <li>
              <a
                href="#testimonials"
                class="label-2 footer-link hover-underline"
                >Testimonials</a
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
            &copy; 2025 Mr.Shawarma. All Rights Reserved | Crafted in charcoal
            and grilled to perfection by
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
    <a
      href="#top"
      class="back-top-btn active"
      aria-label="back to top"
      data-back-top-btn
    >
      <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
    </a>
`

export default function HomePage() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
