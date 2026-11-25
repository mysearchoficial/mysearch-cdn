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
