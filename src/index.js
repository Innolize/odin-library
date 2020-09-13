import mostrarLibro from './ui/index.js'
import Libro from './entidades/Libro.js'
import Libreria from './entidades/Libreria.js'

let miLibreria

function inicializar() {
    debugger
    miLibreria = iniciarLibreria()
    miLibreria.archivo.map(libro => mostrarLibro(libro, eliminarLibro))
}

function clickearCrearLibro(funcionCallback) {
    const botonCrearLibro = document.querySelector("#crear-libro")
    botonCrearLibro.addEventListener("click", funcionCallback)
}

function manejadorCrearLibro() {
    const libro = crearLibro()
    mostrarLibro(libro, eliminarLibro)
    limpiaInputs()
}

clickearCrearLibro(manejadorCrearLibro)

function crearLibro() {
    const author = document.querySelector("#input-author").value
    const title = document.querySelector("#input-title").value
    const pages = document.querySelector("#input-pages").value
    const read = document.querySelector("#input-read").checked

    const nuevoLibro = new Libro(author, title, pages, read)
    miLibreria.archivo.push(nuevoLibro)

    localStorage.setItem("libreria", JSON.stringify(miLibreria.archivo))

    return nuevoLibro
}

function eliminarLibro(titulo) {
    const libroAEliminar = document.querySelector(`[data-libro=${titulo}]`)
    libroAEliminar.remove()
    const libros = miLibreria.archivo
    let cachelibros = libros.filter(libro => libro.title !== titulo)
    localStorage.setItem("libreria", JSON.stringify(cachelibros))
}

function limpiaInputs() {
    const author = document.querySelector("#input-author").value = ""
    const title = document.querySelector("#input-title").value = ""
    const pages = document.querySelector("#input-pages").value = ""
    const read = document.querySelector("#input-read").checked = false
}

function iniciarLibreria() {
    const cache = localStorage.getItem("libreria")
    debugger
    const cacheParseado = JSON.parse(cache)

    return new Libreria(cacheParseado)
}

inicializar()