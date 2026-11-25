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
