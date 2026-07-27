// =============================================
// SKOOLMOTION SITE CONFIGURATION
// Edit these values to update across all pages
// =============================================

// Base origin for the SkoolMotion admin app/API (the Vercel `skoolmotion`
// project) — same origin the mobile app uses (EXPO_PUBLIC_API_URL fallback).
// Used by the carpool pre-registration forms and the availability checker.
const API_BASE = "https://admin.skoolmotion.com";

const SITE_CONFIG = {
  phone: "(617) 991-9152",
  phoneLink: "tel:+16179919152",
  email: "support@skoolmotion.com",
  privacyEmail: "privacy@skoolmotion.com",
  address: "675 VFW Parkway, Suite 103",
  city: "Chestnut Hill, MA 02467"
};

// Auto-populate elements with class "config-phone", "config-email", etc.
document.addEventListener('DOMContentLoaded', function() {
  // Phone numbers
  document.querySelectorAll('.config-phone').forEach(el => {
    el.textContent = SITE_CONFIG.phone;
  });
  document.querySelectorAll('a.config-phone-link').forEach(el => {
    el.href = SITE_CONFIG.phoneLink;
    el.textContent = SITE_CONFIG.phone;
  });
  
  // Email
  document.querySelectorAll('.config-email').forEach(el => {
    el.textContent = SITE_CONFIG.email;
  });
  document.querySelectorAll('a.config-email-link').forEach(el => {
    el.href = "mailto:" + SITE_CONFIG.email;
    el.textContent = SITE_CONFIG.email;
  });
  
  // Address
  document.querySelectorAll('.config-address').forEach(el => {
    el.innerHTML = SITE_CONFIG.address + "<br>" + SITE_CONFIG.city;
  });

  // Disable placeholder links (Careers / Press) until pages are ready
  document.querySelectorAll('a[href="careers.html"], a[href="press.html"]').forEach(a => {
    a.classList.add('disabled-link');
    a.setAttribute('aria-disabled', 'true');
    a.setAttribute('tabindex', '-1');
    a.addEventListener('click', (e) => e.preventDefault());
  });

});

// =============================================
// ANTI-BOT FORM PROTECTION
// Server-enforced by the TransafeGo API (lib/form-abuse) — these fields
// feed it. Cloudflare Turnstile activates when a site key is set here AND
// TURNSTILE_SECRET_KEY is configured on the admin app (Vercel env).
// =============================================
const TURNSTILE_SITE_KEY = "";

window.SM_FORMS = {
  // Stamped when the page rendered — submissions faster than a human can
  // type are dropped server-side.
  startedAt: Date.now(),
  // Attach the anti-bot fields to a JSON payload before POSTing.
  protect: function (body, form) {
    body.form_started_at = window.SM_FORMS.startedAt;
    var hp = form && form.querySelector('input[name="website"]');
    body.website = hp ? hp.value : '';
    if (window.turnstile && TURNSTILE_SITE_KEY) {
      try { body.turnstile_token = window.turnstile.getResponse(); } catch (e) { /* widget not ready */ }
    }
    return body;
  }
};

// Load the Turnstile widget only when configured
if (TURNSTILE_SITE_KEY) {
  document.addEventListener('DOMContentLoaded', function () {
    var anchors = document.querySelectorAll('.sm-turnstile');
    if (!anchors.length) return;
    anchors.forEach(function (el) {
      el.classList.add('cf-turnstile');
      el.setAttribute('data-sitekey', TURNSTILE_SITE_KEY);
    });
    var s = document.createElement('script');
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    s.async = true;
    s.defer = true;
    document.head.appendChild(s);
  });
}
