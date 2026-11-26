/* My Search · Línea "O $X con Transferencia" en el carrito (desde el 26/11/2026).
   El tema oculta su línea de precio por transferencia cuando el carrito tiene promociones
   (Kit Black Friday, 3x2 de localizadores). En ese caso agregamos la nuestra, con el Total del
   carrito menos 10%, y la recalculamos cada vez que cambia el Total. Si la línea del tema está
   visible, la nuestra no aparece. */
!function () {
  var d = document, DESC = 0.10;
  function num(t) {
    var m = (t || '').replace(/\s/g, '').match(/\$([\d.]+)(,(\d{1,2}))?/);
    return m ? +m[1].replace(/\./g, '') + (m[3] ? +('0.' + m[3]) : 0) : 0;
  }
  function plata(n) { return '$' + n.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function visible(el) { return !!(el && el.offsetParent !== null && getComputedStyle(el).display !== 'none'); }

  function pintar() {
    [].forEach.call(d.querySelectorAll('.js-cart-total'), function (tot) {
      var caja = tot.closest('.js-ajax-cart-panel, .js-cart-totals, form, [data-store="cart-form"]') || tot.parentNode.parentNode;
      var tema = caja.querySelector('.js-payment-discount-price-cart-container');
      var precioTema = tema && tema.querySelector('.js-payment-discount-price-cart');
      var temaOk = visible(tema) && num(precioTema && precioTema.textContent) > 0;
      var mia = caja.querySelector('.ms-transf');
      var total = num(tot.textContent);
      if (temaOk || !total || !visible(tot)) { if (mia) mia.remove(); return; }
      var txt = 'O ' + plata(Math.round(total * (1 - DESC) * 100) / 100) + ' con Transferencia';
      if (!mia) {
        mia = d.createElement('div');
        mia.className = 'ms-transf font-small text-right';
        mia.style.cssText = 'margin-top:2px';
        var fila = tot.closest('.cart-total') || tot.parentNode;
        fila.parentNode.insertBefore(mia, fila.nextSibling);
      }
      if (mia.textContent !== txt) mia.textContent = txt;
    });
  }
  var t;
  function arrancar() {
    pintar();
    new MutationObserver(function (ms) {
      for (var i = 0; i < ms.length; i++) { var n = ms[i].target; if (n.classList && n.classList.contains('ms-transf')) return; }
      clearTimeout(t); t = setTimeout(pintar, 250);
    }).observe(d.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['style', 'class'] });
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', arrancar); else arrancar();
}();
