// =============================================
// SKOOLMOTION ANALYTICS
// Vercel Web Analytics (cookieless) + UTM persistence.
// Include as a plain (non-defer) script in <head> so window.SM
// exists before any inline page scripts run.
//
// Custom events queue into window.vaq until /_vercel/insights/script.js
// loads; if Web Analytics is disabled on the Vercel project the script
// 404s and everything silently no-ops.
// =============================================

(function () {
  'use strict';

  var UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  var STORAGE_KEY = 'sm_utm';

  // --- Vercel Web Analytics queue shim + loader ---
  window.va = window.va || function () {
    (window.vaq = window.vaq || []).push(arguments);
  };
  var s = document.createElement('script');
  s.defer = true;
  s.src = '/_vercel/insights/script.js';
  document.head.appendChild(s);

  // --- UTM capture: persist first-touch params for the session so a
  // visitor who lands on any page keeps attribution through to the
  // carpool forms on other pages. Fresh URL params always win. ---
  function readStored() {
    try {
      return JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  var params = new URLSearchParams(window.location.search);
  var fromUrl = {};
  UTM_KEYS.forEach(function (k) {
    var v = params.get(k);
    if (v) fromUrl[k] = v.slice(0, 200);
  });
  if (Object.keys(fromUrl).length > 0) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
    } catch (e) { /* storage unavailable (private mode) — URL params still work on this page */ }
  }

  window.SM = {
    // Merged UTM params: current URL first, then session-stored landing params.
    // Always returns all five keys (null when absent) to match the API payload shape.
    utm: function () {
      var stored = readStored();
      var out = {};
      UTM_KEYS.forEach(function (k) {
        out[k] = fromUrl[k] || stored[k] || null;
      });
      return out;
    },

    // Fire a custom Web Analytics event. UTM source/campaign ride along so
    // funnel events are attributable even in aggregate views.
    track: function (name, data) {
      try {
        var utm = window.SM.utm();
        var payload = data || {};
        if (utm.utm_source && payload.utm_source === undefined) payload.utm_source = utm.utm_source;
        if (utm.utm_campaign && payload.utm_campaign === undefined) payload.utm_campaign = utm.utm_campaign;
        window.va('event', { name: name, data: payload });
      } catch (e) { /* analytics must never break the page */ }
    }
  };

  // --- App Store / Play Store outbound clicks (any page) ---
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.href || '';
    if (href.indexOf('apps.apple.com') !== -1) {
      window.SM.track('download_click', { store: 'ios', page: window.location.pathname });
    } else if (href.indexOf('play.google.com') !== -1) {
      window.SM.track('download_click', { store: 'android', page: window.location.pathname });
    }
  }, true);
})();
