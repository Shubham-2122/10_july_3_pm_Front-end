(function () {
  "use strict";

  /* =========================
     Scroll header
  ========================== */
  function toggleScrolled() {
    const body = document.body;
    const header = document.querySelector('#header');

    if (!header) return;
    if (
      !header.classList.contains('scroll-up-sticky') &&
      !header.classList.contains('sticky-top') &&
      !header.classList.contains('fixed-top')
    ) return;

    body.classList.toggle('scrolled', window.scrollY > 100);
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /* =========================
     Mobile nav toggle
  ========================== */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToggle() {
    document.body.classList.toggle('mobile-nav-active');
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToggle);
  }

  /* =========================
     Hide mobile nav on link click
  ========================== */
  document.querySelectorAll('#navmenu a').forEach(link => {
    link.addEventListener('click', () => {
      if (document.body.classList.contains('mobile-nav-active')) {
        mobileNavToggle();
      }
    });
  });

  /* =========================
     Mobile dropdowns
  ========================== */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(el => {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const parent = this.parentNode;
      if (!parent || !parent.nextElementSibling) return;

      parent.classList.toggle('active');
      parent.nextElementSibling.classList.toggle('dropdown-active');
      e.stopPropagation();
    });
  });

  /* =========================
     Preloader
  ========================== */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => preloader.remove());
  }

  /* =========================
     Scroll top button
  ========================== */
  const scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (!scrollTop) return;
    scrollTop.classList.toggle('active', window.scrollY > 100);
  }

  if (scrollTop) {
    scrollTop.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /* =========================
     AOS
  ========================== */
  if (typeof AOS !== "undefined") {
    window.addEventListener('load', () => {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    });
  }

  /* =========================
     Pure Counter
  ========================== */
  if (typeof PureCounter !== "undefined") {
    new PureCounter();
  }

})();
