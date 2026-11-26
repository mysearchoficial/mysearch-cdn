# mysearch-cdn

Código propio de la tienda mysearchoficial.com (Tiendanube, diseño Lima), servido por jsDelivr.

Este repositorio es público: todo lo que corre en la tienda se puede leer desde el navegador. **Nunca subir claves, tokens ni datos de clientes.**

## Archivos

| Archivo | Qué hace | Cómo se carga |
|---|---|---|
| `kit-bf.js` | Opción "Kit Black Friday" dentro del selector de packs del Localizador y la Tarjeta, elegida de entrada. Con ella elegida, "Agregar al carrito" carga por separado 3 localizadores (del sistema elegido), 1 tarjeta y 2 Key Tag negros, y lleva al carrito. El precio sale del 3x2 de Wigy más la promoción de Tiendanube "Black Friday kit". Aparece sola desde el 25/11/2026 hasta el 01/12/2026 00:00 (hora Argentina). | Una línea en el sello del pie de página |

Para ver la pestaña antes de la fecha: agregar `?msbf=1` a la URL de la ficha (queda guardado en ese navegador; `?msbf=0` lo apaga).

## Versiones

Cada cambio se publica con el número del commit en la URL, así jsDelivr sirve esa versión exacta:

```
https://cdn.jsdelivr.net/gh/mysearchoficial/mysearch-cdn@<commit>/kit-bf.js
```


## ms.js (desde el 26/11/2026)
El sello carga **un solo archivo**, `ms.js`, que se arma con `./build.sh` juntando, en este orden:
`bf-timer.js` (barra Black Friday con contador, dentro del encabezado fijo), `combo-os.js` (selector iPhone/Android al pie del combo elegido),
`kit-bf.js` (Kit Black Friday), `pack3-tarjeta.js` ("Lleva 3" de la Tarjeta agrega el kit nativo "Pack 3 Tarjetas", producto 383780051), `autopack-tarjeta.js` (3 tarjetas sueltas en el carrito se cambian solas por el pack), `transf-carrito.js` (línea "O $X con Transferencia" en el carrito cuando el tema la oculta por promos), `barra-compra.js` (barra de compra fija en celular) y `videos-arriba.js`.
Después de editar cualquiera, correr `./build.sh`, commitear y cambiar el commit en la línea del sello.
`bf-timer.js` y `kit-bf.js` se apagan solos el 01/12/2026 00:00; el resto queda.
