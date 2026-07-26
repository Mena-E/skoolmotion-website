// =============================================
// SKOOLMOTION SHARED NAV BEHAVIOR
// One binder for every page: header scroll state, mobile menu
// toggle, and touch-friendly dropdowns. Guarded so pages that
// still carry legacy inline nav code can't double-bind.
// =============================================

(function () {
  'use strict';

  if (window.__smNavBound) return;
  window.__smNavBound = true;

  document.addEventListener('DOMContentLoaded', function () {
    var header = document.getElementById('header');
    var nav = header ? header.querySelector('nav') : null;
    if (!header || !nav) return;

    // Scroll state (idempotent — safe alongside any legacy handler)
    function onScroll() {
      header.classList.toggle('scrolled', window.scrollY > 30);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile menu toggle
    var menuBtn = nav.querySelector('.menu-btn');
    if (menuBtn && !menuBtn.dataset.smBound) {
      menuBtn.dataset.smBound = '1';
      menuBtn.addEventListener('click', function () {
        var open = nav.classList.toggle('menu-open');
        menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      nav.querySelectorAll('.mobile-menu a').forEach(function (a) {
        a.addEventListener('click', function () {
          nav.classList.remove('menu-open');
          menuBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // Desktop dropdowns open on hover via CSS; make the caret also work
    // as a tap/keyboard toggle for touch laptops and accessibility.
    nav.querySelectorAll('.nav-group').forEach(function (group) {
      var trigger = group.querySelector(':scope > a');
      if (!trigger) return;
      trigger.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          group.classList.add('open');
          var first = group.querySelector('.dropdown a');
          if (first) first.focus();
        }
      });
      group.addEventListener('mouseleave', function () {
        group.classList.remove('open');
      });
    });

    // Close any open dropdown when focus/click moves elsewhere
    document.addEventListener('click', function (e) {
      nav.querySelectorAll('.nav-group.open').forEach(function (group) {
        if (!group.contains(e.target)) group.classList.remove('open');
      });
    });
  });
})();
