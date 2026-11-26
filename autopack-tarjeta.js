/* My Search · Armado automático del pack de tarjetas (desde el 26/11/2026).
   Si el carrito tiene 3 o más Tarjetas Localizadoras sueltas (producto 375874883, fuera de un kit),
   cambia cada 3 por un "Pack 3 Tarjetas Localizadoras MySearch" (kit nativo 383780051) y lleva al
   carrito con el aviso "Armamos tu pack de 3". Ej.: 3 sueltas → 1 pack; 4 → pack + 1; 6 → 2 packs.
   Se dispara al cargar la página y cada vez que cambia el total del carrito (lateral o /comprar/). */
!function () {
  var d = document, TARJ = 375874883, KIT = '383780051', COMP = 71589, TARJ_V = 1624006946, AHORRO = 41331;
  var K_MSG = 'ms_autopack_msg', K_BUSY = 'ms_autopack_busy';
  function ss(k, v) { try { if (v === undefined) return sessionStorage.getItem(k); if (v === null) sessionStorage.removeItem(k); else sessionStorage.setItem(k, v); } catch (e) {} }
  function plata(n) { return '$' + Math.round(n).toLocaleString('es-AR'); }

  // Aviso en la página del carrito después del cambio.
  function aviso() {
    var m = ss(K_MSG); if (!m || !/^\/comprar\/?$/.test(location.pathname)) return;
    var f = d.querySelector('[data-store="cart-form"]') || d.querySelector('#shoppingCartPage') || d.querySelector('main');
    if (!f || d.getElementById('ms-autopack')) return;
    var n = +m || 1;
    var el = d.createElement('div');
    el.id = 'ms-autopack';
    el.style.cssText = 'background:#e8f6ee;border:1px solid #1a8e45;color:#0f5c2c;border-radius:12px;padding:12px 14px;margin:0 0 14px;font:600 14px Inter,sans-serif;line-height:1.35';
    el.textContent = '✔ Armamos tu ' + (n > 1 ? n + ' packs de 3 tarjetas' : 'pack de 3 tarjetas') + ': ahorrás ' + plata(AHORRO * n) + '.';
    f.parentNode.insertBefore(el, f);
    ss(K_MSG, null);
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
    p.then(function () {
      var f = new FormData();
      f.append('add_to_cart', KIT);
      f.append('kit_selections', JSON.stringify([{ kit_component_id: COMP, variant_id: TARJ_V, quantity: 3 }]));
      f.append('quantity', String(packs));
      return post('/comprar/', f);
    }).then(function () {
      ss(K_MSG, String(packs)); ss(K_BUSY, null);
      if (/^\/comprar\/?$/.test(location.pathname)) location.reload(); else location.href = '/comprar/';
    });
  }

  var t, ultimo = '';
  function mirar() {
    var tot = d.querySelector('.js-cart-total');
    var k = (tot && tot.textContent) + '|' + (window.LS && LS.cart && LS.cart.items ? LS.cart.items.length : '');
    if (k === ultimo) return; ultimo = k;
    clearTimeout(t); t = setTimeout(revisar, 700);
  }
  function arrancar() {
    aviso(); revisar();
    new MutationObserver(function () { mirar(); aviso(); }).observe(d.body, { childList: true, subtree: true, characterData: true });
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', arrancar); else arrancar();
}();
