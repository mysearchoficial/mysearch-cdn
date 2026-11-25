/* My Search · Pestaña "Kit Black Friday" en las fichas del Localizador y la Tarjeta.
   Se muestra sola del 27/11/2026 00:00 al 01/12/2026 00:00 (hora Argentina).
   Para verla antes: agregar ?msbf=1 a la URL de la ficha (queda guardado en ese navegador; ?msbf=0 lo apaga). */
!function () {
  var d = document, IDS = ['334471967', '375874883'];
  var URL_KIT = '/productos/kit-black-friday/';
  var DESDE = Date.parse('2026-11-27T00:00:00-03:00'), HASTA = Date.parse('2026-12-01T00:00:00-03:00');
  var q = location.search.match(/[?&]msbf=([01])/);
  try { if (q) localStorage.setItem('msbf', q[1]); } catch (e) {}
  var forzado = false;
  try { forzado = localStorage.getItem('msbf') === '1'; } catch (e) {}
  var ahora = Date.now();
  if (!forzado && (ahora < DESDE || ahora >= HASTA)) return;
  if (!IDS.some(function (id) { return d.querySelector('[data-store^="product-image-' + id + '"]'); })) return;

  var LOC3 = 'https://wigy.nyc3.digitaloceanspaces.com/images/widgets/store_1301_Wja2pv8yGTFQK7kyiDza_1793132085.webp';
  var TARJ = 'https://wigy.nyc3.digitaloceanspaces.com/images/widgets/store_1301_QKNwJfJZctGhiyu5JMS1_1793132207.webp';
  var KT = 'https://d1a9qnv764bsoo.cloudfront.net/stores/007/481/104/rte/ms-th-keytag.jpg';
  var R = '#E3262F', R2 = '#FF5A5F';

  var css = '' +
    '.msbf{display:block;position:relative;margin:0 0 10px;border:2px solid ' + R + ';border-radius:14px;overflow:hidden;background:#0b0b0c;color:#fff;text-decoration:none!important;box-shadow:0 6px 18px rgba(227,38,47,.22);font-family:Inter,sans-serif}' +
    '.msbf:hover{color:#fff}' +
    '.msbf-band{display:flex;justify-content:space-between;align-items:center;gap:6px;background:' + R + ';padding:7px 10px;white-space:nowrap}' +
    '.msbf-band b{font:800 11px Inter,sans-serif;letter-spacing:.6px}' +
    '.msbf-band span{display:flex;gap:4px}' +
    '.msbf-band em{font:800 9.5px Inter,sans-serif;font-style:normal;background:#0b0b0c;color:#fff;border-radius:99px;padding:3px 6px;letter-spacing:.1px}' +
    '.msbf-in{display:flex;gap:10px;padding:12px 14px 14px;align-items:center}' +
    '.msbf-l{flex:1;min-width:0}' +
    '.msbf-l p{margin:0;font:700 14px "Plus Jakarta Sans",Inter,sans-serif;line-height:1.35;color:#fff}' +
    '.msbf-l small{display:block;margin:4px 0 8px;color:' + R2 + ';font:700 12px Inter,sans-serif}' +
    '.msbf-th{display:flex;align-items:center;flex-wrap:nowrap}' +
    '.msbf-th i{display:block;flex:none;position:relative;overflow:hidden;width:40px;height:34px;border-radius:10px;border:1px solid #2a2c31;background:#fff center/contain no-repeat}' +
    '.msbf-th b{color:#fff;margin:0 2px;font-size:13px}' +
    '.msbf-th i span{position:absolute;top:0;width:34px;height:34px;background:url(' + KT + ') center/contain no-repeat;mix-blend-mode:multiply}' +
    '.msbf-r{flex:none;text-align:right;line-height:1.15}' +
    '.msbf-r small{display:block;font:500 11px Inter,sans-serif;color:#b9bdc6;margin-bottom:2px}' +
    '.msbf-r strong{display:block;font:800 20px "Plus Jakarta Sans",sans-serif;color:#fff}' +
    '.msbf-r s{display:block;text-decoration:none;font:500 11px Inter,sans-serif;color:#9aa0ab;margin-top:3px}' +
    '.msbf-r u{display:block;text-decoration:none;margin:4px 0 5px;color:' + R2 + ';font:700 11.5px Inter,sans-serif;line-height:1.25}' +
    '.msbf-r em{display:inline-block;font:800 11px Inter,sans-serif;font-style:normal;background:' + R + ';color:#fff;border-radius:99px;padding:3px 8px}' +
    '.msbf-r ins{display:block;text-decoration:none;margin-top:7px;font:800 12.5px Inter,sans-serif;color:#fff}';

  var html = '<a class="msbf" id="msbf" href="' + URL_KIT + '">' +
    '<div class="msbf-band"><b>KIT BLACK FRIDAY</b><span><em>3 CUOTAS SIN INTERÉS</em><em>ENVÍO GRATIS</em></span></div>' +
    '<div class="msbf-in"><div class="msbf-l">' +
    '<p>3 localizadores<br>+ 1 tarjeta<br>+ 2 Key Tag</p>' +
    '<small>Solo válido hasta el 30/11</small>' +
    '<div class="msbf-th"><i style="background-image:url(' + LOC3 + ')"></i><b>+</b><i style="background-image:url(' + TARJ + ')"></i><b>+</b><i><span style="left:-6px"></span><span style="left:10px"></span></i></div>' +
    '</div><div class="msbf-r">' +
    '<small>por transferencia</small><strong>$121.410</strong><s>$134.900 con tarjeta</s>' +
    '<u>3 cuotas sin interés<br>de $44.967</u><em>Ahorrás $88.190 · 42%</em><ins>Ver kit ›</ins>' +
    '</div></div></a>';

  var st = d.createElement('style'); st.id = 'msbf-css'; st.textContent = css; d.head.appendChild(st);

  function poner() {
    if (d.getElementById('msbf')) return;
    var cards = d.querySelectorAll('.wigy-widget-bundle-cantidad .wigy-bundle-cantidad');
    var ult = cards[cards.length - 1];
    if (ult && ult.parentNode) ult.insertAdjacentHTML('afterend', html);
  }
  var t;
  new MutationObserver(function () {
    if (d.getElementById('msbf')) return;
    clearTimeout(t); t = setTimeout(poner, 60);
  }).observe(d.body, { childList: true, subtree: true });
  poner();
}();
