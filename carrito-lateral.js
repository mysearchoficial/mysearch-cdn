/* My Search · Agregar al carrito y abrir el carrito lateral (desde el 26/11/2026).
   window.msCarrito(pasos): agrega varios productos y, en vez de ir a /comprar/, abre el carrito lateral.
   Cada paso es una lista de campos del formulario de compra, ej. [['add_to_cart','383780051'],['quantity','1']].
   Todos los pasos menos el último se mandan directo; el último pasa por la función del tema
   (LS.addToCartEnhanced), que devuelve el carrito completo y redibuja el carrito lateral con todo.
   Si algo falla, va a /comprar/ como antes.
   También reemplaza, en el carrito, la barra de Wigy "Envío gratis / 3 Cuotas sin intereses" (169380):
   Wigy la calcula mal cuando hay un pack (kit nativo) y el carrito cambia sin recargar (resta dos veces
   el descuento del pack), y sus etiquetas se pisaban. La nuestra usa el Total real del carrito,
   con las mismas metas ($95.000 envío gratis, $120.000 tres cuotas) y etiquetas alineadas a su marca. */
!function () {
  var d = document, META_ENVIO = 95000, META_CUOTAS = 120000;
  var AZ = '#13294b', LIMA = '#d6f367';

  var css = '[data-component-id^="wigy-bp-169380"]{display:none!important}' +
    '.ms-meta{background:#fff;border-radius:12px;padding:12px 14px 6px;margin:10px 0;font-family:Inter,sans-serif;color:#181818}' +
    '.ms-meta .mm-t{margin:0 0 10px;font-size:13px;line-height:1.4}' +
    '.ms-meta .mm-t b{color:' + AZ + '}' +
    '.ms-meta .mm-bar{position:relative;height:8px;border-radius:99px;background:#eeeee9;margin:0 8px 0 0}' +
    '.ms-meta .mm-bar i{position:absolute;left:0;top:0;bottom:0;border-radius:99px;background:' + LIMA + ';transition:width .3s}' +
    '.ms-meta .mm-dot{position:absolute;top:50%;width:14px;height:14px;margin:-7px 0 0 -7px;border-radius:50%;background:#eeeee9;border:2px solid #fff;box-shadow:0 0 0 1px rgba(0,0,0,.08)}' +
    '.ms-meta .mm-dot.ok{background:' + LIMA + '}' +
    '.ms-meta .mm-lab{position:relative;height:44px;margin:6px 8px 0 0;font-size:10px;line-height:1.3}' +
    '.ms-meta .mm-lab span{position:absolute;top:0;width:96px;text-align:right;transform:translateX(-100%)}' +
    // La 2.ª etiqueta va angosta para que entre entre las dos marcas aun en celular (el tramo es ~21% del ancho).
    '.ms-meta .mm-lab span:last-child{width:60px}' +
    '.ms-meta .mm-lab span b{display:block;color:' + AZ + ';font-weight:700}';
  var st = d.createElement('style'); st.textContent = css; (d.head || d.documentElement).appendChild(st);

  function num(t) {
    var m = (t || '').replace(/\s/g, '').match(/\$([\d.]+)(,(\d{1,2}))?/);
    return m ? +m[1].replace(/\./g, '') + (m[3] ? +('0.' + m[3]) : 0) : 0;
  }
  function plata(n) { return '$' + Math.round(n).toLocaleString('es-AR'); }
  var POS_ENVIO = (META_ENVIO / META_CUOTAS * 100).toFixed(2);

  function metas() {
    [].forEach.call(d.querySelectorAll('.js-cart-total'), function (tot) {
      if (tot.offsetParent === null) return;
      var fila = tot.closest('.cart-total') || tot.parentNode;
      var caja = fila.parentNode;
      var total = num(tot.textContent);
      var el = caja.querySelector('.ms-meta');
      if (!total) { if (el) el.remove(); return; }
      if (!el) {
        el = d.createElement('div'); el.className = 'ms-meta';
        el.innerHTML = '<p class="mm-t"></p><div class="mm-bar"><i></i><span class="mm-dot e" style="left:' + POS_ENVIO + '%"></span><span class="mm-dot c" style="left:100%"></span></div>' +
          '<div class="mm-lab"><span style="left:' + POS_ENVIO + '%"><b>Envío gratis</b>' + plata(META_ENVIO) + '</span><span style="left:100%"><b>3 Cuotas sin intereses</b>' + plata(META_CUOTAS) + '</span></div>';
        caja.insertBefore(el, fila);
      }
      var t = total >= META_CUOTAS ? '¡<b>3 Cuotas sin intereses</b> desbloqueado! 🎉'
        : total >= META_ENVIO ? 'Te faltan <b>' + plata(META_CUOTAS - total) + '</b> para 3 Cuotas sin intereses'
        : 'Te faltan <b>' + plata(META_ENVIO - total) + '</b> para Envío gratis';
      var p = el.querySelector('.mm-t'); if (p.innerHTML !== t) p.innerHTML = t;
      el.querySelector('.mm-bar i').style.width = Math.min(100, total / META_CUOTAS * 100).toFixed(1) + '%';
      el.querySelector('.mm-dot.e').classList.toggle('ok', total >= META_ENVIO);
      el.querySelector('.mm-dot.c').classList.toggle('ok', total >= META_CUOTAS);
    });
  }
  metas(); setInterval(metas, 600);

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
