# mysearch-cdn

Código propio de la tienda mysearchoficial.com (Tiendanube, diseño Lima), servido por jsDelivr.

Este repositorio es público: todo lo que corre en la tienda se puede leer desde el navegador. **Nunca subir claves, tokens ni datos de clientes.**

## Archivos

| Archivo | Qué hace | Cómo se carga |
|---|---|---|
| `kit-bf.js` | Pestaña "Kit Black Friday" en las fichas del Localizador y la Tarjeta. Aparece sola del 27/11/2026 00:00 al 01/12/2026 00:00 (hora Argentina) y lleva a `/productos/kit-black-friday/`. | Una línea en el sello del pie de página |

Para ver la pestaña antes de la fecha: agregar `?msbf=1` a la URL de la ficha (queda guardado en ese navegador; `?msbf=0` lo apaga).

## Versiones

Cada cambio se publica con el número del commit en la URL, así jsDelivr sirve esa versión exacta:

```
https://cdn.jsdelivr.net/gh/mysearchoficial/mysearch-cdn@<commit>/kit-bf.js
```
