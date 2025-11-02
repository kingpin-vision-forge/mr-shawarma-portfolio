'use strict';

/**
 * PRELOAD
 * loading will be end after document is loaded
 */
const preloader = document.querySelector('[data-preaload]');
const handlePageLoaded = () => {
  preloader.classList.add('loaded');
  document.body.classList.add('loaded');
};

if (preloader) {
  if (document.readyState === 'complete') {
    handlePageLoaded();
  } else {
    window.addEventListener('load', handlePageLoaded);
  }
}

/**
 * add event listener on multiple elements
 */
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i += 1) {
    if (!elements[i]) continue;
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * NAVBAR
 */
const navbar = document.querySelector('[data-navbar]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');

const toggleNavbar = function () {
  if (!navbar || !overlay) return;
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('nav-active');
};

if (navTogglers.length && navbar && overlay) {
  addEventOnElements(navTogglers, 'click', toggleNavbar);
}

/**
 * HEADER & BACK TOP BTN
 */
const header = document.querySelector('[data-header]');
const backTopBtn = document.querySelector('[data-back-top-btn]');

let lastScrollPos = 0;

const hideHeader = function () {
  if (!header) return;
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }
  lastScrollPos = window.scrollY;
};

if (header) {
  window.addEventListener('scroll', function () {
    if (window.scrollY >= 50) {
      header.classList.add('active');
      if (backTopBtn) {
        backTopBtn.classList.add('active');
      }
      hideHeader();
    } else {
      header.classList.remove('active');
      if (backTopBtn) {
        backTopBtn.classList.remove('active');
      }
    }
  });
}

/**
 * HERO SLIDER
 */
const heroSlider = document.querySelector('[data-hero-slider]');
const heroSliderItems = document.querySelectorAll('[data-hero-slider-item]');
const heroSliderPrevBtn = document.querySelector('[data-prev-btn]');
const heroSliderNextBtn = document.querySelector('[data-next-btn]');

if (heroSlider && heroSliderItems.length > 0 && heroSliderPrevBtn && heroSliderNextBtn) {
  let currentSlidePos = 0;
  let lastActiveSliderItem = heroSliderItems[0];

  const updateSliderPos = function () {
    lastActiveSliderItem.classList.remove('active');
    heroSliderItems[currentSlidePos].classList.add('active');
    lastActiveSliderItem = heroSliderItems[currentSlidePos];
  };

  const slideNext = function () {
    if (currentSlidePos >= heroSliderItems.length - 1) {
      currentSlidePos = 0;
    } else {
      currentSlidePos += 1;
    }
    updateSliderPos();
  };

  const slidePrev = function () {
    if (currentSlidePos <= 0) {
      currentSlidePos = heroSliderItems.length - 1;
    } else {
      currentSlidePos -= 1;
    }
    updateSliderPos();
  };

  heroSliderNextBtn.addEventListener('click', slideNext);
  heroSliderPrevBtn.addEventListener('click', slidePrev);

  /**
   * auto slide
   */
  let autoSlideInterval;

  const autoSlide = function () {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(slideNext, 7000);
  };

  const pauseAutoSlide = function () {
    clearInterval(autoSlideInterval);
  };

  [heroSliderNextBtn, heroSliderPrevBtn].forEach((button) => {
    button.addEventListener('mouseover', pauseAutoSlide);
    button.addEventListener('mouseout', autoSlide);
  });

  if (document.readyState === 'complete') {
    autoSlide();
  } else {
    window.addEventListener('load', autoSlide);
  }
}

/**
 * PARALLAX EFFECT
 */
const parallaxItems = document.querySelectorAll('[data-parallax-item]');

if (parallaxItems.length > 0) {
  window.addEventListener('mousemove', function (event) {
    const baseX = (event.clientX / window.innerWidth) * 10 - 5;
    const baseY = (event.clientY / window.innerHeight) * 10 - 5;

    const offsetX = baseX - baseX * 2;
    const offsetY = baseY - baseY * 2;

    for (let i = 0, len = parallaxItems.length; i < len; i += 1) {
      const speed = Number(parallaxItems[i].dataset.parallaxSpeed) || 1;
      parallaxItems[i].style.transform = `translate3d(${offsetX * speed}px, ${offsetY * speed}px, 0px)`;
    }
  });
}

/**
 * SCROLL REVEAL
 */
const initScrollReveal = () => {
  const nodeList = document.querySelectorAll('[data-scroll-reveal], .section, .footer');
  if (!nodeList.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const uniqueTargets = Array.from(new Set(Array.from(nodeList)));

  uniqueTargets.forEach((target) => {
    if (!target.classList.contains('scroll-reveal')) {
      target.classList.add('scroll-reveal');
    }
  });

  const activate = (element) => element.classList.add('is-visible');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    uniqueTargets.forEach(activate);
    document.body.classList.add('scroll-init');
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px',
    },
  );

  uniqueTargets.forEach((target) => {
    const delay = target.dataset.scrollDelay;
    if (delay) {
      target.style.setProperty('--scroll-reveal-delay', delay);
    }
    const distance = target.dataset.scrollDistance;
    if (distance) {
      target.style.setProperty('--scroll-reveal-distance', distance);
    }
    observer.observe(target);
  });

  requestAnimationFrame(() => document.body.classList.add('scroll-init'));
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollReveal);
} else {
  initScrollReveal();
}
