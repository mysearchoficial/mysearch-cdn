/* My Search · Agregar al carrito y abrir el carrito lateral (desde el 26/11/2026).
   window.msCarrito(pasos): agrega varios productos y, en vez de ir a /comprar/, abre el carrito lateral.
   Cada paso es una lista de campos del formulario de compra, ej. [['add_to_cart','383780051'],['quantity','1']].
   Todos los pasos menos el último se mandan directo; el último pasa por la función del tema
   (LS.addToCartEnhanced), que devuelve el carrito completo y redibuja el carrito lateral con todo.
   Si algo falla, va a /comprar/ como antes.
   También acomoda las etiquetas de la barra de Wigy "Envío gratis / 3 Cuotas sin intereses" (169380),
   que se pisaban: cada etiqueta queda alineada a la derecha de su marca. */
!function () {
  var d = document;

  var css = '[data-component-id^="wigy-bp-169380"] .nube-box[style*="position: absolute"][style*="flex-direction: column"]{' +
      'width:84px!important;margin-left:-80px!important;align-items:flex-end!important;text-align:right!important}' +
    '[data-component-id^="wigy-bp-169380"] .nube-box[style*="position: absolute"][style*="flex-direction: column"]:last-child{margin-left:-84px!important}' +
    '[data-component-id^="wigy-bp-169380"] .nube-box[style*="position: absolute"][style*="flex-direction: column"] p{text-align:right!important;white-space:normal!important}';
  var st = d.createElement('style'); st.textContent = css; (d.head || d.documentElement).appendChild(st);

  function abierto() { var m = d.getElementById('modal-cart'); return !!(m && m.classList.contains('modal-show')); }
  function abrir() {
    if (abierto()) return true;
    var bs = [].slice.call(d.querySelectorAll('a.js-modal-open[data-toggle="#modal-cart"]'));
    var b = bs.filter(function (a) { return a.offsetParent; })[0] || bs[0];
    if (!b) return false;
    b.click(); return true;
  }
  window.msAbrirCarrito = abrir;

  function fd(c) { var f = new FormData(); c.forEach(function (x) { f.append(x[0], x[1]); }); return f; }
  function items() { try { return JSON.stringify((window.LS && LS.cart && LS.cart.items || []).map(function (i) { return i.item_id + ':' + i.quantity; })); } catch (e) { return ''; } }

  window.msCarrito = function (pasos) {
    var resto = pasos.slice(0, -1), ult = pasos[pasos.length - 1];
    var p = Promise.resolve();
    resto.forEach(function (c) {
      p = p.then(function () { return fetch('/comprar/', { method: 'POST', body: fd(c), credentials: 'same-origin' }).catch(function () {}); });
    });
    return p.then(function () {
      var J = window.jQueryNuvem, L = window.LS;
      if (!ult || !J || !L || typeof L.addToCartEnhanced !== 'function' || !d.getElementById('modal-cart')) throw new Error('sin carrito lateral');
      var f = d.createElement('form');
      f.action = '/comprar/'; f.method = 'post'; f.style.display = 'none';
      ult.forEach(function (x) { var i = d.createElement('input'); i.type = 'hidden'; i.name = x[0]; i.value = x[1]; f.appendChild(i); });
      d.body.appendChild(f);
      var antes = items();
      L.addToCartEnhanced(J(f));
      return new Promise(function (ok, ko) {
        var t0 = Date.now();
        (function esperar() {
          if (items() !== antes) { f.remove(); return ok(); }
          if (Date.now() - t0 > 8000) { f.remove(); return ko(new Error('sin respuesta')); }
          setTimeout(esperar, 200);
        })();
      });
    }).then(function () {
      if (!abrir()) location.href = '/comprar/';
    }).catch(function () { location.href = '/comprar/'; });
  };
}();
