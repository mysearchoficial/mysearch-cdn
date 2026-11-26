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
    // Abre el carrito lateral con todo cargado (carrito-lateral.js). Si no está, va a /comprar/ como antes.
    if (window.msCarrito) {
      window.msCarrito(pasos.map(function (x) {
        var c = [['add_to_cart', x[0]]]; if (x[1]) c.push(['variation[0]', x[1]]); c.push(['quantity', String(x[2])]); return c;
      })).then(function () { if (btn) { btn.disabled = false; btn.style.opacity = ''; } });
      return;
    }
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