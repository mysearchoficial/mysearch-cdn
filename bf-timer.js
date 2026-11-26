/* My Search · Black Friday: barra negra con cuenta regresiva arriba de todo.
   Ocupa el lugar de la barra de anuncios (slot before_main_content de NubeSDK, 53px),
   así que no corre la página. Termina el martes 01/12/2026 a las 00:00 (hora Argentina)
   y a esa hora se saca sola y vuelve la barra de anuncios. Para probar fuera de fecha: ?msbt=1 */
!function () {
  var d = document, html = d.documentElement;
  var INI = new Date('2026-11-25T00:00:00-03:00').getTime();
  var FIN = new Date('2026-12-01T00:00:00-03:00').getTime();
  var forzar = /[?&]msbt=1/.test(location.search);
  var ahora = Date.now();
  if (!forzar && (ahora < INI || ahora >= FIN)) return;
  if (d.getElementById('msbt')) return;

  var LOC = '/productos/localizador-mysearch/';
  var SLOT = '[data-nubesdk-slot="before_main_content"]';

  var css =
    'html.msbt-on ' + SLOT + '{display:none!important}' +
    '#msbt{font-family:Inter,sans-serif;color:#fff;background:#0b0b0c;height:53px;display:flex;align-items:center;justify-content:center;gap:22px;padding:0 16px;border-bottom:2px solid #E3262F;box-sizing:border-box;text-decoration:none;position:relative;z-index:2}' +
    '#msbt *{box-sizing:border-box}' +
    '#msbt .t{background:#E3262F;color:#fff;font-weight:800;font-size:13px;letter-spacing:.08em;padding:5px 10px;border-radius:4px;white-space:nowrap}' +
    '#msbt .l{font-size:13px;letter-spacing:.06em;color:#b9bdc6;text-transform:uppercase;white-space:nowrap}' +
    '#msbt .c{display:flex;gap:6px;align-items:center}' +
    '#msbt .b{background:#1c1d21;border:1px solid #3a3d44;border-radius:5px;padding:3px 7px;font-size:16px;font-weight:800;min-width:44px;text-align:center;font-variant-numeric:tabular-nums;color:#fff;line-height:1.3}' +
    '#msbt .b small{font-size:10px;color:#9aa0ab;font-weight:600;margin-left:2px}' +
    '#msbt .cta{color:#fff;font-weight:700;font-size:13px;border-bottom:1px solid #E3262F;padding-bottom:1px;white-space:nowrap}' +
    '@media(max-width:767px){#msbt{gap:8px;padding:0 10px}#msbt .l,#msbt .cta{display:none}#msbt .t{font-size:11px;padding:4px 7px}#msbt .b{min-width:0;font-size:14px;padding:3px 5px}#msbt .c{gap:4px}}' +
    '@media(max-width:340px){#msbt .t{font-size:10px;padding:3px 5px}#msbt .b{font-size:13px;padding:2px 4px}#msbt .b small{font-size:9px}}';

  var st = d.createElement('style'); st.id = 'msbt-css'; st.textContent = css; d.head.appendChild(st);

  var bar = d.createElement('a');
  bar.id = 'msbt'; bar.href = LOC;
  bar.setAttribute('aria-label', 'Black Friday: ver el Kit Black Friday');
  bar.innerHTML = '<span class="t">BLACK FRIDAY</span><span class="l">Termina en</span>' +
    '<span class="c" role="timer"><span class="b" data-u="d"></span><span class="b" data-u="h"></span><span class="b" data-u="m"></span><span class="b" data-u="s"></span></span>' +
    '<span class="cta">Ver el kit · 42% OFF →</span>';

  // En la ficha del Localizador, en vez de recargar, baja hasta el kit.
  bar.addEventListener('click', function (e) {
    var kit = d.getElementById('msbf');
    if (kit && location.pathname.indexOf(LOC) === 0) { e.preventDefault(); kit.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
  });

  function poner() {
    if (!d.body) return false;
    var slot = d.querySelector(SLOT);
    if (slot) { if (bar.nextSibling !== slot) slot.parentNode.insertBefore(bar, slot); }
    else if (!bar.parentNode) d.body.insertBefore(bar, d.body.firstChild);
    html.classList.add('msbt-on');
    return true;
  }

  function p(n) { return (n < 10 ? '0' : '') + n; }
  var celdas, timer;
  function tick() {
    var r = FIN - Date.now();
    if (r <= 0 && !forzar) { sacar(); return; }
    r = Math.max(0, r);
    var s = Math.floor(r / 1e3), D = Math.floor(s / 86400), H = Math.floor(s % 86400 / 3600), M = Math.floor(s % 3600 / 60), S = s % 60;
    celdas = celdas || bar.querySelectorAll('[data-u]');
    var v = { d: D + '<small>d</small>', h: p(H) + '<small>h</small>', m: p(M) + '<small>m</small>', s: p(S) + '<small>s</small>' };
    for (var i = 0; i < celdas.length; i++) celdas[i].innerHTML = v[celdas[i].getAttribute('data-u')];
  }
  function sacar() {
    clearInterval(timer);
    html.classList.remove('msbt-on');
    bar.parentNode && bar.parentNode.removeChild(bar);
  }

  tick();
  if (!poner()) d.addEventListener('DOMContentLoaded', poner);
  timer = setInterval(tick, 1000);
  // Si el tema o una app vuelve a dibujar el principio de la página, la barra vuelve a su lugar.
  var t;
  new MutationObserver(function () {
    clearTimeout(t);
    t = setTimeout(function () { if (html.classList.contains('msbt-on') && (!bar.parentNode || (d.querySelector(SLOT) && bar.nextSibling !== d.querySelector(SLOT)))) poner(); }, 100);
  }).observe(d.body || html, { childList: true });
}();
