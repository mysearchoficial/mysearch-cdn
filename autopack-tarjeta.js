/* My Search · Armado automático del pack de tarjetas (desde el 26/11/2026).
   Si el carrito tiene 3 o más Tarjetas Localizadoras sueltas (producto 375874883, fuera de un kit),
   cambia cada 3 por un "Pack 3 Tarjetas Localizadoras MySearch" (kit nativo 383780051) y muestra el aviso
   "Armamos tu pack de 3". En la tienda abre el carrito lateral (carrito-lateral.js); en /comprar/ recarga.
   Ej.: 3 sueltas → 1 pack; 4 → pack + 1; 6 → 2 packs.
   Se dispara al cargar la página y cada vez que cambia el total del carrito (lateral o /comprar/). */
!function () {
  var d = document, TARJ = 375874883, KIT = '383780051', COMP = 71589, TARJ_V = 1624006946, AHORRO = 41331;
  var K_MSG = 'ms_autopack_msg', K_BUSY = 'ms_autopack_busy';
  function ss(k, v) { try { if (v === undefined) return sessionStorage.getItem(k); if (v === null) sessionStorage.removeItem(k); else sessionStorage.setItem(k, v); } catch (e) {} }
  function plata(n) { return '$' + Math.round(n).toLocaleString('es-AR'); }

  // Aviso en la página del carrito después del cambio.
  function aviso() {
    // El mensaje queda 20 s: la página del carrito se redibuja al cargar y puede borrar el aviso,
    // así que se vuelve a poner mientras dure.
    var m = ss(K_MSG); if (!m) return;
    var partes = m.split('|'), n = +partes[0] || 1, ts = +partes[1] || 0;
    if (Date.now() - ts > 20000) { ss(K_MSG, null); return; }
    var f = /^\/comprar\/?$/.test(location.pathname)
      ? (d.querySelector('[data-store="cart-form"]') || d.querySelector('#shoppingCartPage') || d.querySelector('main'))
      : d.querySelector('#modal-cart .js-ajax-cart-list');
    if (!f || d.getElementById('ms-autopack')) return;
    var el = d.createElement('div');
    el.id = 'ms-autopack';
    el.style.cssText = 'background:#e8f6ee;border:1px solid #1a8e45;color:#0f5c2c;border-radius:12px;padding:12px 14px;margin:0 0 14px;font:600 14px Inter,sans-serif;line-height:1.35';
    el.textContent = '✔ Armamos ' + (n > 1 ? 'tus ' + n + ' packs de 3 tarjetas' : 'tu pack de 3 tarjetas') + ': ahorrás ' + plata(AHORRO * n) + '.';
    f.parentNode.insertBefore(el, f);
  }

  function post(url, body, json) {
    return fetch(url, { method: 'POST', body: body, credentials: 'same-origin',
      headers: json ? { 'Content-Type': 'application/x-www-form-urlencoded' } : undefined }).catch(function () {});
  }

  function revisar() {
    var c = window.LS && LS.cart; if (!c || !c.items) return;
    var sueltas = c.items.filter(function (i) { return +i.product_id === TARJ && !i.is_part_of_kit; });
    var q = sueltas.reduce(function (s, i) { return s + (+i.quantity || 0); }, 0);
    if (q < 3) return;
    var b = +ss(K_BUSY) || 0; if (Date.now() - b < 15000) return;
    ss(K_BUSY, String(Date.now()));
    var packs = Math.floor(q / 3), resto = q % 3;
    // Deja "resto" en la primera línea suelta y saca las demás.
    var p = Promise.resolve();
    sueltas.forEach(function (it, k) {
      var nueva = k === 0 ? resto : 0;
      p = p.then(function () { return post('/cart/update/', 'quantity%5B' + it.item_id + '%5D=' + nueva + '&cart_page=0', true); });
    });
    var kit = [['add_to_cart', KIT],
      ['kit_selections', JSON.stringify([{ kit_component_id: COMP, variant_id: TARJ_V, quantity: 3 }])],
      ['quantity', String(packs)]];
    var enCarrito = /^\/comprar\/?$/.test(location.pathname);
    p.then(function () {
      if (!enCarrito && window.msCarrito) {
        // Agrega el pack con la función del tema y abre el carrito lateral con el aviso adentro.
        ss(K_MSG, packs + '|' + Date.now());
        return window.msCarrito([kit]).then(function () { ss(K_BUSY, null); aviso(); });
      }
      var f = new FormData(); kit.forEach(function (x) { f.append(x[0], x[1]); });
      return post('/comprar/', f).then(function () {
        ss(K_MSG, packs + '|' + Date.now()); ss(K_BUSY, null);
        if (enCarrito) location.reload(); else location.href = '/comprar/';
      });
    });
  }

  // Cada 0,7 s mira si cambió el carrito (LS.cart se actualiza al tocar +/− o agregar productos).
  var ultimo = '';
  function mirar() {
    var c = window.LS && LS.cart;
    var k = c && c.items ? c.items.map(function (i) { return i.item_id + ':' + i.quantity; }).join(',') : '';
    if (k !== ultimo) { ultimo = k; revisar(); }
    aviso();
  }
  function arrancar() { mirar(); setInterval(mirar, 700); }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', arrancar); else arrancar();
}();
