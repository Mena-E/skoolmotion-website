// =============================================
// SKOOLMOTION SITE CONFIGURATION
// Edit these values to update across all pages
// =============================================

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
