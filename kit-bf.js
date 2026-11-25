/* My Search · "Kit Black Friday" como opción elegible dentro del selector de packs
   de las fichas del Localizador y la Tarjeta. Viene elegido de entrada; con él elegido,
   "Agregar al carrito" agrega el kit (producto 383428345) y lleva al carrito.
   Se muestra solo del 25/11/2026 al 01/12/2026 00:00 (hora Argentina).
   Para verlo fuera de fecha: ?msbf=1 en la URL de la ficha (queda guardado en ese navegador; ?msbf=0 lo apaga). */
!function () {
  var d = document, H = d.documentElement, IDS = ['334471967', '375874883'];
  var KIT = '383428345';
  var LOC = { Android: 1487369397, iOS: 1487369385 }, TARJ_V = 1624006946, KT = { Azul: 1498900173, Negro: 1498900176 };
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
  var estado = { on: true, os: null, kt: 'Negro' };

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
    S + ' .mbf-op{display:none;border-top:1px solid #24262b;padding:9px 12px 11px 41px}' +
    S + '.on .mbf-op{display:block}' +
    S + ' .mbf-op div{display:flex;align-items:center;gap:6px;margin:3px 0}' +
    S + ' .mbf-op label{flex:none;width:62px;font:600 11.5px Inter,sans-serif;color:#b9bdc6}' +
    S + ' .mbf-op button{font:700 12px Inter,sans-serif;color:#fff;background:#17181b;border:1px solid #3a3d44;border-radius:99px;padding:5px 12px;cursor:pointer;line-height:1}' +
    S + ' .mbf-op button.on{background:#fff;color:#0b0b0c;border-color:#fff}' +
    S + ' .mbf-op p{display:none;margin:4px 0 0;font:700 11.5px Inter,sans-serif;color:' + R2 + '}' +
    S + '.falta .mbf-op p{display:block}' +
    S + '.falta [data-os]{border-color:' + R2 + '}' +
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
    '<div class="mbf-op">' +
    (esTarjeta ? '<div><label>Celular</label><button type="button" data-os="iOS">iPhone</button><button type="button" data-os="Android">Android</button></div>' : '') +
    '<div><label>Key Tag</label><button type="button" data-kt="Negro">Negro</button><button type="button" data-kt="Azul">Azul</button></div>' +
    (esTarjeta ? '<p>Elegí tu celular para los localizadores</p>' : '') +
    '</div></div>';

  var st = d.createElement('style'); st.id = 'msbf-css'; st.textContent = css; d.head.appendChild(st);

  function osActual() {
    if (estado.os) return estado.os;
    var s = d.querySelector('.wigy-widget-bundle-cantidad select');
    return s && s.value === 'iOS' ? 'iOS' : 'Android';
  }
  function pintar() {
    var c = d.getElementById('msbf');
    H.classList.toggle('msbf-on', estado.on);
    if (!c) return;
    c.classList.toggle('on', estado.on);
    c.setAttribute('aria-checked', estado.on ? 'true' : 'false');
    [].forEach.call(c.querySelectorAll('[data-os]'), function (b) { b.classList.toggle('on', b.getAttribute('data-os') === estado.os); });
    [].forEach.call(c.querySelectorAll('[data-kt]'), function (b) { b.classList.toggle('on', b.getAttribute('data-kt') === estado.kt); });
  }
  function agregarKit(btn) {
    var c = d.getElementById('msbf');
    if (esTarjeta && !estado.os) {
      if (c) { c.classList.add('falta'); c.scrollIntoView({ block: 'center', behavior: 'smooth' }); }
      return;
    }
    var os = osActual();
    var sel = [
      { kit_component_id: 69475, variant_id: LOC[os], quantity: 3 },
      { kit_component_id: 69476, variant_id: TARJ_V, quantity: 1 },
      { kit_component_id: 69477, variant_id: KT[estado.kt], quantity: 2 }
    ];
    if (btn) { btn.disabled = true; btn.style.opacity = '.7'; }
    var f = d.createElement('form');
    f.method = 'post'; f.action = '/comprar/'; f.style.display = 'none';
    [['add_to_cart', KIT], ['kit_selections', JSON.stringify(sel)], ['quantity', '1']].forEach(function (p) {
      var i = d.createElement('input'); i.type = 'hidden'; i.name = p[0]; i.value = p[1]; f.appendChild(i);
    });
    d.body.appendChild(f); f.submit();
  }

  d.addEventListener('click', function (e) {
    var t = e.target;
    var c = t.closest && t.closest('#msbf');
    if (c) {
      var o = t.closest('[data-os]'), k = t.closest('[data-kt]');
      if (o) { estado.os = o.getAttribute('data-os'); c.classList.remove('falta'); }
      if (k) estado.kt = k.getAttribute('data-kt');
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
