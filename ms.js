/* My Search · ms.js — generado por build.sh, no editar a mano. */

/* ---- bf-timer.js ---- */
/* My Search · Black Friday: barra negra con cuenta regresiva arriba de todo.
   Va dentro del encabezado fijo del tema, así que acompaña al bajar (celular y computadora).
   Mientras está, se oculta la barra de anuncios (slot before_main_content de NubeSDK, 53px). Termina el martes 01/12/2026 a las 00:00 (hora Argentina)
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
    'header.js-head-main>#msbt{flex:0 0 100%;width:100%}' +
    '#msbt{font-family:Inter,sans-serif;color:#fff;background:#0b0b0c;height:53px;display:flex;align-items:center;justify-content:center;gap:22px;padding:0 16px;border-bottom:2px solid #E3262F;box-sizing:border-box;text-decoration:none;position:relative;z-index:2}' +
    '#msbt *{box-sizing:border-box}' +
    '#msbt .t{background:#E3262F;color:#fff;font-weight:800;font-size:13px;letter-spacing:.08em;padding:5px 10px;border-radius:4px;white-space:nowrap}' +
    '#msbt .l{font-size:13px;letter-spacing:.06em;color:#b9bdc6;text-transform:uppercase;white-space:nowrap}' +
    '#msbt .c{display:flex;gap:6px;align-items:center}' +
    '#msbt .b{background:#1c1d21;border:1px solid #3a3d44;border-radius:5px;padding:3px 7px;font-size:16px;font-weight:800;min-width:44px;text-align:center;font-variant-numeric:tabular-nums;color:#fff;line-height:1.3}' +
    '#msbt .b small{font-size:10px;color:#9aa0ab;font-weight:600;margin-left:2px}' +
    '#msbt .cta{color:#fff;font-weight:700;font-size:13px;border-bottom:1px solid #E3262F;padding-bottom:1px;white-space:nowrap}' +
    '@media(max-width:767px){#msbt{height:46px;gap:8px;padding:0 10px}#msbt .l,#msbt .cta{display:none}#msbt .t{font-size:11px;padding:4px 7px}#msbt .b{min-width:0;font-size:14px;padding:3px 5px}#msbt .c{gap:4px}}' +
    '@media(max-width:340px){#msbt .t{font-size:10px;padding:3px 5px}#msbt .b{font-size:13px;padding:2px 4px}#msbt .b small{font-size:9px}}';

  var st = d.createElement('style'); st.id = 'msbt-css'; st.textContent = css; d.head.appendChild(st);

  var bar = d.createElement('a');
  bar.id = 'msbt'; bar.href = LOC;
  bar.setAttribute('aria-label', 'Black Friday: ver el Kit Black Friday');
  bar.innerHTML = '<span class="t">BLACK FRIDAY</span><span class="l">Termina en</span>' +
    '<span class="c" role="timer"><span class="b" data-u="d"></span><span class="b" data-u="h"></span><span class="b" data-u="m"></span><span class="b" data-u="s"></span></span>' +
    '<span class="cta">Ver el kit · 42% OFF →</span>';

  // En las fichas que ya muestran el kit (Localizador y Tarjeta), en vez de cambiar de página, baja hasta el kit.
  bar.addEventListener('click', function (e) {
    var kit = d.getElementById('msbf');
    if (kit) { e.preventDefault(); kit.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
  });

  function cabecera() { return d.querySelector('header.js-head-main'); }
  function poner() {
    if (!d.body) return false;
    var hd = cabecera();
    if (hd) { if (hd.firstChild !== bar) hd.insertBefore(bar, hd.firstChild); }
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
    t = setTimeout(function () { var hd = cabecera(); if (html.classList.contains('msbt-on') && (!bar.parentNode || (hd && hd.firstChild !== bar))) poner(); }, 100);
  }).observe(cabecera() || d.body || html, { childList: true });
}();
/* ---- combo-os.js ---- */
/* My Search · Selector de celular (iPhone / Android) al pie del combo elegido.
   Estilos compartidos (.mso) para las fichas del Localizador y la Tarjeta; el kit Black Friday
   (kit-bf.js) arma su propio pie con estas mismas clases.
   En la ficha del Localizador reemplaza el selector de arriba («¿Qué celular tenés?») por uno al pie
   del pack elegido de Wigy. Usa los atributos data-msfx-os / data-msfx-u del script «MS Ficha Localizador v6»
   del sello, que es el que guarda la elección y la pasa a los selectores de Wigy. */
!function () {
  var d = document, H = d.documentElement;
  var esLoc = !!d.querySelector('[data-store^="product-image-334471967"]');
  var esTarj = !!d.querySelector('[data-store^="product-image-375874883"]');
  if (!esLoc && !esTarj) return;

  var IMG = {
    iPhone: 'https://d1a9qnv764bsoo.cloudfront.net/stores/007/481/104/rte/mysearch-app-findmy.png',
    Android: 'https://d1a9qnv764bsoo.cloudfront.net/stores/007/481/104/rte/mysearch-app-findhub.png'
  };
  var OS = ['iPhone', 'Android'];

  var css =
    '#msfx-os,#mspk-mix,#msfx-units,.msfx-for{display:none!important}' +
    '.mso{display:block;background:#fff;color:#13294b;font-family:Inter,sans-serif;text-align:left;white-space:normal;cursor:default;line-height:1.3}' +
    '.wigy-bundle-cantidad-producto .mso{border-top:1px solid #e6e8ee;margin:12px -14px -14px;padding:12px 14px 14px;border-radius:0 0 12px 12px}' +
    '#msbf .mso{padding:12px 14px 14px}#msbf:not(.on) .mso{display:none}' +
    '.mso .h{margin:0 0 8px;padding:0;font:700 13px Inter,sans-serif!important;color:#13294b;text-transform:none;letter-spacing:0}' +
    '.mso .h b{font-weight:700}.mso .h .t2,.mso.mix .h .t1{display:none}.mso.mix .h .t2{display:inline}' +
    '.mso .seg{display:grid;grid-template-columns:1fr 1fr;gap:8px}.mso.mix .seg{display:none}' +
    '.mso .seg span{display:flex;align-items:center;justify-content:center;gap:8px;height:46px;border:1.5px solid #d5d9e2;border-radius:10px;background:#fff;font:700 15px Inter,sans-serif;color:#13294b;cursor:pointer;-webkit-tap-highlight-color:transparent}' +
    '.mso .seg img{width:22px;height:22px}' +
    '.mso .seg span.on{background:#13294b;border-color:#13294b;color:#fff}' +
    '#msbf .mso .seg span.on,#msbf .mso .pl em.on{background:#0b0b0c;border-color:#0b0b0c;color:#fff}' +
    '.mso .uu{display:none}.mso.mix .uu{display:block}' +
    '.mso .u{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:6px 0;border-top:1px solid #f0f1f4}.mso .u:first-child{border-top:0}' +
    '.mso .u>span:first-child{font:600 13.5px Inter,sans-serif}' +
    '.mso .pl{display:inline-flex;background:#f1f3f7;border-radius:999px;padding:3px}' +
    '.mso .pl em{font:700 13px Inter,sans-serif;font-style:normal;padding:7px 14px;border-radius:999px;color:#13294b;cursor:pointer;-webkit-tap-highlight-color:transparent}' +
    '.mso .pl em.on{background:#13294b;color:#fff}' +
    '.mso .mix{display:inline-block;margin-top:10px;font:600 12.5px Inter,sans-serif;color:#13294b;text-decoration:underline;cursor:pointer}' +
    '.mso .mix .m2,.mso.mix .mix .m1{display:none}.mso.mix .mix .m2{display:inline}' +
    '.mso.err{box-shadow:inset 0 0 0 2px #E3262F}' +
    '@media(max-width:360px){.mso .pl em{padding:6px 11px}.mso .seg span{font-size:14px}}';
  var st = d.createElement('style'); st.id = 'mso-css'; st.textContent = css; d.head.appendChild(st);

  /* Arma el pie. a = atributo para "todos" (p. ej. data-msfx-os), u = atributo por unidad (data-msfx-u).
     oss = sistema de cada localizador ("iPhone"/"Android"/null). */
  window.msoHTML = function (n, oss, a, u, mix) {
    var todos = oss.every(function (x) { return x && x === oss[0]; }) ? oss[0] : null;
    var h = '<p class="h"><span class="t1">¿Para qué tipo de celular buscás el localizador?</span><span class="t2">¿Para qué celular es cada uno?</span></p>' +
      '<div class="seg">' + OS.map(function (o) {
        return '<span role="button" tabindex="0" ' + a + '="' + o + '" class="' + (todos === o ? 'on' : '') + '"><img src="' + IMG[o] + '" alt="">' + o + '</span>';
      }).join('') + '</div>';
    if (n > 1) {
      h += '<div class="uu">';
      for (var i = 0; i < n; i++) {
        h += '<div class="u"><span>Localizador ' + (i + 1) + '</span><span class="pl">' + OS.map(function (o) {
          return '<em role="button" tabindex="0" ' + u + '="' + i + '" data-o="' + o + '" class="' + (oss[i] === o ? 'on' : '') + '">' + o + '</em>';
        }).join('') + '</span></div>';
      }
      h += '</div><a class="mix" role="button" tabindex="0"><span class="m1">¿En casa hay iPhone y Android? Elegí uno por uno ›</span><span class="m2">‹ Mismo celular para todos</span></a>';
    }
    return h;
  };

  d.addEventListener('keydown', function (e) {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.closest && e.target.closest('.mso [role=button]')) { e.preventDefault(); e.target.click(); }
  });

  if (!esLoc) return;

  /* ---- Ficha del Localizador: pie de los packs de Wigy ---- */
  var mix = false, firma = '';
  function selects() { return [].slice.call(d.querySelectorAll('select[name^="dc_dim_334471967"]')); }
  function estado() { return selects().map(function (s) { return s.value === 'iOS' ? 'iPhone' : s.value === 'Android' ? 'Android' : null; }); }
  function pintar() {
    var viejo = d.querySelector('.wigy-bundle-cantidad-producto .mso');
    var card = H.classList.contains('msbf-on') ? null : d.querySelector('.wigy-bundle-cantidad-producto.wigy-selected');
    if (!card) { if (viejo) viejo.remove(); firma = ''; return; }
    var oss = estado(), n = Math.max(oss.length, 1);
    if (n < 2) mix = false;
    var f = n + '|' + oss.join(',') + '|' + mix;
    var pie = card.querySelector('.mso');
    if (viejo && viejo !== pie) viejo.remove();
    if (pie && f === firma) return;
    if (!pie) { pie = d.createElement('div'); pie.className = 'mso'; pie.addEventListener('click', tocar); }
    pie.classList.toggle('mix', mix);
    pie.innerHTML = window.msoHTML(n, oss, 'data-msfx-os', 'data-msfx-u', mix);
    if (pie.parentNode !== card) card.appendChild(pie);
    firma = f;
  }
  // Toques dentro del pie: el script v6 del sello ya guardó la elección (escucha en captura);
  // acá se corta el clic para que no vuelva a elegir el pack, y se repinta.
  function tocar(e) {
    e.stopPropagation(); e.preventDefault();
    if (e.target.closest('.mix')) mix = !mix;
    firma = ''; setTimeout(pintar, 20);
  }
  d.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('.wigy-bundle-cantidad,#msbf')) { setTimeout(pintar, 120); setTimeout(pintar, 500); }
  }, true);
  setInterval(pintar, 700);
  // Si nadie eligió todavía, arranca en Android (como hasta ahora).
  function iniciar() {
    if (!d.querySelector('#msfx-os [data-msfx-os].on')) {
      var b = d.querySelector('#msfx-os [data-msfx-os="Android"]'); if (b) b.click();
    }
    pintar();
  }
  var t;
  new MutationObserver(function () { clearTimeout(t); t = setTimeout(pintar, 120); })
    .observe(d.body, { childList: true, subtree: true });
  setTimeout(iniciar, 300);
  iniciar();
}();

/* ---- kit-bf.js ---- */
/* My Search · "Kit Black Friday" como opción elegible dentro del selector de packs
   de las fichas del Localizador y la Tarjeta. Viene elegido de entrada; con él elegido,
   "Agregar al carrito" carga los productos por separado (3 localizadores, 1 tarjeta y 2 Key Tag negros)
   y lleva al carrito. El precio del kit sale de dos descuentos: el 3x2 de Wigy en localizadores y la
   promoción de Tiendanube "Black Friday kit" ($39.510 fijos solo sobre la "Tarjeta Localizadora MySearch (Kit Black Friday)", carrito desde $173.500).
   Se muestra solo del 25/11/2026 al 01/12/2026 00:00 (hora Argentina).
   Para verlo fuera de fecha: ?msbf=1 en la URL de la ficha (queda guardado en ese navegador; ?msbf=0 lo apaga). */
!function () {
  var d = document, H = d.documentElement, IDS = ['334471967', '375874883'];
  var P_LOC = '334471967', P_TARJ = '375874883', P_KT = '334472124';
  // Tarjeta exclusiva del kit (sin listar): la promo "Black Friday kit" aplica solo a este producto.
  var P_TARJ_KIT = '383743858';
  var DESDE = Date.parse('2026-11-25T00:00:00-03:00'), HASTA = Date.parse('2026-12-01T00:00:00-03:00');
  var q = location.search.match(/[?&]msbf=([01])/);
  try { if (q) localStorage.setItem('msbf', q[1]); } catch (e) {}
  var forzado = false;
  try { forzado = localStorage.getItem('msbf') === '1'; } catch (e) {}
  var ahora = Date.now();
  if (!forzado && (ahora < DESDE || ahora >= HASTA)) return;
  if (!IDS.some(function (id) { return d.querySelector('[data-store^="product-image-' + id + '"]'); })) return;
  var esTarjeta = !!d.querySelector('[data-store^="product-image-375874883"]');

  var IMG_LOC3 = 'https://wigy.nyc3.digitaloceanspaces.com/images/widgets/store_1301_Wja2pv8yGTFQK7kyiDza_1793132085.webp';
  var IMG_TARJ = 'https://wigy.nyc3.digitaloceanspaces.com/images/widgets/store_1301_QKNwJfJZctGhiyu5JMS1_1793132207.webp';
  var IMG_KT = 'https://d1a9qnv764bsoo.cloudfront.net/stores/007/481/104/rte/ms-th-keytag.jpg';
  var R = '#E3262F', R2 = '#FF5A5F';
  var estado = { on: true, oss: ['Android', 'Android', 'Android'], mix: false, tocado: false };

  var S = '#msbf.mbf';
  var css = '' +
    S + '{display:block;position:relative;margin:0 0 10px;border:2px solid #3a2224;border-radius:14px;overflow:hidden;background:#0b0b0c;color:#fff;cursor:pointer;font-family:Inter,sans-serif;text-align:left;-webkit-tap-highlight-color:transparent}' +
    S + '.on{border-color:' + R + ';box-shadow:0 6px 18px rgba(227,38,47,.25)}' +
    S + ' .mbf-band{display:flex;justify-content:space-between;align-items:center;gap:6px;background:' + R + ';padding:7px 10px;white-space:nowrap}' +
    S + ' .mbf-band b{font:800 11px Inter,sans-serif;letter-spacing:.6px}' +
    S + ' .mbf-band span{display:flex;gap:4px}' +
    S + ' .mbf-band em{font:800 9.5px Inter,sans-serif;font-style:normal;background:#0b0b0c;color:#fff;border-radius:99px;padding:3px 6px;letter-spacing:.1px}' +
    S + ' .mbf-in{display:flex;gap:9px;padding:12px 12px 13px;align-items:center}' +
    S + ' .mbf-rd{flex:none;width:20px;height:20px;border-radius:50%;border:1.5px solid #6b6f78;background:transparent;display:flex;align-items:center;justify-content:center}' +
    S + '.on .mbf-rd{border-color:' + R + '}' +
    S + '.on .mbf-rd:after{content:"";width:10px;height:10px;border-radius:50%;background:' + R + '}' +
    S + ' .mbf-l{flex:1;min-width:0}' +
    S + ' .mbf-l p{margin:0;font:700 14px "Plus Jakarta Sans",Inter,sans-serif;line-height:1.35;color:#fff}' +
    S + ' .mbf-l small{display:block;margin:4px 0 8px;color:' + R2 + ';font:700 12px Inter,sans-serif}' +
    S + ' .mbf-th{display:flex;align-items:center;flex-wrap:nowrap}' +
    S + ' .mbf-th i{display:block;flex:none;position:relative;overflow:hidden;width:36px;height:32px;border-radius:9px;border:1px solid #2a2c31;background:#fff center/contain no-repeat}' +
    S + ' .mbf-th b{color:#fff;margin:0 2px;font-size:12px}' +
    S + ' .mbf-th i span{position:absolute;top:0;width:32px;height:32px;background:url(' + IMG_KT + ') center/contain no-repeat;mix-blend-mode:multiply}' +
    S + ' .mbf-r{flex:none;text-align:right;line-height:1.15}' +
    S + ' .mbf-r small{display:block;font:500 11px Inter,sans-serif;color:#b9bdc6;margin-bottom:2px}' +
    S + ' .mbf-r strong{display:block;font:800 20px "Plus Jakarta Sans",sans-serif;color:#fff}' +
    S + ' .mbf-r s{display:block;text-decoration:none;font:500 11px Inter,sans-serif;color:#9aa0ab;margin-top:3px}' +
    S + ' .mbf-r u{display:block;text-decoration:none;margin:4px 0 5px;color:' + R2 + ';font:700 11.5px Inter,sans-serif;line-height:1.25}' +
    S + ' .mbf-r em{display:inline-block;font:800 11px Inter,sans-serif;font-style:normal;background:' + R + ';color:#fff;border-radius:99px;padding:3px 8px}' +
    '@media (max-width:374px){' + S + ' .mbf-band em:last-child{display:none}' + S + ' .mbf-in{gap:7px;padding:11px 9px 12px}' + S + ' .mbf-l p{font-size:13px}' + S + ' .mbf-l small{font-size:11px}' + S + ' .mbf-th{display:none}' + S + ' .mbf-l small{margin-bottom:0}' + S + ' .mbf-r strong{font-size:18px}}' +
    'html.msbf-on .wigy-bundle-cantidad-producto.wigy-selected{border-color:#ddd!important}' +
    'html.msbf-on .wigy-bundle-cantidad-radio.wigy-checked{border-color:#ccc!important}' +
    'html.msbf-on .wigy-bundle-cantidad-radio-dot{display:none!important}' +
    'html.msbf-on.msbf-on .wigy-widget-bundle-cantidad .wigy-bundle-cantidad-boton::after{content:" · $120.636"!important}';

  var html = '<div class="mbf" id="msbf" role="radio" tabindex="0">' +
    '<div class="mbf-band"><b>KIT BLACK FRIDAY</b><span><em>3 CUOTAS SIN INTERÉS</em><em>ENVÍO GRATIS</em></span></div>' +
    '<div class="mbf-in"><i class="mbf-rd"></i><div class="mbf-l">' +
    '<p>3 localizadores<br>+ 1 tarjeta<br>+ 2 Key Tag</p>' +
    '<small>Solo válido hasta el 30/11</small>' +
    '<div class="mbf-th"><i style="background-image:url(' + IMG_LOC3 + ')"></i><b>+</b><i style="background-image:url(' + IMG_TARJ + ')"></i><b>+</b><i><span style="left:-6px"></span><span style="left:9px"></span></i></div>' +
    '</div><div class="mbf-r">' +
    '<small>por transferencia</small><strong>$120.636</strong><s>$134.040 con tarjeta</s>' +
    '<u>3 cuotas sin interés<br>de $44.680</u><em>Ahorrás $88.964 · 42%</em>' +
    '</div></div>' +
    '<div class="mso"></div></div>';

  var st = d.createElement('style'); st.id = 'msbf-css'; st.textContent = css; d.head.appendChild(st);

  // Sistema de cada uno de los 3 localizadores: el elegido al pie del kit (todos iguales o uno por uno).
  function sistemas() {
    return estado.oss.map(function (o) { return o === 'iPhone' ? 'iOS' : 'Android'; });
  }
  // En el Localizador, si todavía no se tocó el pie del kit, arranca con lo elegido en los packs de Wigy.
  function desdeWigy() {
    if (esTarjeta || estado.tocado) return;
    var v = [].map.call(d.querySelectorAll('select[name^="dc_dim_334471967"]'), function (s) { return s.value === 'iOS' ? 'iPhone' : 'Android'; });
    if (v.length && v.every(function (x) { return x === v[0]; })) estado.oss = [v[0], v[0], v[0]];
  }
  function pie() {
    var m = d.querySelector('#msbf .mso');
    if (!m || !window.msoHTML) return;
    m.classList.toggle('mix', estado.mix);
    var h = window.msoHTML(3, estado.oss, 'data-k-os', 'data-k-u');
    if (m.getAttribute('data-h') !== h) { m.innerHTML = h; m.setAttribute('data-h', h); }
  }
  function pintar() {
    var c = d.getElementById('msbf');
    H.classList.toggle('msbf-on', estado.on);
    if (!c) return;
    c.classList.toggle('on', estado.on);
    c.setAttribute('aria-checked', estado.on ? 'true' : 'false');
    pie();
  }
  function sumar(prod, opcion, cant) {
    var fd = new FormData();
    fd.append('add_to_cart', prod);
    if (opcion) fd.append('variation[0]', opcion);
    fd.append('quantity', String(cant));
    return fetch('/comprar/', { method: 'POST', body: fd, credentials: 'same-origin' }).catch(function () {});
  }
  function agregarKit(btn) {
    if (btn) { btn.disabled = true; btn.style.opacity = '.7'; }
    var cuenta = {};
    sistemas().forEach(function (os) { cuenta[os] = (cuenta[os] || 0) + 1; });
    var pasos = Object.keys(cuenta).map(function (os) { return [P_LOC, os, cuenta[os]]; })
      .concat([[P_TARJ_KIT, null, 1], [P_KT, 'Negro', 2]]);
    var p = Promise.resolve();
    pasos.forEach(function (x) { p = p.then(function () { return sumar(x[0], x[1], x[2]); }); });
    p.then(function () { location.href = '/comprar/'; });
  }

  d.addEventListener('click', function (e) {
    var t = e.target;
    var c = t.closest && t.closest('#msbf');
    if (c) {
      var o = t.closest('[data-k-os]'), u = t.closest('[data-k-u]'), mx = t.closest('.mso .mix');
      if (o) {
        var os = o.getAttribute('data-k-os');
        estado.oss = [os, os, os]; estado.tocado = true;
        // En el Localizador, que los packs de Wigy queden con el mismo celular.
        var w = d.querySelector('#msfx-os [data-msfx-os="' + os + '"]'); if (w) w.click();
      } else if (u) {
        estado.oss[+u.getAttribute('data-k-u')] = u.getAttribute('data-o'); estado.tocado = true;
      } else if (mx) {
        e.preventDefault(); estado.mix = !estado.mix;
      } else if (!estado.on) desdeWigy();
      estado.on = true; pintar(); return;
    }
    if (estado.on && t.closest && t.closest('.wigy-widget-bundle-cantidad .wigy-bundle-cantidad-boton')) {
      e.preventDefault(); e.stopImmediatePropagation();
      agregarKit(t.closest('.wigy-bundle-cantidad-boton')); return;
    }
    if (t.closest && t.closest('.wigy-bundle-cantidad-producto')) { estado.on = false; pintar(); }
  }, true);
  d.addEventListener('keydown', function (e) {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.id === 'msbf') { e.preventDefault(); estado.on = true; pintar(); }
  });

  function poner() {
    if (d.getElementById('msbf')) return;
    var cards = d.querySelectorAll('.wigy-widget-bundle-cantidad .wigy-bundle-cantidad');
    var ult = cards[cards.length - 1];
    if (ult && ult.parentNode) { ult.insertAdjacentHTML('afterend', html); pintar(); }
  }
  var t;
  new MutationObserver(function () {
    if (d.getElementById('msbf')) return;
    clearTimeout(t); t = setTimeout(poner, 60);
  }).observe(d.body, { childList: true, subtree: true });
  pintar(); poner();
}();
/* ---- pack3-tarjeta.js ---- */
/* My Search · Pack de 3 tarjetas como kit nativo de Tiendanube (desde el 26/11/2026).
   En la ficha de la Tarjeta, con "Lleva 3" elegido en el bundle de Wigy (197758), "Agregar al carrito"
   agrega el kit nativo "Pack 3 Tarjetas Localizadoras MySearch" (producto 383780051: 3 tarjetas, 23% sobre
   el precio promocional = $138.369) en lugar de 3 tarjetas sueltas, más los complementarios tildados (cargador).
   Así el descuento es solo del pack: 4 tarjetas = pack + 1 suelta.
   La promo automática de Wigy en la tarjeta está apagada: el precio lo pone el kit.
   Con el Kit Black Friday elegido (html.msbf-on) no hace nada: lo maneja kit-bf.js. */
!function () {
  var d = document, H = d.documentElement;
  if (!d.querySelector('[data-store^="product-image-375874883"]')) return;
  var KIT = '383780051', COMP = 71589, TARJ_V = 1624006946;
  // Complementarios del bundle de la tarjeta: título → producto.
  var EXTRA = [[/cargador/i, '375890360']];

  function post(campos) {
    var f = new FormData();
    campos.forEach(function (c) { f.append(c[0], c[1]); });
    return fetch('/comprar/', { method: 'POST', body: f, credentials: 'same-origin' }).catch(function () {});
  }

  d.addEventListener('click', function (e) {
    var t = e.target;
    var btn = t.closest && t.closest('.wigy-widget-bundle-cantidad .wigy-bundle-cantidad-boton');
    if (!btn || H.classList.contains('msbf-on')) return;
    var card = d.querySelector('.wigy-bundle-cantidad-producto.wigy-selected');
    var tx = card ? (card.innerText || card.textContent || '').replace(/\s+/g, ' ') : '';
    if (+((tx.match(/Lleva (\d+)/) || [])[1] || 1) !== 3) return;
    e.preventDefault(); e.stopImmediatePropagation();
    btn.disabled = true; btn.style.opacity = '.7';
    var pasos = [[['add_to_cart', KIT],
      ['kit_selections', JSON.stringify([{ kit_component_id: COMP, variant_id: TARJ_V, quantity: 3 }])],
      ['quantity', '1']]];
    [].forEach.call(card.querySelectorAll('.wigy-complementary-check.wigy-checked'), function (ck) {
      var w = ck.closest('.wigy-complementary-product') || ck.parentNode;
      var ti = ((w && w.querySelector('.wigy-complementary-title')) || {}).textContent || '';
      EXTRA.forEach(function (x) { if (x[0].test(ti)) pasos.push([['add_to_cart', x[1]], ['quantity', '1']]); });
    });
    var p = Promise.resolve();
    pasos.forEach(function (c) { p = p.then(function () { return post(c); }); });
    p.then(function () { location.href = '/comprar/'; });
  }, true);
}();

/* ---- barra-compra.js ---- */
/* My Search · Barra de compra fija abajo, en celular, en las fichas del Localizador y la Tarjeta.
   Muestra lo que está elegido (pack de Wigy o Kit Black Friday) con su precio por transferencia, y el botón
   «Agregar al carrito» toca el botón principal del pack, así que la compra sigue el mismo camino.
   Reemplaza a la barra vieja del Localizador (#msl-bar). Se oculta con el carrito o el menú abiertos.
   También suma al total los productos complementarios tildados en el pack (p. ej. el cargador en la Tarjeta):
   en la barra y en el botón «Agregar al carrito · $X», que Wigy no actualiza. */
!function () {
  var d = document, H = d.documentElement;
  var esLoc = !!d.querySelector('[data-store^="product-image-334471967"]');
  var esTarj = !!d.querySelector('[data-store^="product-image-375874883"]');
  if (!esLoc && !esTarj) return;

  var css =
    'html:not(.msbf-on) .wigy-widget-bundle-cantidad .wigy-bundle-cantidad-boton[data-ms-tot]::after{content:" · " attr(data-ms-tot)!important}' +
    '#msl-bar{display:none!important}#msbar{display:none}' +
    '@media(max-width:767px){' +
    '#msbar{position:fixed;left:0;right:0;bottom:0;z-index:1000;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 16px calc(12px + env(safe-area-inset-bottom,0px));background:#faf8f3;border-top:2px solid #13294b;box-shadow:0 -6px 20px rgba(19,41,75,.08);font-family:Inter,sans-serif;box-sizing:border-box}' +
    '#msbar.k{background:#0b0b0c;border-top-color:#E3262F}' +
    '#msbar>div{min-width:0}' +
    '#msbar small{display:block;font:700 12px Inter,sans-serif;color:#13294b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#msbar.k small{color:#fff}' +
    '#msbar small i{font-style:normal;background:#E3262F;color:#fff;border-radius:4px;padding:2px 5px;font-size:10px;letter-spacing:.04em;margin-right:4px}' +
    '#msbar b{display:flex;align-items:center;gap:7px;margin-top:3px;font:800 20px "Plus Jakarta Sans",Inter,sans-serif;color:#13294b;white-space:nowrap}#msbar.k b{color:#fff}' +
    '#msbar b em{font:800 10px Inter,sans-serif;font-style:normal;background:#cfe05a;color:#13294b;border-radius:999px;padding:3px 7px}#msbar.k b em{background:#E3262F;color:#fff}' +
    '#msbar a{flex:none;display:flex;align-items:center;height:48px;padding:0 16px;border-radius:14px;background:#13294b;color:#fff;font:700 15px Inter,sans-serif;text-decoration:none;white-space:nowrap}#msbar.k a{background:#E3262F}' +
    'body.overflow-none #msbar{display:none}' +
    'body{padding-bottom:84px}.btn-whatsapp{bottom:96px!important}' +
    '}' +
    '@media(max-width:374px){#msbar{gap:8px;padding-left:12px;padding-right:12px}#msbar b{font-size:18px}#msbar a{padding:0 12px;font-size:14px}}';
  var st = d.createElement('style'); st.id = 'msbar-css'; st.textContent = css; d.head.appendChild(st);

  var bar = d.createElement('div'); bar.id = 'msbar';
  bar.innerHTML = '<div><small></small><b></b></div><a href="#" role="button">Agregar al carrito</a>';
  var sm = bar.querySelector('small'), pr = bar.querySelector('b');

  function principal() { return d.querySelector('.wigy-widget-bundle-cantidad .wigy-bundle-cantidad-boton'); }
  function os() {
    var v = [].map.call(d.querySelectorAll('select[name^="dc_dim_334471967"]'), function (s) { return s.value === 'iOS' ? 'iPhone' : 'Android'; });
    if (!v.length) return '';
    return v.every(function (x) { return x === v[0]; }) ? v[0] : 'iPhone y Android';
  }
  function num(t) { var m = (t || '').match(/\$\s*([\d.]+)/); return m ? +m[1].replace(/\./g, '') : 0; }
  function plata(n) { return '$' + Math.round(n).toLocaleString('es-AR'); }
  // Complementarios tildados en el pack: precio y nombre corto ("cargador").
  function extras(card) {
    var tot = 0, nombres = [];
    [].forEach.call(card.querySelectorAll('.wigy-complementary-check.wigy-checked'), function (ck) {
      var w = ck.closest('.wigy-complementary-product') || ck.parentNode;
      var p = w && w.querySelector('.wigy-price-promo');
      var t = w && w.querySelector('.wigy-complementary-title');
      if (p) { tot += num(p.textContent); nombres.push(((t && t.textContent) || 'extra').trim().split(/\s+/)[0].toLowerCase()); }
    });
    return { tot: tot, nombres: nombres };
  }
  function boton(valor) {
    var btn = principal(); if (!btn) return;
    if (valor) { if (btn.getAttribute('data-ms-tot') !== valor) btn.setAttribute('data-ms-tot', valor); }
    else if (btn.hasAttribute('data-ms-tot')) btn.removeAttribute('data-ms-tot');
  }
  var antes = '';
  function pintar() {
    if (!bar.parentNode && d.body) d.body.appendChild(bar);
    var kit = H.classList.contains('msbf-on'), cl = '', a, b;
    if (kit) {
      boton('');
      cl = 'k'; a = '<i>BLACK FRIDAY</i>Kit completo'; b = '$120.636<em>42% OFF</em>';
    } else {
      var card = d.querySelector('.wigy-bundle-cantidad-producto.wigy-selected');
      if (!card) { bar.style.display = 'none'; boton(''); return; }
      var tx = (card.innerText || card.textContent).replace(/\s+/g, ' ');
      var n = +((tx.match(/Lleva (\d+)/) || [])[1] || 1);
      var p = (tx.match(/por transferencia\s*\$\s*([\d.]+)/) || [])[1];
      var nombre = esLoc ? (n === 1 ? '1 localizador' : n + ' localizadores') : (n === 1 ? '1 tarjeta' : n + ' tarjetas');
      var o = esLoc ? os() : '';
      // Total por transferencia: el del pack más los complementarios tildados con el 10% de transferencia.
      var ex = extras(card), tr = p ? +p.replace(/\./g, '') + ex.tot * 0.9 : 0;
      boton(ex.tot && tr ? plata(tr) : '');
      a = nombre + (ex.nombres.length ? ' + ' + ex.nombres.join(' + ') : '') + (o ? ' · ' + o : '');
      b = tr ? plata(tr) + (n > 1 && /ENV[IÍ]O GRATIS/i.test(tx) ? '<em>ENVÍO GRATIS</em>' : '') : '';
    }
    bar.style.display = '';
    var f = cl + a + b;
    if (f === antes) return;
    antes = f; bar.className = cl; sm.innerHTML = a; pr.innerHTML = b;
  }
  bar.querySelector('a').addEventListener('click', function (e) {
    e.preventDefault();
    var btn = principal(); if (btn) btn.click();
  });
  // En captura: Wigy corta la propagación de los clics en sus packs.
  d.addEventListener('click', function () { setTimeout(pintar, 150); setTimeout(pintar, 600); }, true);
  setInterval(pintar, 700);
  d.addEventListener('change', function () { setTimeout(pintar, 50); });
  var t;
  new MutationObserver(function () { clearTimeout(t); t = setTimeout(pintar, 200); })
    .observe(d.body, { childList: true, subtree: true });
  pintar();
}();

/* ---- videos-arriba.js ---- */
/* My Search · Ficha del Localizador: sube el slider de videos "Así lo usan" (Wigy) abajo de la reseña escrita.
   El SDK de Tiendanube escribe los estilos del widget atados al contenedor original
   (#nube-sdk-slot-after_product_detail_shipping_options), así que se copian esas reglas
   al contenedor nuevo (#msvid) antes de mover el bloque. */
!function () {
  var d = document, SLOT = '#nube-sdk-slot-after_product_detail_shipping_options';
  if (!d.querySelector('[data-store^="product-image-334471967"]')) return;
  var hechas = {}, st;

  function copiarReglas() {
    if (!st) { st = d.createElement('style'); st.id = 'msvid-css'; d.head.appendChild(st); }
    var nuevas = '';
    function recorrer(lista, envolver) {
      for (var i = 0; i < lista.length; i++) {
        var r = lista[i];
        if (r.cssRules && r.media) { recorrer(r.cssRules, '@media ' + r.media.mediaText); continue; }
        var t = r.cssText;
        if (!t || t.indexOf(SLOT) < 0) continue;
        var k = (envolver || '') + t;
        if (hechas[k]) continue;
        hechas[k] = 1;
        var c = t.split(SLOT).join('#msvid');
        nuevas += envolver ? envolver + '{' + c + '}' : c;
      }
    }
    [].forEach.call(d.styleSheets, function (s) {
      if (s.ownerNode === st) return;
      try { recorrer(s.cssRules, ''); } catch (e) {}
    });
    if (nuevas) st.appendChild(d.createTextNode(nuevas));
  }

  function slider() {
    return [].filter.call(d.querySelectorAll(SLOT + ' .nube-column'), function (c) {
      var p = c.querySelector(':scope > .nube-column > p.nube-text');
      return p && p.textContent.trim() === 'Así lo usan';
    })[0];
  }

  function mover() {
    var rv = d.querySelector('#msl-after .msl-rv');
    var col = slider();
    if (!rv || !col) return;
    copiarReglas();
    var box = d.getElementById('msvid');
    if (!box) { box = d.createElement('div'); box.id = 'msvid'; }
    if (rv.nextSibling !== box) rv.parentNode.insertBefore(box, rv.nextSibling);
    while (box.firstChild) box.removeChild(box.firstChild);
    box.appendChild(col);
  }

  var t;
  new MutationObserver(function () {
    clearTimeout(t);
    t = setTimeout(function () { copiarReglas(); if (slider()) mover(); }, 80);
  }).observe(d.documentElement, { childList: true, subtree: true });
  mover();
}();
