#!/bin/sh
# Arma ms.js (el único archivo que carga el sello) juntando los scripts en este orden.
cd "$(dirname "$0")"
{
  echo "/* My Search · ms.js — generado por build.sh, no editar a mano. */"
  for f in bf-timer.js combo-os.js kit-bf.js pack3-tarjeta.js autopack-tarjeta.js transf-carrito.js barra-compra.js videos-arriba.js; do
    echo; echo "/* ---- $f ---- */"; cat "$f"
  done
} > ms.js
