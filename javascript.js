/*-----carrusel-----*/
document.addEventListener('DOMContentLoaded', () => {
    const carruselInterno = document.getElementById('carrusel-interno');
    const carruselItems = carruselInterno.querySelectorAll('.carrusel-item');
    const botonPrev = document.getElementById('prev');
    const botonSig = document.getElementById('sig');
    let indiceActual = 0;

    function actualizarCarrusel() {
        const anchoItemCarrusel = carruselItems[0].offsetWidth;
        const desplazamiento = -indiceActual * anchoItemCarrusel;
        carruselInterno.style.transform = `translateX(${desplazamiento}px)`;
    }

    botonPrev.addEventListener('click', () => {
        indiceActual = (indiceActual > 0) ? indiceActual - 1 : carruselItems.length - 1;
        actualizarCarrusel();
    });

    botonSig.addEventListener('click', () => {
        indiceActual = (indiceActual < carruselItems.length - 1) ? indiceActual + 1 : 0;
        actualizarCarrusel();
    });

    // Initialize the carousel
    actualizarCarrusel();
});

/*-----menú hamburguesa-----*/
function alternarMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('mostrar');
}

/*Comentarios*/
const formComentarios = document.getElementById('form-comentarios');
const inputComentarios = document.getElementById('input-comentarios');
const contenedorComentarios = document.getElementById('contenedor-comentarios');

formComentarios.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const textoComentarios = inputComentarios.value;
    
    if (textoComentarios.trim() !== "") {
        const elementoComentarios = document.createElement('div');
        elementoComentarios.classList.add('comentario');
        elementoComentarios.innerText = textoComentarios;
        contenedorComentarios.appendChild(elementoComentarios);
        inputComentarios.value = ""; // Limpiar el campo de texto
    }
});