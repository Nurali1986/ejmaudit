/**
 * EJM | Audit — ikonkalar to'plami (SVG, chiziqli uslub, 24x24).
 *
 * Ishlatish:
 *   JS ichida:   icon('map')                  -> <svg ...> (matn bilan bir qatorda)
 *                icon('map', 30)              -> 30px o'lchamda
 *                ico('map')                   -> matn oldidan, o'ngida bo'sh joy bilan
 *   HTML ichida: <span data-icon="map" class="ic-m"></span>   (sahifa yuklanganda SVG ga aylanadi)
 * Rang — joriy matn rangi (currentColor).
 */
(function () {
  var P = {
    dashboard: '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
    audit: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4M12 16h4M8 11h.01M8 16h.01"/>',
    funnel: '<path d="M3 4h18l-7 8.5V19l-4 2v-8.5z"/>',
    map: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
    lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 21a7 7 0 0 1 14 0"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14a5 5 0 0 1 5 5"/>',
    userplus: '<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M19 8v6M16 11h6"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    trending: '<path d="M22 7 13.5 15.5l-5-5L2 17"/><path d="M16 7h6v6"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20"/>',
    timer: '<circle cx="12" cy="14" r="8"/><path d="M12 14l3-3M9 2h6M12 2v4"/>',
    book: '<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
    video: '<rect x="2" y="6" width="14" height="12" rx="2"/><path d="m22 8-6 4 6 4z"/>',
    filecheck: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 15l2 2 4-4"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
    filetext: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
    chart: '<path d="M3 3v18h18"/><path d="M8 17v-6M13 17V7M18 17v-9"/>',
    chevrons: '<path d="m17 11-5-5-5 5M17 18l-5-5-5 5"/>',
    checksquare: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="m9 12 2 2 4-4"/>',
    message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    megaphone: '<path d="M3 11v3a1 1 0 0 0 1 1h2l8 4V6L6 10H4a1 1 0 0 0-1 1z"/><path d="M18 8a5 5 0 0 1 0 8"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0M12 17v5"/>',
    flask: '<path d="M9 2h6M10 2v6L4 19a2 2 0 0 0 1.7 3h12.6A2 2 0 0 0 20 19l-6-11V2"/><path d="M7 15h10"/>',
    banknote: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 12h.01M18 12h.01"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    cap: '<path d="M22 10 12 5 2 10l10 5z"/><path d="M6 12v5c3 2 9 2 12 0v-5M22 10v6"/>',
    smile: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
    layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 12 10 5 10-5M2 17l10 5 10-5"/>',
    laptop: '<rect x="4" y="5" width="16" height="11" rx="2"/><path d="M2 20h20"/>',
    door: '<path d="M3 21h18M6 21V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17"/><path d="M13 12h.01"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9L7 20.3a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
    sprout: '<path d="M7 20h10M12 20v-9"/><path d="M12 11C12 7 9 5 5 5c0 4 2 6 7 6zM12 11c0-3 2-5 6-5 0 3-2 5-6 5z"/>',
    trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
    brain: '<path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 3 3 3 0 0 0 1 2.2A3 3 0 0 0 7 18h2V4zM15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 2 3 3 3 0 0 1-1 2.2A3 3 0 0 1 17 18h-2V4z"/>',
    pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/>',
    receipt: '<path d="M4 2v20l3-2 3 2 2-2 2 2 3-2 3 2V2l-3 2-3-2-2 2-2-2-3 2z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
    sparkles: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 3v4M21 5h-4"/>',
    rocket: '<path d="M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9s-2.2-.8-2.9-.1z"/><path d="m12 15-3-3a22 22 0 0 1 2-4 12.9 12.9 0 0 1 11-6c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2z"/><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
    chevright: '<path d="m9 6 6 6-6 6"/>',
    chevleft: '<path d="m15 6-6 6 6 6"/>',
    dot: '<circle cx="12" cy="12" r="2"/>'
  };

  // size: son (px) yoki bo'sh (CSS bo'yicha 1.1em); cls: qo'shimcha sinf
  window.icon = function (name, size, cls) {
    var s = size ? ' width="' + size + '" height="' + size + '" style="width:' + size + 'px;height:' + size + 'px"' : '';
    return '<svg class="ic' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24"' + s +
      ' fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (P[name] || P.dot) + '</svg>';
  };
  // matn oldidan qo'yish uchun (o'ng tomonda bo'sh joy)
  window.ico = function (name) { return window.icon(name, null, 'ic-m'); };

  // <span data-icon="nom" class="..."></span> ni SVG ga aylantiradi
  window.upgradeIcons = function (root) {
    (root || document).querySelectorAll('[data-icon]').forEach(function (el) {
      var t = document.createElement('span');
      t.innerHTML = window.icon(el.getAttribute('data-icon'), el.getAttribute('data-size'), el.className);
      el.replaceWith(t.firstChild);
    });
  };
  document.addEventListener('DOMContentLoaded', function () { window.upgradeIcons(); });
})();
