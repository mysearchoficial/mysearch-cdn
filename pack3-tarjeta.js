/* My Search · Pack de 3 tarjetas como kit nativo de Tiendanube (desde el 26/11/2026).
   En la ficha de la Tarjeta, con "Lleva 3" elegido en el bundle de Wigy (197758), "Agregar al carrito"
   agrega el kit nativo "Pack 3 Tarjetas Localizadoras MySearch" (producto 383780051: 3 tarjetas, 23% sobre
   el precio promocional = $138.369) en lugar de 3 tarjetas sueltas, más los complementarios tildados (cargador).
   Así el descuento es solo del pack: 4 tarjetas = pack + 1 suelta. Después abre el carrito lateral.
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
    // Abre el carrito lateral con el pack (carrito-lateral.js). Si no está, va a /comprar/ como antes.
    if (window.msCarrito) {
      window.msCarrito(pasos).then(function () { btn.disabled = false; btn.style.opacity = ''; });
      return;
    }
    var p = Promise.resolve();
    pasos.forEach(function (c) { p = p.then(function () { return post(c); }); });
    p.then(function () { location.href = '/comprar/'; });
  }, true);
}();
