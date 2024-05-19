const modal = document.getElementById("myModal");
const body = document.body;

// Abre el modal
function openModal() {
    modal.style.display = "block";
    body.style.overflow = "hidden";
    document.querySelectorAll('.imagesJuego').forEach(function (element) {
        element.style.display = 'none';
    });
}

// Cierra el modal
function closeModal() {
    modal.style.display = "none";
    body.style.overflow = "";
    document.querySelectorAll('.imagesJuego').forEach(function (element) {
        element.style.display = 'block';
    });
}

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});

let slideIndex = 1;
showSlides(slideIndex);

// Controles para avanzar y retroceder
function plusSlides(n) {
    showSlides((slideIndex += n));
}


// Controles para mostrar una imagen específica
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function adjustModalContent() {
    const modalContent = document.querySelector(".modal-content");
    const currentImage = document.querySelector(".mySlides:nth-child(" + slideIndex + ") img");

    // Verifica si la imagen existe
    if (!currentImage) {
        return;
    }

    // Obtener el ancho y alto de la imagen
    const imageWidth = currentImage.naturalWidth;
    const imageHeight = currentImage.naturalHeight;

    // Establecer el tamaño del contenedor del lightbox para que coincida con el tamaño de la imagen
    modalContent.style.width = imageWidth + "px";
    modalContent.style.height = imageHeight + "px";
}


function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const modalContent = document.querySelector(".modal-content");
    const numbertext = document.querySelector(".numbertext");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Oculta todas las imágenes
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Muestra la imagen actual
    slides[slideIndex - 1].style.display = "block";

    // Establece el ancho máximo del contenedor del lightbox para que coincida con el ancho de la imagen
    modalContent.style.maxWidth = slides[slideIndex - 1].width + "px";

    // Crear y actualizar el texto de la imagen actual
    const imagenActualText = "Imagen " + slideIndex;
    const imageCounterText = "Image " + slideIndex + " of " + slides.length;
    updateCurrentImageText(imagenActualText, imageCounterText);

    // Ajustar el tamaño del contenedor del lightbox al tamaño de la imagen
    adjustModalContent();
}

function updateCurrentImageText(imagenActualText, imageCounterText) {
    const modalContent = document.querySelector(".modal-content");
    let currentImageTextElement = document.querySelector(".current-image-text");

    // Verificar si ya existe el elemento de texto de la imagen actual
    if (!currentImageTextElement) {
        currentImageTextElement = document.createElement("div");
        currentImageTextElement.classList.add("current-image-text");
        modalContent.appendChild(currentImageTextElement);
    }

    // Aplicar estilos CSS a los textos
    currentImageTextElement.innerHTML = `<span class="current-image-header">${imagenActualText}</span><br><span class="current-image-paragraph">${imageCounterText}</span>`;
}