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
