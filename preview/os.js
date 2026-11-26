window.__osPrev=function(opt,o){
o=o||{};var d=document,html=d.documentElement;
['mspv-css','mspv-bar'].forEach(function(id){var e=d.getElementById(id);e&&e.remove();});
d.querySelectorAll('.mso').forEach(function(e){e.remove();});
var IMG={iPhone:'https://d1a9qnv764bsoo.cloudfront.net/stores/007/481/104/rte/mysearch-app-findmy.png',Android:'https://d1a9qnv764bsoo.cloudfront.net/stores/007/481/104/rte/mysearch-app-findhub.png'};
var esLoc=!!d.getElementById('msfx-os');
var css=
/* 1 header fijo con la barra */
'header.js-head-main>#msbt{flex:0 0 100%;width:100%}'+
'@media(max-width:767px){header.js-head-main>#msbt{height:46px}}'+
/* selectores dentro del combo */
'#msfx-os,#mspk-mix{display:none!important}#msbf .mbf-op{display:none!important}'+
'.mso{background:#fff;color:#13294b;font-family:Inter,sans-serif;text-align:left;border-top:1px solid #e6e8ee;padding:12px 14px 14px;margin:12px -14px -14px;border-radius:0 0 12px 12px;cursor:default;white-space:normal}'+
'#msbf .mso{margin:0;border-radius:0 0 10px 10px;border-top:0}'+
'.mso .h{font:700 13px Inter,sans-serif;margin:0 0 8px;display:flex;justify-content:space-between;align-items:baseline;gap:8px;color:#13294b}'+
'.mso .h .all{font-weight:600;font-size:12px;color:#6b6f78}.mso .h .all a{color:#13294b;text-decoration:underline;cursor:pointer;font-weight:700}'+
'.mso .seg{display:grid;grid-template-columns:1fr 1fr;gap:8px}'+
'.mso .seg span{display:flex;align-items:center;justify-content:center;gap:8px;height:46px;border:1.5px solid #d5d9e2;border-radius:10px;font:700 15px Inter,sans-serif;color:#13294b;cursor:pointer;background:#fff}'+
'.mso .seg img{width:22px;height:22px}'+
'.mso .seg span.on{background:#13294b;border-color:#13294b;color:#fff}'+
'#msbf .mso .seg span.on,#msbf .mso .pl em.on{background:#0b0b0c;border-color:#0b0b0c}'+
'.mso .mix{display:inline-block;margin-top:10px;font:600 12.5px Inter,sans-serif;color:#13294b;text-decoration:underline;cursor:pointer}'+
'.mso .u{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:7px 0;border-top:1px solid #f0f1f4}.mso .u:first-of-type{border-top:0}'+
'.mso .u>span:first-child{font:600 13.5px Inter,sans-serif}'+
'.mso .pl{display:inline-flex;background:#f1f3f7;border-radius:999px;padding:3px}'+
'.mso .pl em{font:700 13px Inter,sans-serif;font-style:normal;padding:7px 14px;border-radius:999px;color:#13294b;cursor:pointer}'+
'.mso .pl em.on{background:#13294b;color:#fff}'+
'.mso .st{display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-top:1px solid #f0f1f4}.mso .st:first-of-type{border-top:0}'+
'.mso .st .n{display:flex;align-items:center;gap:9px;font:700 15px Inter,sans-serif}.mso .st img{width:24px;height:24px}'+
'.mso .st .c{display:flex;align-items:center;gap:6px}'+
'.mso .st .c i{font-style:normal;width:34px;height:34px;border:1.5px solid #d5d9e2;border-radius:9px;display:flex;align-items:center;justify-content:center;font:700 18px Inter,sans-serif;cursor:pointer;user-select:none}'+
'.mso .st .c b{min-width:26px;text-align:center;font:800 18px Inter,sans-serif}'+
'.mso .ok{margin:6px 0 0;font:600 12px Inter,sans-serif;color:#1A8E45}'+
/* 2 barra fija de compra en celular */
'#msl-bar{display:none!important}'+
'#mspv-bar{display:none}'+
'@media(max-width:767px){#mspv-bar{position:fixed;left:0;right:0;bottom:0;z-index:1000;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 16px;background:#faf8f3;border-top:2px solid #13294b;box-shadow:0 -6px 20px rgba(19,41,75,.08);font-family:Inter,sans-serif}'+
'#mspv-bar.k{background:#0b0b0c;border-top-color:#E3262F}'+
'#mspv-bar small{display:block;font:700 12.5px Inter,sans-serif;color:#13294b;white-space:nowrap}#mspv-bar.k small{color:#fff}'+
'#mspv-bar small i{font-style:normal;background:#E3262F;color:#fff;border-radius:4px;padding:2px 6px;font-size:10.5px;letter-spacing:.06em;margin-right:5px}'+
'#mspv-bar b{display:flex;align-items:center;gap:7px;font:800 20px "Plus Jakarta Sans",Inter,sans-serif;color:#13294b;white-space:nowrap;margin-top:3px}#mspv-bar.k b{color:#fff}'+
'#mspv-bar b em{font:800 10px Inter,sans-serif;font-style:normal;background:#E3262F;color:#fff;border-radius:999px;padding:3px 7px}'+
'#mspv-bar a{display:flex;align-items:center;height:48px;padding:0 20px;border-radius:14px;background:#13294b;color:#fff;font:700 16px Inter,sans-serif;text-decoration:none;white-space:nowrap}#mspv-bar.k a{background:#E3262F}'+
'body{padding-bottom:80px}}';
var st=d.createElement('style');st.id='mspv-css';st.textContent=css;d.head.appendChild(st);

/* 1: barra Black Friday dentro del encabezado fijo */
var bt=d.getElementById('msbt'),hd=d.querySelector('header.js-head-main');
if(bt&&hd&&bt.parentNode!==hd)hd.insertBefore(bt,hd.firstChild);

/* 3: selector dentro del combo */
function seg(os){return '<div class="seg">'+['iPhone','Android'].map(function(x){return '<span data-os="'+x+'" class="'+(x===os?'on':'')+'"><img src="'+IMG[x]+'" alt="">'+x+'</span>'}).join('')+'</div>'}
function pl(os){return '<span class="pl"><em class="'+(os==='iPhone'?'on':'')+'">iPhone</em><em class="'+(os==='Android'?'on':'')+'">Android</em></span>'}
function filas(n){var h='';for(var i=0;i<n;i++)h+='<div class="u"><span>'+(n===1?'Tu localizador':'Localizador '+(i+1))+'</span>'+pl('Android')+'</div>';return h}
function footer(n,kit){
  var f=d.createElement('div');f.className='mso';
  if(opt===1){f.innerHTML='<p class="h">¿Qué celular tenés?</p>'+seg('Android')+(n>1?'<a class="mix">¿En casa hay iPhone y Android? Elegí uno por uno ›</a><div class="uu" hidden>'+filas(n)+'</div>':'');}
  if(opt===2){f.innerHTML=n>1?'<p class="h"><span>¿Para qué celular es cada uno?</span><span class="all">Todos: <a data-all="iPhone">iPhone</a> · <a data-all="Android">Android</a></span></p>'+filas(n):'<p class="h">¿Qué celular tenés?</p>'+seg('Android');}
  if(opt===3){f.innerHTML=n>1?'<p class="h">¿Cuántos para cada celular?</p>'+['iPhone','Android'].map(function(x){return '<div class="st" data-os="'+x+'"><span class="n"><img src="'+IMG[x]+'" alt="">'+x+'</span><span class="c"><i data-d="-1">−</i><b>'+(x==='Android'?n:0)+'</b><i data-d="1">+</i></span></div>'}).join('')+'<p class="ok">✓ Listo: '+n+' de '+n+' elegidos</p>':'<p class="h">¿Qué celular tenés?</p>'+seg('Android');}
  f.addEventListener('click',function(e){
    e.stopPropagation();e.preventDefault();var t=e.target.closest('span[data-os],em,a,i,[data-all]');if(!t)return;
    if(t.matches('.seg span')){t.parentNode.querySelectorAll('span').forEach(function(s){s.classList.toggle('on',s===t)});f.querySelectorAll('.u').forEach(function(u){u.querySelectorAll('em').forEach(function(m){m.classList.toggle('on',m.textContent===t.dataset.os)})});}
    else if(t.matches('.pl em')){t.parentNode.querySelectorAll('em').forEach(function(m){m.classList.toggle('on',m===t)});var sg=f.querySelectorAll('.seg span');sg.forEach(function(s){s.classList.remove('on')});}
    else if(t.matches('.mix')){var uu=f.querySelector('.uu');uu.hidden=!uu.hidden;}
    else if(t.dataset.all){f.querySelectorAll('.u em').forEach(function(m){m.classList.toggle('on',m.textContent===t.dataset.all)});}
    else if(t.matches('.c i')){var row=t.closest('.st'),other=[].find.call(f.querySelectorAll('.st'),function(r){return r!==row});var a=+row.querySelector('b').textContent,b=+other.querySelector('b').textContent,dd=+t.dataset.d;if(a+dd<0||b-dd<0)return;row.querySelector('b').textContent=a+dd;other.querySelector('b').textContent=b-dd;}
  },true);
  return f;
}
function poner(card){
  d.querySelectorAll('.mso').forEach(function(e){e.remove();});
  if(card==='kit'){var k=d.getElementById('msbf');k&&k.appendChild(footer(3,true));return;}
  if(!esLoc)return;
  var b=card.querySelector('button');var n=/Lleva 1|1 localizador/.test(card.textContent)?1:3;b.appendChild(footer(n));
}
if(opt){
  poner(html.classList.contains('msbf-on')?'kit':(d.querySelector('.wigy-bundle-cantidad')));
  if(!window.__osL){window.__osL=1;d.addEventListener('click',function(e){
    if(!window.__osOpt)return;
    if(e.target.closest('.mso'))return;
    if(e.target.closest('#msbf'))setTimeout(function(){window.__osPrev(window.__osOpt,window.__osO)},50);
    else{var c=e.target.closest('.wigy-bundle-cantidad');if(c)setTimeout(function(){window.__osPrev(window.__osOpt,window.__osO);poner(c)},80);}
  });}
}
window.__osOpt=opt;window.__osO=o;

/* 2: barra fija de compra (celular) */
var bar=d.createElement('div');bar.id='mspv-bar';
var kitOn=html.classList.contains('msbf-on');
if(kitOn){bar.className='k';bar.innerHTML='<div><small><i>BLACK FRIDAY</i>Kit completo</small><b>$120.636<em>42% OFF</em></b></div><a href="#" role="button">Agregar al carrito</a>';}
else bar.innerHTML='<div><small>'+(esLoc?'Pack x3 · Android':'Pack x3 tarjetas')+'</small><b>'+(esLoc?'$89.865':'$124.209')+'</b></div><a href="#" role="button">Agregar al carrito</a>';
d.body.appendChild(bar);
return 'ok '+opt+' kit:'+kitOn;
};
