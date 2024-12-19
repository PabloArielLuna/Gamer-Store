document.addEventListener('DOMContentLoaded', () => {
    // Carrusel
    const carruselInterno = document.getElementById('carrusel-interno');
    if (carruselInterno) {
        const carruselItems = carruselInterno.querySelectorAll('.carrusel-item');  // Asegúrate de que carruselInterno existe antes de intentar seleccionarlo.
        const botonPrev = document.getElementById('prev');
        const botonSig = document.getElementById('sig');
        let indiceActual = 0;

        if (carruselItems.length > 0 && botonPrev && botonSig) {
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

            // Inicializa el carrusel
            actualizarCarrusel();
        } else {
            console.error("Uno o más elementos del carrusel no fueron encontrados.");
        }
    } else {
        console.error("El elemento carrusel-interno no fue encontrado.");
    }

    // Comentarios
    const formComentarios = document.getElementById('form-comentarios');
    const inputComentarios = document.getElementById('input-comentarios');
    const contenedorComentarios = document.getElementById('contenedor-comentarios');

    if (formComentarios && inputComentarios && contenedorComentarios) {
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
    } else {
        console.error("Uno o más elementos del formulario de comentarios no fueron encontrados.");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Llamamos a la función para mostrar los productos
    mostrarProductos();

    // Seleccionamos todas las tarjetas de producto
    const tarjetasProducto = document.querySelectorAll(".tarjeta-producto");

    // Iteramos sobre cada tarjeta
    tarjetasProducto.forEach((tarjeta) => {
        tarjeta.addEventListener("click", () => {
            // Obtenemos la información del producto clickeado
            const nombre = tarjeta.querySelector(".producto-nombre").textContent;
            const descripcion = tarjeta.querySelector(".producto-descripcion").textContent;
            const precio = tarjeta.querySelector(".producto-precio").textContent;
            const imagenSrc = tarjeta.querySelector(".producto").src;

            // Mostramos la descripción ampliada en un modal
            mostrarDescripcionAmpliada(nombre, descripcion, precio, imagenSrc);
        });
    });
});

// Array de productos
const productos = [
    {
        categoria: "Consolas",
        items: [
            {
                nombre: "PlayStation 5 1TB",
                descripcion: "Consola de última generación con gráficos ultra realistas.",
                precio: "$1.634.000",
                imagen: "https://www.psu.com/wp/wp-content/uploads/2020/07/PS5BlackEdition-1024x811.jpg",
            },
            {
                nombre: "Xbox Series S 1TB",
                descripcion: "La consola más potente de Microsoft con 4K UHD en HDR.",
                precio: "$1.340.000",
                imagen: "https://th.bing.com/th/id/OIP.SRfsqER_-Xa2IwPwwvMzcgAAAA?rs=1&pid=ImgDetMain",
            },
            {
                nombre: "Nintendo Switch 64GB",
                descripcion: "Consola híbrida portátil para jugar donde quieras.",
                precio: "$751.000",
                imagen: "https://i.blogs.es/9c75ca/-cuanto-cuesta-un-nintendo-switch-en-mexico-te-listamos-precios-de-diferentes-tiendas-del-pais-incluyendo-cada-edicion-de-la-consola-4/1366_2000.jpeg",
            },
        ],
    },
    {
        categoria: "Joysticks",
        items: [
            {
                nombre: "DualSense 5",
                descripcion: "Joystick ergonómico de Sony con alta sensibilidad.",
                precio: "$160.000",
                imagen: "https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2020/04/ps5-dualsense-blue.jpg?itok=8OG4yb3j",
            },
            {
                nombre: "Xbox Controller",
                descripcion: "Mando inalámbrico compatible con PC y Xbox Series.",
                precio: "$180.000",
                imagen: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https:%2F%2Fblog.kakaocdn.net%2Fdn%2F1xG8b%2FbtrcMZI8Azh%2F6A82A7tNCZBzVmGnsioki1%2Fimg.jpg",
            },
            {
                nombre: "Nintendo Pro Controller",
                descripcion: "Mando ergonómico para Nintendo Switch.",
                precio: "$173.000",
                imagen: "https://shop.lambertpawn.com/files/inventory/ebay/94846/1644679182-lg.jpg",
            },
        ],
    },
    {
        categoria: "Juegos",
        items: [
            {
                nombre: "God of War Ragnarok",
                descripcion: "Embárcate en una épica aventura nórdica junto a Kratos y Atreus.",
                precio: "$128.000",
                imagen: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/11/god-of-war-ragnarok-fan-cover.jpg",
            },
            {
                nombre: "Elden Ring",
                descripcion: "Explora un vasto mundo abierto lleno de peligros y misterios.",
                precio: "$100.000",
                imagen: "https://assets-prd.ignimgs.com/2021/06/12/elden-ring-button-03-1623460560664.jpg",
            },
            {
                nombre: "Mario Kart 8 Deluxe",
                descripcion: "Corre con Mario y amigos en divertidas pistas.",
                precio: "$116.000",
                imagen: "https://assets1.ignimgs.com/2017/01/20/mario-kart-8-deluxe-rp-switch-1484876317777.jpg",
            },
        ],
    },
];

// Función para mostrar productos
function mostrarProductos() {
    const main = document.querySelector("main");
    productos.forEach((categoria) => {
        const seccion = document.createElement("section");
        seccion.classList.add("categoria");
        seccion.innerHTML = `<h2>${categoria.categoria}</h2>`;
        const catalogo = document.createElement("div");
        catalogo.classList.add("catalogo");

        categoria.items.forEach((producto) => {
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta-producto");
            tarjeta.innerHTML = `
                <img class="producto" src="${producto.imagen}" alt="${producto.nombre}">
                <div class="producto-info">
                    <h2 class="producto-nombre">${producto.nombre}</h2>
                    <p class="producto-descripcion">${producto.descripcion}</p>
                    <p class="producto-precio">${producto.precio}</p>
                </div>
            `;
            catalogo.appendChild(tarjeta);
        });

        seccion.appendChild(catalogo);
        main.appendChild(seccion);
    });
}

// Función para mostrar la descripción ampliada en un modal
function mostrarDescripcionAmpliada(nombre, descripcion, precio, imagenSrc) {
    // Creamos un modal dinámicamente
    const modalHTML = `
        <div class="modal-backdrop">
            <div class="modal-contenido">
                <button class="modal-cerrar">&times;</button>
                <img src="${imagenSrc}" alt="${nombre}" class="modal-imagen">
                <h2>${nombre}</h2>
                <p>${descripcion}</p>
                <p><strong>Precio:</strong> ${precio}</p>
            </div>
        </div>
    `;

    // Insertamos el modal en el body
    document.body.insertAdjacentHTML("beforeend", modalHTML);

    // Deshabilitamos el scroll del body mientras el modal está abierto
    document.body.style.overflow = "hidden";

    // Seleccionamos el modal y el botón de cerrar
    const modalBackdrop = document.querySelector(".modal-backdrop");
    const modalCerrar = document.querySelector(".modal-cerrar");

    // Cerramos el modal al hacer clic en el botón de cerrar
    modalCerrar.addEventListener("click", () => {
        cerrarModal(modalBackdrop);
    });

    // Cerramos el modal al hacer clic fuera del contenido
    modalBackdrop.addEventListener("click", (e) => {
        if (e.target === modalBackdrop) {
            cerrarModal(modalBackdrop);
        }
    });
}

function cerrarModal(modal) {
    if (modal) {
        modal.remove(); // Eliminamos el modal del DOM
        document.body.style.overflow = ""; // Restauramos el scroll del body
    }
}
