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
    '.mso .h{margin:0 0 8px;font:700 13px Inter,sans-serif;color:#13294b}' +
    '.mso .h b{font-weight:700}.mso .h .h2,.mso.mix .h .h1{display:none}.mso.mix .h .h2{display:inline}' +
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
    var h = '<p class="h"><span class="h1">¿Qué celular tenés?</span><span class="h2">¿Para qué celular es cada uno?</span></p>' +
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
  });
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
