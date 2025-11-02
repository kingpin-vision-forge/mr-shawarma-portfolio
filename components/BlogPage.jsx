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
              <a href="/menu" class="navbar-link hover-underline">
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
              <a href="/#specials" class="navbar-link hover-underline">
                <div class="separator"></div>
                <span class="span">Specials</span>
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
      <section class="section event bg-black-10" aria-label="blog">
        <div class="container">
          <p class="section-subtitle label-2 text-center">Our Blog</p>
          <h2 class="section-title headline-1 text-center">
            Latest Posts & Tips
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
                    alt="Authentic Chicken Shawarma Recipe"
                    class="img-cover"
                  />
                  <time class="publish-date label-2" datetime="2025-03-24"
                    >24/03/2025</time
                  >
                </div>
                <div class="card-content">
                  <p class="card-subtitle label-2 text-center">Recipe</p>
                  <h3 class="card-title title-2 text-center">
                    Authentic Chicken Shawarma at Home
                  </h3>
                </div>
              </div>
              <div class="blog-content">
                <p>
                  Marinate chicken thighs in a blend of yogurt, garlic, cumin,
                  paprika, and lemon juice for 1-24 hours. Grill or bake until
                  cooked, then slice thinly. Serve in pita with tahini sauce,
                  cucumbers, tomatoes, and onions for an authentic taste.
                </p>
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
                    alt="Tips for Perfect Shawarma Marinade"
                    class="img-cover"
                  />
                  <time class="publish-date label-2" datetime="2025-04-15"
                    >15/04/2025</time
                  >
                </div>
                <div class="card-content">
                  <p class="card-subtitle label-2 text-center">Tips</p>
                  <h3 class="card-title title-2 text-center">
                    Tips for the Perfect Shawarma Marinade
                  </h3>
                </div>
              </div>
              <div class="blog-content">
                <p>
                  Use fresh spices like coriander, turmeric, and cardamom. Add
                  grated onion and garlic for flavor. Let marinate overnight for
                  best results. Grill on high heat for a smoky taste.
                </p>
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
                    alt="Vertical Spit Shawarma Cooking"
                    class="img-cover"
                  />
                  <time class="publish-date label-2" datetime="2025-05-01"
                    >01/05/2025</time
                  >
                </div>
                <div class="card-content">
                  <p class="card-subtitle label-2 text-center">Cooking Guide</p>
                  <h3 class="card-title title-2 text-center">
                    Cooking Shawarma on a Vertical Spit
                  </h3>
                </div>
              </div>
              <div class="blog-content">
                <p>
                  Layer marinated meat on a vertical spit. Rotate slowly over
                  heat for even cooking. Slice off outer layers as they crisp.
                  Ideal for juicy, tender shawarma.
                </p>
              </div>
            </li>
          </ul>
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
                href="/#specials"
                class="label-2 footer-link hover-underline"
                >Specials</a
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

export default function BlogPage() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
