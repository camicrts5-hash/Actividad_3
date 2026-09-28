const imagenes = [
    {
        url: "img/img1.jpg",
        nombre: "Tokio",
        descripcion: "La vibrante capital de Japón, donde la modernidad se mezcla con la tradición.",
        infoExtra: "Tokio es una de las metrópolis más grandes del mundo. Destaca por sus rascacielos iluminados por luces de neón, templos históricos como Sensō-ji y una oferta gastronómica inigualable."
    },
    {
        url: "img/img2.jpg",
        nombre: "Kioto",
        descripcion: "Antigua capital famosa por sus templos clásicos, jardines y palacios imperiales.",
        infoExtra: "Kioto alza miles de santuarios budistas y sintoístas. Es famosa por el distrito de Gion, conocido por sus geishas, y los hermosos bosques de bambú de Arashiyama."
    },
    {
        url: "img/img3.jpg",
        nombre: "Monte Fuji",
        descripcion: "El pico más alto de Japón y un símbolo icónico de la belleza natural del país.",
        infoExtra: "Con una altura de 3,776 metros, el Monte Fuji es un volcán activo y un destino de peregrinación muy respetado. Ofrece vistas impresionantes desde los Cinco Lagos de Fuji."
    },
    {
        url: "img/img4.jpg",
        nombre: "Osaka",
        descripcion: "Ciudad portuaria conocida por su arquitectura moderna, vida nocturna y gastronomía callejera.",
        infoExtra: "Osaka es considerada la 'cocina de Japón'. No puedes perderte platillos callejeros emblemáticos como el Takoyaki y el Okonomiyaki, además de visitar su famoso castillo."
    },
    {
        url: "img/img5.jpg",
        nombre: "Nara",
        descripcion: "Hogar de cientos de ciervos sika que deambulan libremente y templos históricos gigantescos.",
        infoExtra: "En el Parque de Nara, los ciervos son considerados mensajeros divinos según la religión sintoísta. También alberga el templo Tōdai-ji, que resguarda una estatua de Buda gigante de bronce."
    },
    {
        url: "img/img6.jpg",
        nombre: "Hiroshima",
        descripcion: "Ciudad con una rica historia de resiliencia, paz y hermosos paisajes costeros.",
        infoExtra: "Hiroshima es mundialmente conocida por su Parque Memorial de la Paz. Cerca de allí se encuentra la hermosa isla de Miyajima y su famoso torii flotante del santuario Itsukushima."
    }
];

// Variables del DOM
let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let puntos = document.getElementById('puntos');
let actual = 0;

// Variables del Modal
let btnModal = document.getElementById('btn-modal');
let modalInfo = document.getElementById('modal-info');
let cerrarModal = document.getElementById('cerrar-modal');
let modalTitulo = document.getElementById('modal-titulo');
let modalTexto = document.getElementById('modal-texto');

// Evento para botón Atrás
if (atras) {
    atras.addEventListener('click', function() {
        actual -= 1;
        if (actual < 0) {
            actual = imagenes.length - 1;
        }
        mostrarImagenYTexto();
    });
}

// Evento para botón Adelante
if (adelante) {
    adelante.addEventListener('click', function() {
        actual += 1;
        if (actual >= imagenes.length) {
            actual = 0;
        }
        mostrarImagenYTexto();
    });
}

// Función para actualizar la información visual
function mostrarImagenYTexto() {
    let itemActual = imagenes[actual];
    
    const imgElement = document.querySelector('.img');
    const h3Element = document.querySelector('.texto h3');
    const pElement = document.querySelector('.texto p');

    if (imgElement) imgElement.src = itemActual.url;
    if (h3Element) h3Element.innerText = itemActual.nombre;
    if (pElement) pElement.innerText = itemActual.descripcion;

    posicionCarrusel();
}

// Función para los puntos indicadores dinámicos
function posicionCarrusel() {
    if (!puntos) return;
    
    puntos.innerHTML = "";
    for (let i = 0; i < imagenes.length; i++) {
        if (i === actual) {
            puntos.innerHTML += `<p class="bold">•</p>`;
        } else {
            puntos.innerHTML += `<p>•</p>`;
        }
    }
}

// Lógica para abrir y cerrar el Modal
if (btnModal) {
    btnModal.addEventListener('click', () => {
        let itemActual = imagenes[actual];
        modalTitulo.innerText = itemActual.nombre;
        modalTexto.innerText = itemActual.infoExtra;
        modalInfo.style.display = 'flex';
    });
}

if (cerrarModal) {
    cerrarModal.addEventListener('click', () => {
        modalInfo.style.display = 'none';
    });
}

// Cerrar modal si hacen clic fuera de la caja blanca
window.addEventListener('click', (e) => {
    if (e.target === modalInfo) {
        modalInfo.style.display = 'none';
    }
});

// Inicializar puntos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarImagenYTexto();
});