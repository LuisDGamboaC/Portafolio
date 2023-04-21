document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp() {
    navegacionFija();
    crearGaleria();
    scrollNav();

}

function navegacionFija(){
    const barra =document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');

    window.addEventListener('scroll', function(){
        console.log(sobreFestival.getBoundingClientRect() );

        if(sobreFestival.getBoundingClientRect().bottom < 0 ){
            barra.classList.add('fijo')
        }else {
            barra.classList.remove('fijo')
        }
    });
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach(enlaces => {
        enlaces.addEventListener('click', function(e){
            e.preventDefault()

            const seccion = document.querySelector(seccion.target.attributes.href.value);
            seccion.scrollIntoView({behavior:"smooth"});

            
        })
    })
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i<= 12; i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
        <source srcset="built/img/thumb/${i}.avif" type="image/avif">
        <source srcset="built/img/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="built/img/thumb/${i}.jpg" 
        alt="imagen GALERIA">`;

        imagen.onclick = function() {
             mostrarImagen(i);
        }
        galeria.appendChild(imagen);
    }
}

function mostrarImagen(id) {
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
    <source srcset="built/img/grande/${id}.avif" type="image/avif">
    <source srcset="built/img/grande/${id}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="built/img/grande/${id}.jpg" 
    alt="imagen GALERIA">`;

    //crear overlay con la imagen
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    // Cerra sin tener que presionar la X
    overlay.onclick = function() {

        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
    
        overlay.remove();
    }

     // Boton para cerrar el Modal
     const cerrarModal = document.createElement('P');
     cerrarModal.textContent = 'X';
     cerrarModal.classList.add('btn-cerrar');
     //cerrar en la X
     cerrarModal.onclick = function() {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
    
        overlay.remove();
     }
     overlay.appendChild(cerrarModal);

    // Añadirlo al HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');

}