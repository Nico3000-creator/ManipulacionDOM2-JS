// evento para ejecutar API mediante el submit (api es una base de datos donde se importa inforamcion para mostrarla)

const form = document.querySelector("#formulario");
form.addEventListener("submit", ejecutarAPI)


// con esta funcion se baja la informacion de la accion que se cumple
function ejecutarAPI(e) {
    e.preventDefault();
    console.log(e)
}

// Capturar informacion (asigna la primer clase)
const cardDiv = document.querySelector(".card");
// console.log(cardDiv);
// Capturar pixeles en la consola la clase asignada "card"
cardDiv.addEventListener("Click", () => {
    console.log("click en card")
})

// Capturamos la informacion de forma independiente de la "card"
const cardDiv1 = document.querySelector(".card");
const tituloDiv1 = document.querySelector(".titulo");
const precioDiv1 = document.querySelector(".precio");
const conviertoDiv1 = document.querySelector(".concierto");

cardDiv1.addEventListener("Click", () => {
    console.log("click en card")
})

tituloDiv1.addEventListener("Click", () => {
     console.log("click en titulo")
})

precioDiv1.addEventListener("Click", () => {
    console.log("click en precio")
})

conviertoDiv1.addEventListener("Click", () => {
    console.log("click en concierto")
})


// caputramos el selector de una imagen mediante la consola de la misma web
const img3 = document.querySelector("body > main > section:nth-child(1) > div > div: nth-child(3) > img");

// le agregamos propiedades al contenedor "img"
// cuando sale error la imagen
img3.alt = "IMG no disponible";
// agregar una nueva clase a la imagen
img3.classList.add = "Nueva clase";
// cambiar la imagen
img3.src = "img/cualquiera1";

// ahora podemos aplicar que se modifique el contenedor de "img" mediante un click - evento
img3.addEventListener ("click", () => {
    img3.alt = "IMG no disponible";
    img3.classList.add = "Nueva clase";
    im3.src = "img/cualquiera1";
})

// (.elemento) = ELEMENTO DE HTML DE HTML (elemento padre) 
// (#elemento) = ID
// (elemento) = ENLACE
 
// capturar los elementos y ver sus propiedades en la consola
const enlace = document.querySelector(".navegacion");
console.log(enlace.children);

// eliminar el elemento 3 del array
enlace.children[3].style = "display:none";

// podes remover todo el enlace con este comando:
enlace.remove;

// para controlar que remover:
enlace.removeChild(enlace.children[3]);

// Display none: borra una parte del arbol pero si contiene un contenedor hijo sigue vivo
// removeChild: borra definitivamente el contenedor asignado y el contenedor hijo sube arriba"


// modificamos el contenido de los divs cuando seleccionamos el selector de JS
var categoria =  document.querySelector("Selector Copiado");
var titulo = document.querySelector("Selector copadio");
var precio = document.querySelector("Selector copiado");

// modificamos el texto:

categoria.textContent = "Deportes"
titulo.textContent = "Futbol de primera"
precio.textContent = "$2500 mensuales"
