function iniciarApp(){navegacionFija(),crearGaleria(),scrollNav()}function navegacionFija(){const e=document.querySelector(".header"),t=document.querySelector(".sobre-festival"),n=document.querySelector("body");window.addEventListener("scroll",(function(){t.getBoundingClientRect().bottom<0?(e.classList.add("fijo"),n.classList.add("body-scroll")):(e.classList.remove("fijo"),n.classList.remove("body-scroll"))}))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})}))})}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const n=document.createElement("picture");n.innerHTML=`\n        <source srcset="built/img/thumb/${t}.avif" type="image/avif">   \n        <source srcset="built/img/thumb/${t}.webp" type="image/webp">\n        <img loading="lazy" width="200" height="300" src="built/img/thumb/${t}.jpg" \n        alt="imagen GALERIA">`,n.onclick=function(){mostrarImagen(t)},e.appendChild(n)}}function mostrarImagen(e){const t=document.createElement("picture");t.innerHTML=`\n    <source srcset="built/img/grande/${e}.avif" type="image/avif">\n    <source srcset="built/img/grande/${e}.webp" type="image/webp">\n    <img loading="lazy" width="200" height="300" src="built/img/grande/${e}.jpg" \n    alt="imagen GALERIA">`;const n=document.createElement("DIV");n.appendChild(t),n.classList.add("overlay"),n.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),n.remove()};const i=document.createElement("P");i.textContent="X",i.classList.add("btn-cerrar"),i.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),n.remove()},n.appendChild(i);const o=document.querySelector("body");o.appendChild(n),o.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=galeria.js.map
